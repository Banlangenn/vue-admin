import fetch from 'isomorphic-fetch';
import { Notification } from 'element-ui';
import { stringify } from 'qs';
import router from "@/router";
import store from "@/store";
const  md5 =  require('md5');
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/**   
    主要是由fetch返回promise导致的，
    因为fetch返回的promise在某些错误的http状态下如400、500等不会reject，
    相反它会被resolve；
    只有网络错误会导致请求不能完成时，fetch 才会被 reject；
    所以一般会对fetch请求做一层封装，例如下面代码所示：
*/

function addPublic(config){
// xxxx
let publicparams = {
  phoneSys:'4.0.0',
  sysVersion:'4.0.0',
  verNum :  '4.0.0',   //【版本值】??
  appVersion : '4.0.0',
  apiVersion : '1.0',    //【版本】
  appPackageName : '集财理财',
  appPlatform : '3',    //【平台】
  channel :'wechat',      //【渠道】
  phoneId :'rwechat'     //【手机串号】
}
 const params = {...config.body ,publicparams};
    let sortStr = '',time = new Date().getTime();
     Object.keys(params).sort().forEach((item)=>{
         sortStr+=`"${item}":"${params[item]}"|`
     })
     sortStr+=`"mark":"f6698b14a7c04456bfc587195331cd83"|"t":"${time}"`
     config.headers = {
      'sign' :md5(sortStr).toUpperCase(),
         'p' :'jicai_html',
         't' :time,
         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8 '
     }
    config.body = stringify({parameters:JSON.stringify(params)});
  return  config;
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {  
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  Notification({
    type: 'error',
    dangerouslyUseHTMLString:true,
    title:errortext, 
    message: `<p style="word-break:break-all; ">请求错误 ${response.status}: ${response.url}</p>`,
    duration:0
  });
 
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 */
export default function request(url,method,body,headers) {
  let config = {
    credentials: 'include',
    url,
    method,
    body,
    headers
  };

  // 1 是  FormData  就不需要添加公共参数
   // newOptions.body is FormData
  if(config.body instanceof FormData){
    config.headers = {
      Accept: 'application/json',
      ...config.headers,
    };
  }else{
    // 正常请求
    // 添加公共参数开始
    config =  addPublic(config);

    if (
      config.method === 'POST' ||
      config.method === 'PUT' ||
      config.method === 'DELETE'
    ) {
      config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...config.headers,
      };
      // config.body = JSON.stringify(config.body);
    }
    if( config.method === 'GET') {
      // 加公共参数 还是需要这个东西
      config.url = `${config.url}?${stringify(config.body)}`;
      delete config.body;
    }

  }



  return fetch(url, config)
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch(e => {
      const { commit } = store;
      const status = e.name;
      if (status === 401) {
        commit('logout');//删除所有本地缓存
        router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
        })
        return;
      }
      if (status === 403) {
        router.push('/exception/403');
        return;
      }
      if (status <= 504 && status >= 500) {
        router.push({path:'/exception/500'});
        return;
      }
      if (status >= 404 && status < 422) {
        router.push({path:'/exception/404'});
      }
    });
}
