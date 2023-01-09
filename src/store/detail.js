import
{
    addOrUpdateCart,
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
    },

    //函数用了async 就一定会返回Promise,返回值非空，就是成功,Promise.reject就是失败
    async addOrUpdateCart(context,{skuId,skuNum}){
        let result = await addOrUpdateCart(skuId,skuNum);
        if (result.code == 200){
            return "ok"
        }else {
            return Promise.reject(new Error("添加失败"))
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
    },
    spuSaleAttrList({goodInfo}){
        return goodInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}