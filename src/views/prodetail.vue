<template>
    <div class="prodetail">
        <img class="detail" :src="imgurl" alt="" srcset="">
        <div class="goindex">
            <img @click="goindex()" src="../assets/home.png" alt="" srcset="">
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            imgurl:'',
            id:''
        }
    },
    mounted(){
        this.id = this.$route.params.id
        var str = '_ch_';
        if(this.languagetype == 1){
            str = '_ch_'
        }else if(this.languagetype == 2){
            str = '_en_'
        }else if(this.languagetype == 3){
            str = '_jp_'
        }
        this.imgurl = require('../assets/pro_detail'+ str + this.id +'.png')
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