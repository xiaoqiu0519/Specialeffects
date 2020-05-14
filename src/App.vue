<template>
  <div id="app">
    <router-view/>
    <div @click="setnavflagAsy(1)">点击</div>
    <transition-group name="opacityanimate">
      <navigation :key="1" v-if="navflag"/>
    </transition-group>
  </div>
</template>

<script>
import {mapActions ,mapGetters} from 'vuex';
import navigation from './views/navigation'

export default {
    computed:{
        ...mapGetters(['navflag'])
    },
    components:{
       navigation
    },
    methods:{
      ...mapActions(['setnavflagAsy'])
    }
}
</script>
<style lang="stylus">
#app
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
</style>
