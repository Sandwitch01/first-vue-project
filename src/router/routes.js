import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";

export default [
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
    {
        name:'detail',
        path:'/detail/:skuId',
        component:Detail,
        meta:{
            show:true
        }
    },

]