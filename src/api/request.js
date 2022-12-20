import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条的样式,如果要改样式，需要改nprogress.css文件
import 'nprogress/nprogress.css'

//创建一个axios实例对象
const requests = axios.create({
    //基础路径前缀，会自动加在url前面，除非url是个绝对路径
    baseURL:'/api',
    //超时时间
    timeout:5000
})


//请求拦截
requests.interceptors.request.use((config)=>{
    //config对象里有headers请求头

    //进度条开始
    nprogress.start()
    return config
})

//响应拦截
requests.interceptors.response.use((res)=>{
    //成功的回调

    //进度条结束
    nprogress.done()
    return res.data
},()=>{
    //失败的回调
    return Promise.reject(new Error('fail'))
})

export default requests
