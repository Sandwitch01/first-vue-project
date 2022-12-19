import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location,resolve,rejected){
    if (resolve && rejected){
        //call篡改函数的上下文一次,指向VueRouter实例，不用的话this会指向window
        originPush.call(this,location,resolve,rejected)
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function (location,resolve,rejected){
    if (resolve || rejected){
        //call篡改函数的上下文一次
        originReplace.call(this,location,resolve,rejected)
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}

export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            meta:{
                show:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            name:'search',
            path:'/search/:keyword',
            component:Search,
            meta:{
                show:true
            }
        },

    ]
})