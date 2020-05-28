<template>
    <div class="prodetail">
        <Swiper class="swiperdiv" :options="swiperOption">
            <swiper-slide v-for="(item,index) in swiperlist[languagetype]" :key="index">
                <div class="swiperimg">
                    <img @click="gotodetail(index+1)" :src="item.img" alt="" srcset="">
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
            swiperlist:{
                1:[
                    {img:require('../assets/pro_detail_ch_1.png')},
                    {img:require('../assets/pro_detail_ch_2.png')},
                    {img:require('../assets/pro_detail_ch_3.png')},
                    {img:require('../assets/pro_detail_ch_4.png')},
                    {img:require('../assets/pro_detail_ch_5.png')},
                    {img:require('../assets/pro_detail_ch_6.png')}
                ],
                2:[
                    {img:require('../assets/pro_detail_en_1.png')},
                    {img:require('../assets/pro_detail_en_2.png')},
                    {img:require('../assets/pro_detail_en_3.png')},
                    {img:require('../assets/pro_detail_en_4.png')},
                    {img:require('../assets/pro_detail_en_5.png')},
                    {img:require('../assets/pro_detail_en_6.png')}
                ],
                3:[
                    {img:require('../assets/pro_detail_jp_1.png')},
                    {img:require('../assets/pro_detail_jp_2.png')},
                    {img:require('../assets/pro_detail_jp_3.png')},
                    {img:require('../assets/pro_detail_jp_4.png')},
                    {img:require('../assets/pro_detail_jp_5.png')},
                    {img:require('../assets/pro_detail_jp_6.png')}
                ]
            },
        }
    },
    created(){
        this.id = this.$route.params.id
        this.swiperOption.initialSlide = this.id
    },
    mounted(){
        
        // var str = '_ch_';
        // if(this.languagetype == 1){
        //     str = '_ch_'
        // }else if(this.languagetype == 2){
        //     str = '_en_'
        // }else if(this.languagetype == 3){
        //     str = '_jp_'
        // }
        // this.imgurl = require('../assets/pro_detail'+ str + this.id +'.png')
    },
    computed:{
        ...mapGetters(['languagetype'])
    },
    methods:{
        goindex(){
            this.$router.push('/home')
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