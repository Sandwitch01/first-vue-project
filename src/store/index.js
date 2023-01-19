import Vue from 'vue';
import Vuex from 'vuex';
import Search from '@/store/search';
import Home from '@/store/home';
import Detail from '@/store/detail';
import ShopCart from '@/store/shopcart';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Home,
        Search,
        Detail,
        ShopCart
    }
})

