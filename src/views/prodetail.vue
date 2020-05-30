<template>
    <div class="prodetail">
        <Swiper class="swiperdiv" :options="swiperOption">
            <swiper-slide v-for="(item,index) in swiperlist[languagetype]" :key="index">
                <div class="swiperimg">
                    <img v-if="languagetype == 1" :src="item.detail_h5_ch" alt="" srcset="">
                    <img v-else-if="languagetype == 2" :src="item.detail_h5_ch" alt="" srcset="">
                    <img v-else-if="languagetype == 3" :src="item.detail_h5_ch" alt="" srcset="">
                </div>
            </swiper-slide>
        </Swiper>
        <div class="top" @click="goindex()"><img src="../assets/fanhui.png" alt="" srcset="">{{back[languagetype]}}</div>
        <!--
        <div class="goindex">
            <img @click="goindex()" src="../assets/home.png" alt="" srcset="">
        </div>
        -->
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            swiperOption: {
                initialSlide: 0,
                autoplay: 3000,
                speed: 1000,
            },
            back:{
                1:'返回',
                2:'Back',
                3:'帰る'
            },
            swiperlist:{ },
        }
    },
    created(){
        this.id = this.$route.params.id
        this.swiperOption.initialSlide = this.id
    },
    mounted(){
        this.getproductlist(); 
    },
    computed:{
        ...mapGetters(['languagetype'])
    },
    methods:{
        goindex(){
            this.$router.push('/home')
        },
        getproductlist(){
            this.$get('/product/getlist').then((res) => {
                if (res.error == '0000') {
                    this.swiperlist = res.data
                } else {
                    console.log(0)
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
  .prodetail
    width 100%;
    height 100%;
    background white;
    overflow hidden;
    position relative;
    .top
        width 1rem;
        height 0.4rem;
        line-height 0.4rem;
        position absolute;
        left 0;
        z-index 999;
        top 0;
        img
            width 0.1rem;
            position relative;
            top 0.05rem;
            margin-left 0.1rem;
            margin-right 0.05rem;
    .swiperdiv
        .swiperimg
            width 100%;
            margin 0 auto;
            img
                width 100%;

    .detail
        width 100%;
        height 100%;  
    .goindex
        width 0.5rem;
        text-align center;
        position fixed;
        bottom 0.3rem;    
        right 0.2rem;
        img
            width 0.4rem;
                        
</style>