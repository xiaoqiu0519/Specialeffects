import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        navflag: false,
        showflag: false,
        languagetype: 1,
        imgdata: ''
    },
    getters: {
        getloading(state) {
            return state.loading
        },
        navflag(state) {
            return state.navflag
        },
        showflag(state) {
            return state.showflag
        },
        languagetype(state) {
            return state.languagetype
        },
        imgdata(state) {
            return state.imgdata
        }

    },
    mutations: {
        changeloading(state, flag) {
            return state.loading = flag
        },
        setnavflag(state, flag) {
            return state.navflag = flag;
        },
        setshowflag(state, flag) {
            return state.showflag = flag;
        },
        setlanguagetype(state, str) {
            return state.languagetype = str
        },
        setimgdata(state, obj) {
            return state.imgdata = obj
        }

    },
    actions: {
        changeloadingAsy(context, flag) {
            context.commit('changeloading', flag)
        },
        setnavflagAsy(context, flag) {
            context.commit('setnavflag', flag)
        },
        setshowflagAsy(context, flag) {
            context.commit('setshowflag', flag)
        },
        setlanguagetypeAsy(context, str) {
            context.commit('setlanguagetype', str)
            sessionStorage.setItem('languagetype', str)
        },
        setimgdata(context, obj) {
            context.commit('setimgdata', obj)
        }
    },
    modules: {}
})