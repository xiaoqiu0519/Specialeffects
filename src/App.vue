<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    computed:{
         
    },
    mounted(){
      let languagetype = sessionStorage.getItem('languagetype') || 1;
      this.setlanguagetypeAsy(languagetype)
    },
    
    components:{
       
    },
    methods:{
      ...mapActions(['setlanguagetypeAsy'])
    }
}
</script>
<style lang="stylus">

#app
  margin 0 auto;
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 14px;     
  animation opcity1 0.5s;      
  .shadebox
    width 100%;
    height 100%;
    background rgba(0,0,0,0.5);
    position fixed;
    left 0;
    top 0;         
</style>
