<template>
    <div class="index">
        <div class="top">
            <img class="logo" src="../assets/h5_logo.png" alt="" srcset="">
        </div>
        <img class="menu" @click="setshowflagAsy(true)" src="../assets/h5_menu.png" alt="" srcset="">
        <div class="slogan" v-if="languagetype != 2">
            <p class="dowm">{{slogan[languagetype].down}}</p>
            <p class="up">{{slogan[languagetype].up}}</p>
        </div>
        <div class="slogan1" v-else>
            <div class="con">
                <p class="up">{{slogan[languagetype].up}}</p>
                <p class="dowm">{{slogan[languagetype].down}}</p>
            </div>
        </div>
        <div class="aboutus">
            <img class="bg" src="../assets/about_us_bg.png" alt="" srcset="">
            <div class="con" @click="goaboutush5()">
                <img v-if="languagetype == 1" src="../assets/h5_about_us_1.png" alt="" srcset="">
                <img v-else-if="languagetype == 2" src="../assets/h5_about_us_2.png" alt="" srcset="">
                <img v-else-if="languagetype == 3" src="../assets/h5_about_us_3.png" alt="" srcset="">
            </div>
            <img class="bg" src="../assets/about_us_bg.png" alt="" srcset="">
        </div>
        <div class="jiejue" @click="goquestenth5()">
            <img v-if="languagetype == 1" src="../assets/jiejuefangan_1.png" alt="" srcset="">
            <img v-else-if="languagetype == 2" src="../assets/jiejuefangan_2.png" alt="" srcset="">
            <img v-else-if="languagetype == 3" src="../assets/jiejuefangan_3.png" alt="" srcset="">
        </div>
        <div class="partner">
            <div class="title">{{Partner[languagetype].title}}</div>
            <div class="tip">
                <p>{{Partner[languagetype].con}}</p>
                <p>{{Partner[languagetype].tips}}</p>
            </div>
            <div class="list">
                <img src="../assets/xinlang.png" alt="" srcset="">
                <img src="../assets/weixin.png" alt="" srcset="">
                <img src="../assets/douyin.png" alt="" srcset="">
            </div>
            <div class="list">
                <img src="../assets/kuaishou.png" alt="" srcset="">
                <img src="../assets/alibaba.png" alt="" srcset="">
                <img src="../assets/baidu.png" alt="" srcset="">
                <img src="../assets/youku.png" alt="" srcset="">
            </div>
            <div class="list">
                <img src="../assets/jingdong.png" alt="" srcset="">
                <img src="../assets/xiaohongshu.png" alt="" srcset="">
                <img src="../assets/zhihu.png" alt="" srcset="">
            </div>
        </div>
        <div class="product">
            <div class="title">{{producttitle[languagetype]}}</div>
            <Swiper class="swiperdiv" :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgdata[languagetype]" :key="index">
                    <div class="swiperimg">
                        <img @click="gotodetail(index)" v-if="languagetype == 1" :src="item.small_ch" alt="" srcset="">
                        <img @click="gotodetail(index)" v-else-if="languagetype == 2" :src="item.small_ch" alt="" srcset="">
                        <img @click="gotodetail(index)" v-else-if="languagetype == 3" :src="item.small_ch" alt="" srcset="">
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
        </div>
        <div class="xlala">
            <img src="../assets/xiala.png" alt="" srcset="">
            <p class="lineslide"></p>
        </div>
        <footerh5></footerh5>
        <navigationh5 v-if="showflag"></navigationh5>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import footerh5 from '@/views/footerh5'
import navigationh5 from '@/views/navigationh5'
export default {
    data(){
        return{
            slogan:{
                1:{
                    down:'美有关的事业',
                    up:'致力于一切和'
                },
                2:{
                    down:'about beauty',
                    up:'Do everthing'
                },
                3:{
                    down:'すべての美に関',
                    up:'わることをする'
                }
            },
            Partner:{
                1:{
                title:'我们的合作伙伴',
                con:'Lacrae（乐科锐）与所有主要的线上和线下销售渠道',
                tips:'和营销平台建立了牢固的合作关系。'
                },
                2:{
                title:'Our Partners',
                con:"Lacrae has developed a strong working relationships with all",
                tips:'key online and offline sales channels and platforms'
                },
                3:{
                title:'我々のパートナー',
                con:"LACRAEはすべての主要なオンラインとオフラインの販売ルートとマ",
                tips:'ーケティングプラットフォームと強固な協力関係を築いた'
                },
            },
            producttitle:{
                1:'案例展示',
                2:'Case Study',
                3:'コンサルティング事例'
            },
            swiperlist:{},
            swiperOption: {
                pagination: {
                el: '.swiper-pagination'
                },
                autoplay: 3000,
                speed: 1000,
            }
        }
    },
    props:['imgdata'],
    computed:{
        ...mapGetters(['languagetype','showflag'])
    },
    components:{
        footerh5,
        Swiper,
        SwiperSlide,
        navigationh5
    },
    methods:{
        ...mapActions(['setshowflagAsy']),
        goaboutush5(){
            this.$router.push('/aboutush5')
        },
        goquestenth5(){
            this.$router.push('/questenth5')
        },
        gotodetail(index){
            this.$router.push('/prodetail/id/' + index)
        }
    }
    
}
</script>
<style lang="stylus" scoped>
@keyframes slideheight {
    0% {
        top 0;    
    }
    100% {
        top 0.3rem;
    };
    
}
.index
    width 100%;
    .xlala
        width 0.3rem;
        height 0.7rem;
        overflow hidden;
        margin-top -0.6rem;
        position fixed;
        top 50%;
        left 0rem;
        text-align center;
        z-index 999;
        img
            width 0.3rem;
        .lineslide
            margin 0 auto;
            width 2px;
            margin-top 0.1rem;
            height 0.6rem;    
            background white;
            animation slideheight 1s infinite ease;
            position relative;
            top 0;
    .menu
        position fixed;
        width 0.3rem; 
        top 0.2rem;
        right 0.2rem; 
        z-index 99;
    .top
        width 96%;
        height 0.5rem;
        margin 0 auto;
        display flex;
        justify-content space-between;
        align-items center;
        .logo
            width 0.7rem;
    .slogan
        width 100%;
        height 5.3rem;
        display flex;
        justify-content center;
        align-items center;
        p
            width 0.5rem;
            font-size 0.3rem;
            text-align center;   
            font-weight 900;
        .dowm
            margin-top 1rem;
        .up
            margin-top -1rem;  
    .slogan1
        width 100%;
        height 6.3rem;
        display flex;
        justify-content center;
        align-items center;
        .con
            transform rotate(90deg);
            margin-bottom: 1rem;
            p
                font-size 0.3rem;
                text-align center;   
                font-weight 900;  
                position relative; 
            .dowm
                left 0.5rem;
            .up
                left -0.5rem;       
    .aboutus
        display flex;
        justify-content space-between;
        align-items center;
        .bg
            width 0.55rem;
            height 4rem;
        .con
            width 2.3rem;
            margin 0 auto;
            img
                width 100%;   
    .jiejue
        margin-top 0.8rem;
        text-align center;
        img
            width 2.3rem;                   
    .partner
        width 100%;
        text-align center;
        margin-top 0.8rem;
        .title
            font-size 0.25rem;
            font-weight 900;
        .tip
            margin-top 0.17rem;
            margin-bottom 0.25rem;
            font-size 0.12rem;
            p
                margin-top 0.05rem;
        .list
            width 100%;
            img
                width 0.85rem;        
    .product
        margin-top 0.55rem;
        width 100%;
        height 6rem;
        background url('../assets/zhanshi.png') no-repeat;   
        background-size 110% auto;  
        background-position 50% 0;
        padding-top 0.1rem;
        .title
            width 100%;
            text-align center;
            font-size 0.25rem;
            font-weight 800;
            color  #1C1D1D;
            margin-bottom 0.1rem;
        .swiperdiv
            .swiperimg
                width 85%;
                margin 0 auto;
                img
                    width 100%;
</style>
<style>
.swiper-container{
    padding-bottom: 0.5rem;
}
</style>