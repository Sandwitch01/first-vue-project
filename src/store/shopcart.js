import
{
    getCartList
} from '@/api'

const state = {
    cartList:[]
}

const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}

const actions = {

    async getCartList(context,param){
        let result =  await getCartList()
        console.log(result)
        if (result.code == 200){
            context.commit('GETCARTLIST',result.data)
        }
    }
}

const getters = {
    cartList(state){
        return state.cartList[0] || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}