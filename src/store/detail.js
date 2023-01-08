import
{
    getGoodDetail,
} from '@/api'

const state = {
    goodInfo:{}
}

const actions = {
    async getGoodDetail(context,skuId){
        let result = await getGoodDetail(skuId);
        if (result.code == 200){
            context.commit('GETGOODDETAIL',result.data)
        }
    }
}

const mutations = {
    GETGOODDETAIL(state,goodInfo){
        state.goodInfo = goodInfo
    }
}

const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}