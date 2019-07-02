import axios from 'axios';
// axios 请求返回的是一个promise axios是基于promise封装的ajax
// 轮播图  export导出 导出的是一个接口，不能是固定值

// http://132.232.89.22:3000 服IP务端
// axios.defaults.baseURL = 'http://localhost:3003'; //提取公共的请求地址
axios.defaults.baseURL = 'http://132.232.89.22:3000';
// 响应拦截 interceptors  拦截器(过滤器)
//Promise.all => axios.all
axios.interceptors.response.use(res => {
  return res.data
}, err => {
  Promise.reject(err)
})
//返回promise  轮播图请求
const getBanner = () => axios.get('/banner');
// 首页列表的请求
const getList = () => axios.get('/list');
//getHomeAll 执行拿到的结果 [banner：[],list:[]]
const getHomeAll = () => {
  return axios.all([getBanner(), getList()])
}
// export { getBanner, getList };
export { getHomeAll }
