<template>
    <div class="aboutus">
        <div class="con">
            <div class="top" @click="goindex()"><img src="../assets/fanhui1.png" alt="" srcset="">{{back[languagetype]}}</div>
            <img v-if="languagetype == 1" src="../assets/auout_us_h5_1.png" alt="" srcset="">
            <img v-else-if="languagetype == 2" src="../assets/auout_us_h5_2.png" alt="" srcset="">
            <img v-else-if="languagetype == 3" src="../assets/auout_us_h5_3.png" alt="" srcset="">
        </div>
        
        <footerh5></footerh5>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import footerh5 from '@/views/footerh5'
export default {
    data(){
        return{
            back:{
                1:'返回',
                2:'Back',
                3:'帰る'
            },
        }
    },
    components:{
        footerh5
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
.aboutus
    width 100%;
    
    .con
        width 100%;
        margin-bottom 0.5rem;
        img 
            width 100%;
        .top
            width 1rem;
            height 0.4rem;
            line-height 0.4rem;
            position absolute;
            left 0;
            top 0;
            color #e8560b;
            img
                width 0.2rem;
                position relative;
                top 0.06rem;
                margin-left 0.1rem;
                margin-right 0.05rem;    
</style>