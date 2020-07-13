import Vue from 'vue'
import App from './App.vue'
// import './commom/stylus.styl';
import './registerServiceWorker'
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import store from './store'
import {get, post } from './commom/config';
import { ChangeResize } from './commom/commom';
ChangeResize(window, document)
Vue.prototype.loadingflag = function(flag) {
    store.dispatch('changeloadingAsy', flag)
}
let hrefstr = window.location.href;
if(hrefstr.includes('.com.au')){
    store.dispatch('setlanguagetypeAsy',2)
}
if(hrefstr.includes('.jp')){
    store.dispatch('setlanguagetypeAsy',3)
}
Vue.config.productionTip = false
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.use(VueAwesomeSwiper)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')