const state = {a:1}

const mutations = {
    ADD(state){
        state.a++
    }
}

const actions = {
    add(store){
        store.commit('ADD')
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