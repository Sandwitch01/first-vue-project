import
{
    getBaseCategoryList,
    getBanners,
    getFloors
} from '@/api'

const state = {
    categoryList:[],
    banners:[],
    floors:[]
}

const mutations = {
    GETCATEGORYLIST(state,list){
        state.categoryList = list
    },
    GETBANNERS(state,list){
        state.banners = list
    },
    GETFLOORS(state,list){
        state.floors = list
    },
}

const actions = {
    async categoryList(context){
        let result = await getBaseCategoryList()
        if (result.code == 200){
            context.commit('GETCATEGORYLIST',result.data)
        }
    },

    async getBanners(context){
        let result = await getBanners()
        if (result.code == 200){
            context.commit('GETBANNERS',result.data)
        }
    },

    async getFloors(context){
        let result = await getFloors()
        if (result.code == 200){
            context.commit('GETFLOORS',result.data)
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