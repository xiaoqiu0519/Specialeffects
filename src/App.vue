<template>
  <div id="app">
    <router-view/>
    <transition-group name="opacityanimate">
      <navigation :key="1" v-if="navflag"/>
    </transition-group>
    <Footer/>
    <!-- <div class="shadebox"></div> -->
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import navigation from './views/navigation'
import Footer from './views/Footer'

export default {
    computed:{
         ...mapGetters(['navflag'])
    },
    mounted(){
      let languagetype = sessionStorage.getItem('languagetype') || 1;
      this.setlanguagetypeAsy(languagetype)
    },
    components:{
       navigation,
       Footer
    },
    methods:{
      ...mapActions(['setlanguagetypeAsy'])
    }
}
</script>
<style lang="stylus">
@keyframes opcity1 {
    0% {opacity :0;}
    100% {opacity:1};
}
#app
  //width: 1200px;
  margin 0 auto;
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 14px;     
  animation opcity1 0.5s;
  .opacityanimate-enter,.opacityanimate-leave-to{
    opacity: 0;
  }
  .opacityanimate-enter-to,.opacityanimate-leave{
    opacity: 1;
  }
  .opacityanimate-enter-active,.opacityanimate-leave-active{
    transition: all 1.5s;
  }       
  .shadebox
    width 100%;
    height 100%;
    background rgba(0,0,0,0.5);
    position fixed;
    left 0;
    top 0;
  .menu
    width 50px;
    height 50px;
    position absolute;
    top 200px;
    right 100px;
    z-index 10;
    text-align center;
    font-size:14px;
    font-family:Source Han Sans SC;
    font-weight:500
    color white;
    cursor pointer;
    img
        width 30px;   
        margin-top 10px;             
</style>
