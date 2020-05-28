<template>
    <div class="nav"> 
        <div class="bc" @click="closenav()"></div>
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
       // window.addEventListener('scroll', this.menu)
    },
    methods:{
        ...mapActions(['setnavflagAsy']),
        closenav(){
            this.enterflag = false
            setTimeout(()=>{
                this.setnavflagAsy(0)
            },400)
        },
        setClass(value) {
            let obj = {list:true}
            obj['animateleft'+value] = true;
            return obj;
        },
        dddd(index){
            let m = 0;
            switch(index){
                case 0:
                    m=500;
                break;
                case 1:
                    m=900
                break;
                case 2:
                    m=1400
                break;
                case 3:
                    m=2100
                break;
                case 4:
                    m=3000
                break;
            }
            window.scrollTo({ 
                top: m, 
                behavior: "smooth" 
            })    
            this.closenav()
        },
        menu() {
            // this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(this.scroll)
        },
    }
}
</script>
<style lang="stylus" scoped>
@keyframes enter { 
    0% { margin-left:100%} 
    100% { margin-left:70%} 
}
@keyframes out { 
    0% { margin-left:70%} 
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
    background rgba(0,0,0,0.5);
    .enter
        animation enter 0.4s ease-in-out;
        margin-left 70%;
    .out
        animation out 0.4s ease-in;
        margin-left 100%;
    .bc
        width 70%;
        height 100%;
        background transparent;    
        position fixed;
        left 0;
        top 0;
        z-index 11111
    .content
        width 30%;
        height 100%;
        background white;
        position relative;
        background white;
        .closeimg
            width 0.3rem;
            height 0.3rem;
            position absolute;
            top 0;
            right 0;
            color #333333;
            text-align center;
            cursor pointer;
            img
                width 0.15rem;
                margin-top 0.075rem;
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
                    text-indent 0.12rem;
                    flex-wrap wrap;
            .animateleft0
                animation animateleft 1s ease;
            .animateleft1
                animation animateleft 1.1s ease;
            .animateleft2
                animation animateleft 1.2s ease;
            .animateleft3
                animation animateleft 1.3s ease;
            .animateleft4
                animation animateleft 1.4s ease;
            .animateleft5
                animation animateleft 1.5s ease;
            .animateleft6
                animation animateleft 1.6s ease;
            .animateleft7
                animation animateleft 1.7s ease;
            .animateleft8
                animation animateleft 1.8s ease;                            
            .list
                width 100%;
                background white;
                margin-left 0;
                opacity 1;
                color #1E1E1E;
                margin-bottom 0.05rem;
                cursor pointer;
                line-height 1;
                font-size:0.05rem;
                font-family:Source Han Sans SC;
                &:hover
                    opacity 0.5;
            .slogan
                margin-bottom 0.15rem;
                img 
                    width 0.4rem; 
                       
</style>