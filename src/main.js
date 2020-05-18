import Vue from 'vue'
import App from './App.vue'
import './commom/stylus.styl';
import './registerServiceWorker'
import Ripple from 'vue-ripple-directive'
import router from './router'
import store from './store'
import {get, post } from './commom/config';
Vue.directive('ripple', Ripple)

Ripple.color = 'rgba(255, 255, 255, 0.35)'; //这里是用来设置波纹颜色

Ripple.zIndex = 55; //设置它的层级



Vue.prototype.loadingflag = function(flag) {
    store.dispatch('changeloadingAsy', flag)
}
Vue.config.productionTip = false
Vue.prototype.$get = get;
Vue.prototype.$post = post;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')