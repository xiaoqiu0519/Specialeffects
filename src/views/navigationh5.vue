<template>
    <div class="nav"> 
        <div :class="{content:true,enter:enterflag,out:!enterflag}">
            <div class="closeimg" @click="closenav()">
                <img src="../assets/closeimg.png" alt="" srcset="">
            </div>
            <div class="navlist">
                <div class="conta">
                    <div class="slogan"><img src="../assets/lacrae.png" alt="" srcset=""></div>
                    <div :class="setClass(index)" @click="dddd(index)" v-for='(list,index) in navArr[languagetype]' :key="index">{{list}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions ,mapGetters} from 'vuex';
export default {
    data(){
        return{
            showflag:false,
            enterflag:true,
            navArr:{
                1:[
                    '关于我们',
                    '营销方案',
                    '合作伙伴',
                    '案例展示',
                    '联系我们'
                ],
                2:[
                    'About Lacrae',
                    'Marketing Plan',
                    'Partners',
                    'Case Study',
                    'Contanct Us'
                ],
                3:[
                    'Laraeについて',
                    'サービス内容',
                    'Laraeのパートナー',
                    'コンサルティング事例',
                    'お問い合わせ'
                ]
                
            }
        }
    },
    computed:{
        ...mapGetters(['navflag','languagetype'])
    },
    components:{
       
    },
    mounted(){
        //window.addEventListener('scroll', this.menu)
    },
    methods:{
        ...mapActions(['setshowflagAsy']),
        closenav(){
            this.enterflag = false
            setTimeout(()=>{
                this.setshowflagAsy(0)
            },400)
        },
        setClass(value) {
            let obj = {list:true}
            obj['animateleft'+value] = true;
            return obj;
        },
        menu() {
            // this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(this.scroll)
        },
        dddd(index){
            let m = 0;
            switch(index){
                case 0:
                    m=480;
                break;
                case 1:
                    m=950
                break;
                case 2:
                    m=1450
                break;
                case 3:
                    m=1920
                break;
                case 4:
                    m=2300
                break;
            }
            console.log(m)
            // let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            // var p =Math.abs(scroll - m)
            // var timer ;
            // if(scroll >= m){
            //     timer = setInterval(()=>{
            //         p -= 5;
            //         if( p <= 0){
            //             clearInterval(timer)
            //         }
            //         window.scrollTo({ top: scroll - p}) 
            //     },10) 
            // }else {
            //     timer = setInterval(()=>{
            //         p -= 5;
            //         if( p <= 0){
            //             clearInterval(timer)
            //         }
            //         window.scrollTo({ top: m + p}) 
            //     },10) 
            // }
            
            window.scrollTo({
                top:m
            })
            this.setshowflagAsy(0)
        }
    }
}
</script>
<style lang="stylus" scoped>
@keyframes enter { 
    0% { margin-left:100%} 
    100% { margin-left:50%} 
}
@keyframes out { 
    0% { margin-left:50%} 
    100% { margin-left:100%} 
}
@keyframes animateleft {
    0% {
        margin-left:100%;
        opacity:0;
    }
    100% {
        margin-left:0
        opacity:1
    }
}
@keyframes scaleDraw {
    0% {transform:scale(1);}
    100% {transform:scale(1.1)};
}
.nav
    position fixed;
    width 100%;
    height 100%;
    left 0;
    top 0;
    z-index 100;
    background rgba(0,0,0,0.5);
    .enter
        animation enter 0.4s ease-in-out;
        margin-left 50%;
    .out
        animation out 0.4s ease-in;
        margin-left 100%;
    .content
        width 50%;
        height 100%;
        background white;
        position relative;
        background white;
        .closeimg
            width 100px;
            height 100px;
            position absolute;
            top 0;
            right 0;
            color #333333;
            text-align center;
            cursor pointer;
            img
                width 0.32rem;
                margin-top 0.34rem;
                transition: all 0.6s; 
                &:hover
                    transform: scale(1.6);   
        .navlist
            width 100%;
            height 100%;
            display flex;
            align-items center;
            .conta
                
                div
                    width 100%;
                    text-indent 0.2rem;
                    flex-wrap wrap;
            .animateleft0
                animation animateleft 0.5s ease;
            .animateleft1
                animation animateleft 0.7s ease;
            .animateleft2
                animation animateleft 0.8s ease;
            .animateleft3
                animation animateleft 0.9s ease;
            .animateleft4
                animation animateleft 1s ease;
            .animateleft5
                animation animateleft 1.1s ease;
            .animateleft6
                animation animateleft 1.2s ease;
            .animateleft7
                animation animateleft 1.3s ease;
            .animateleft8
                animation animateleft 1.4s ease;                            
            .list
                width 100%;
                background white;
                margin-left 0;
                opacity 1;
                color #1E1E1E;
                margin-bottom 0.16rem;
                cursor pointer;
                line-height 1;
                font-size:0.14rem;
                font-family:Source Han Sans SC;
                &:hover
                    opacity 0.5;
            .slogan
                margin-bottom 0.4rem;
                img 
                    width 1.2rem; 
                       
</style>