import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "@/router/routes";

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
    routes,
    //跳转完后滚动条置顶
    scrollBehavior(to,route,position){
        return {y:0}
    }
})