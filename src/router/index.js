import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';


Vue.use(VueRouter);

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