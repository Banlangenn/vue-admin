import fetch from 'isomorphic-fetch';
import vue from vue;
// import { notification } from 'antd';
import { Notification } from 'element-ui';
// import { routerRedux } from 'dva/router';
// import store from '../index';
import { stringify } from 'qs';
import router from "@/router";
import store from "@/store";
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

function addPublic(params){
// xxxx


  return  params;
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  Notification.error({
    title: `请求错误 ${response.status}: ${response.url}`,
    message: errortext,
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
  const newOptions = {
    credentials: 'include',
    url,
    method,
    body,
    headers
  };

  // 1 是  FormData  就不需要添加公共参数
   // newOptions.body is FormData
  if(newOptions.body instanceof FormData){
    newOptions.headers = {
      Accept: 'application/json',
      ...newOptions.headers,
    };
  }else{
    // 正常请求

    // 添加公共参数开始
    newOptions =  addPublic(newOptions);

    if (
      newOptions.method === 'POST' ||
      newOptions.method === 'PUT' ||
      newOptions.method === 'DELETE'
    ) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    }


    if( newOptions.method === 'GET') {
      // 加公共参数 还是需要这个东西
      newOptions.url = `${newOptions.url}?${stringify(newOptions.body)}`;
      delete newOptions.body;
    }
  }



  return fetch(url, newOptions)
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
