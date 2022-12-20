import {getBaseCategoryList} from '@/api'

const state = {
    categoryList:[]
}

const mutations = {
    CATEGORYLIST(state,list){
        state.categoryList = list
    }
}

const actions = {
    async categoryList(context){
        let result = await getBaseCategoryList()
        if (result.code == 200){
            context.commit('CATEGORYLIST',result.data)
        }
    }
}

const getters = {

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}