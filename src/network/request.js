import axios from 'axios'
import {message} from 'ant-design-vue';

export function instance(data){ 
    const instance = axios.create({
        baseURL:'https://cloud-music-api-two.vercel.app',
        timeout:5000
    })

    // axios.interceptors是全局拦截
    instance.interceptors.request.use(config=>{
        console.log('config全局拦截',config)
        return config
    })

    instance.interceptors.response.use(res=>{
        console.log('数据回来了')
            return res.data.result||res.data.songs||res.data
            
    },err=>{
        
        if(err.message.indexOf('timeout')!=-1){
           message.error('请求超时',1)
        }
        throw err
    })
    return instance(data)//axios本身返回的就是promise风格,就可以用then
}

