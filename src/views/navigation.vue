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
            window.scrollTo({ 
                top: 500 * (index+1), 
                behavior: "smooth" 
            })    
        }
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
    .content
        width 30%;
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
                width 32px;
                margin-top 34px;
                transition: all 0.6s; 
                &:hover
                    transform: scale(1.6);   
        .navlist
            width 100%;
            height 100%;
            display flex;
            align-items center;
            .conta
                height 205px;
                div
                    width 100%;
                    text-indent 35px;
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
                margin-bottom 16px;
                cursor pointer;
                line-height 1;
                font-size:16px;
                font-family:Source Han Sans SC;
                &:hover
                    opacity 0.5;
            .slogan
                margin-bottom 47px;
                img 
                    width 120px; 
                       
</style>