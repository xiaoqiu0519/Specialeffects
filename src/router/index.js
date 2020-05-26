import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: resolve => (require(["@/views/Home"], resolve))
}, {
    path: '/home',
    name: 'Home',
    component: resolve => (require(["@/views/Home"], resolve))
}, {
    path: '/aboutus',
    name: 'AboutUs',
    component: resolve => (require(["@/views/aboutus"], resolve))
}, {
    path: '/aboutush5',
    name: 'AboutUsh5',
    component: resolve => (require(["@/views/aboutush5"], resolve))
}, {
    path: '/questent',
    name: 'Questent',
    component: resolve => (require(["@/views/questent"], resolve))
}, {
    path: '/questenth5',
    name: 'QuestentH5',
    component: resolve => (require(["@/views/questenth5"], resolve))
}, {
    path: '/product/id/:id',
    name: 'Product',
    component: resolve => (require(["@/views/product"], resolve))
}, {
    path: '/prodetail/id/:id',
    name: 'Prodetail',
    component: resolve => (require(["@/views/prodetail"], resolve))
}, ]

const router = new VueRouter({
        mode: 'hash',
        base: process.env.BASE_URL,
        routes,
    })
    // router.afterEach((to) => {
    //     let { name } = to;
    //     console.log(to.name)
    //     switch (name) {
    //         case 'Home':
    //             setTimeout(() => {
    //                 document.body.style.height = '3750px';
    //             }, 100)
    //             break;
    //         case 'Product':
    //             setTimeout(() => {
    //                 document.body.style.height = '1350px';
    //             }, 100)
    //             break;
    //         case 'AboutUs':
    //             setTimeout(() => {
    //                 document.body.style.height = '1000px';
    //             }, 100)

//             break;
//     }
// })
// router.afterEach(route => {
//     console.log(route)
//         //document.getElementsByTagName('canvas')[0].setAttribute('height') = '1350px'
//         //console.log(document.getElementsByTagName('canvas').getAttribute)


// })


export default router