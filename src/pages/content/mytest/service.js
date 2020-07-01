import request from '../../../request';


const URL={
    GET_LIST:'/api/mytest/list',
}

export const getlist = (params) => {
    console.log("params",params);
    return request(URL.GET_LIST, {
        method: "post",
        data: params
    });
}