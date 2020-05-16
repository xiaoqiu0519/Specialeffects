import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
    component: resolve => (require(["@/views/Home"], resolve))
}, {
    path: '/home',
    name: 'Home',
    component: resolve => (require(["@/views/Home"], resolve))
}, {
    path: '/aboutus',
    name: 'AboutUs',
    component: resolve => (require(["@/views/aboutus"], resolve))
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
router.afterEach((to) => {
    window.scrollTo(0, 0);
    let { path } = to;
    console.log(to)
    switch (path) {
        case '/home':
        case '/':
            document.body.style.height = '3750px';
            break;
    }
})


export default router