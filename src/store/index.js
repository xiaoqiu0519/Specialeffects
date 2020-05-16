import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        navflag: false,
        languagetype: '1',
    },
    getters: {
        getloading(state) {
            return state.loading
        },
        navflag(state) {
            return state.navflag
        },
        languagetype(state) {
            return state.languagetype
        }

    },
    mutations: {
        changeloading(state, flag) {
            return state.loading = flag
        },
        setnavflag(state, flag) {
            return state.navflag = flag;
        },
        setlanguagetype(state, str) {
            return state.languagetype = str
        }

    },
    actions: {
        changeloadingAsy(context, flag) {
            context.commit('changeloading', flag)
        },
        setnavflagAsy(context, flag) {
            context.commit('setnavflag', flag)
        },
        setlanguagetypeAsy(context, str) {
            context.commit('setlanguagetype', str)
        }
    },
    modules: {}
})