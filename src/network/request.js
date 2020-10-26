import axios from 'axios'

export function request(config){
    //1.创建axios实例
    const instance =axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6',
        timeout:5000
    })

    //2. axios的拦截器
    //2.1axios的请求拦截器
    instance.interceptors.request.use(config=>{

        return config
    },err=>{

    })

    //2.2响应拦截器
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })

    return instance(config)
}