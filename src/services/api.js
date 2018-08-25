import request from '@/utils/request';


// url,method,body,headers


  export const fakeChartData = async data => request('api/Product/login','POST',data);
  export const loadProductByTypeNew = async data => request('api/Product/loadProductByTypeNew','POST',data);


