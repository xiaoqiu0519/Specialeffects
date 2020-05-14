import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,

    },
    getters: {
        getloading(state) {
            return state.loading
        },

    },
    mutations: {
        changeloading(state, flag) {
            return state.loading = flag
        },

    },
    actions: {
        changeloadingAsy(context, flag) {
            context.commit('changeloading', flag)
        },
    },
    modules: {}
})