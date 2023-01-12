import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

export default [
    {
        path: '/shopCart',
        name:'shopCart',
        component: ShopCart,
        meta:{
            show:true//是否显示底部信息
        }
    },
    {
        path:'*',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta:{
            show:true//是否显示底部信息
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
    },,
    {
        name:'addCartSuccess',
        path:'/addCartSuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },

]