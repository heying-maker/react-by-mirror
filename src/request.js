
import axios from 'axios';
function my(url, options) {
    const req = axios({
        method: options.method,
        url: url,
        // baseURL: 'https://some-domain.com/api/',  // 用于拼接url前
        data: options.data,
        params: options.param,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then(function (response) {
        console.log("response", response);
    }).catch(function (error) {
        console.log("erroe", error);
    })
    return req;
}

export default my;

// exports.default = function (url, options) {
//     return (0, axios)(_extends({
//         method: options.method,
//         url: url,
//         data: options.data,
//         params: options.param,
//         headers: { 'X-Requested-With': 'XMLHttpRequest' },
//         showLoading: true
//     }, options)).catch(function (err) {
//         console.log(err);
//         if (err.response && err.response.status == 401) {
//             // (0, _index.Error)(err.response.data && err.response.data.msg);
//             return;
//         } else if (err.response && err.response.status == 306) {
//             // top.location.href = '/wbalone/pages/login/login.html?r=L3BvcnRhbC8';
//             return;
//         } else {
//             return;
//         }
//     });
// };

// axios.defaults.timeout = 40000;

// axios.interceptors.request.use(function (config) { //请求拦截器
//     if (config.showLoading) {
//         // (0, _index.toast)({ show: true });
//     }
//     return config;
// }, function (error) {
//     return _promise.reject(error);
// });

// axios.interceptors.response.use(function (config) {  //相应拦截器
//     // (0, _index.toast)({ show: false });
//     return config;
// }, function (error) {
//     // (0, _index.toast)({ show: false });
//     if (error && error.response) {
//         switch (error.response.status) {
//             case 400:
//                 error.message = '错误请求';
//                 break;
//             case 401:
//                 error.message = '未授权，请重新登录';
//                 break;
//             case 403:
//                 error.message = '拒绝访问';
//                 break;
//             case 404:
//                 error.message = '请求错误,未找到该资源';
//                 break;
//             case 405:
//                 error.message = '请求方法未允许';
//                 break;
//             case 408:
//                 error.message = '请求超时';
//                 break;
//             case 500:
//                 error.message = '服务器端出错';
//                 break;
//             case 501:
//                 error.message = '网络未实现';
//                 break;
//             case 502:
//                 error.message = '网络错误';
//                 break;
//             case 503:
//                 error.message = '服务不可用';
//                 break;
//             case 504:
//                 error.message = '网络超时';
//                 break;
//             case 505:
//                 error.message = 'http版本不支持该请求';
//                 break;
//             default:
//                 error.message = "\u8FDE\u63A5\u9519\u8BEF" + error.response.status;
//         }
//     } else {
//         error.message = "连接到服务器失败";
//     }
//     //    (error.message);
//     return _promise.reject(error);
// });