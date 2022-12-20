import Vue from 'vue';
import Vuex from 'vuex';
import Search from '@/store/Search';
import Home from '@/store/Home';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Home,
        Search
    }
})

