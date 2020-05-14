<template>
    <div class="nav"> 
        <div :class="{content:true,enter:enterflag,out:!enterflag}">
            <div class="closeimg" @click="closenav()"></div>
            <div class="navlist">
                <div :class="setClass(index)" v-for='(list,index) in 6' :key="index">三大纪律看见啊湿垃圾三份</div>
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
        }
    },
    computed:{
        ...mapGetters(['navflag'])
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
.nav
    position fixed;
    width 100%;
    height 100%;
    left 0;
    top 0;
    background rgba(0,0,0,0.5);
    .enter
        animation enter 0.4s ease-in;
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
            top 20px;
            right 20px;
            background red;
        .navlist
            width 300px;
            height 400px;
            background yellow; 
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
                height 30px;
                background white;
                margin-bottom 10px;   
                margin-left 0;
                opacity 1;

</style>