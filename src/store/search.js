import {getSearchInfo} from "@/api";

const state = {
    searchInfo:{}
}

const mutations = {
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo = searchInfo
    }
}

const actions = {
    async getSearchInfo(context,params={}){

        let result = await getSearchInfo(params);
        if (result.code == 200){
            context.commit("GETSEARCHINFO",result.data)
        }
    }
}

const getters = {
    goodsLis(state) {
        return state.searchInfo.goodsList || []
    },
    attrsList(state){
        return state.searchInfo.attrsList || []
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || []
    },
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}