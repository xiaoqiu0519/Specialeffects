import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        navflag:false

    },
    getters: {
        getloading(state) {
            return state.loading
        },
        navflag(state){
            return state.navflag
        }

    },
    mutations: {
        changeloading(state, flag) {
            return state.loading = flag
        },
        setnavflag(state,flag){
            return state.navflag = flag;
        }

    },
    actions: {
        changeloadingAsy(context, flag) {
            context.commit('changeloading', flag)
        },
        setnavflagAsy(context,flag){
            context.commit('setnavflag',flag)
        }
    },
    modules: {}
})