<template>
  <div id="app">
    <router-view/>
    <div class="menu" @click="setnavflagAsy(1)" v-if="!navflag">
        <img src="../src/assets/meun.png" alt="" srcset="">
        <p>menu</p>
    </div>
    <transition-group name="opacityanimate">
      <navigation :key="1" v-if="navflag"/>
    </transition-group>
    <Footer/>
  </div>
</template>

<script>
import {mapActions ,mapGetters} from 'vuex';
import navigation from './views/navigation'
import Footer from './views/Footer'

export default {
    computed:{
        ...mapGetters(['navflag'])
    },
    mounted(){
        //console.log($)
    },
    components:{
       navigation,
       Footer
    },
    methods:{
      ...mapActions(['setnavflagAsy'])
    }
}
</script>
<style lang="stylus">
#app
  width: 1200px;
  margin 0 auto;
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 14px;     
  .opacityanimate-enter,.opacityanimate-leave-to{
    opacity: 0;
  }
  .opacityanimate-enter-to,.opacityanimate-leave{
    opacity: 1;
  }
  .opacityanimate-enter-active,.opacityanimate-leave-active{
    transition: all 1.5s;
  }       
  .menu
    width 50px;
    height 50px;
    position absolute;
    top 200px;
    right 100px;
    z-index 10;
    text-align center;
    font-size:10px;
    font-family:Source Han Sans SC;
    font-weight:500
    color white;
    cursor pointer;
    img
        width 25px;   
        margin-top 10px;             
</style>
