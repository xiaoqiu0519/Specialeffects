<template>
  <div id="app">
    <div class="view-h5" v-if="showh5">
      <img class="view-menu-h5" @click="setshowflagAsy(true)" v-if="show_w" src="./assets/h5_menu_1.png" alt="" srcset="">
      <img class="view-menu-h5" @click="setshowflagAsy(true)" v-else src="./assets/h5_menu_2.png" alt="" srcset="">
      <navigationh5 v-if="showflag"></navigationh5>
    </div>
    <div class="view-pc" v-if="showpc">
      <div class="view-menu-pc" @click="setnavflagAsy(1)" v-if="!navflag">
        <img v-if="show_p" src="./assets/h5_menu_1.png" alt srcset />
        <img v-else src="./assets/h5_menu_2.png" alt srcset />
        <p :class="{show_p:!show_p}">MENU</p>
      </div>
      <transition-group name="opacityanimate">
        <navigation :key="1" v-if="navflag" />
      </transition-group>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import navigationh5 from '@/views/navigationh5'
import navigation from "@/views/navigation";
export default {
  data(){
    return{
      showpc:false,
      showh5:false,
      show_w:true,
      show_p:false
    }
  },
  computed:{
    ...mapGetters(['showflag','navflag'])  
  },
  watch:{
    $route(){
      if(location.hash !== '#/aboutush5' && this.showh5){
        this.show_w = true
      }else{
        this.show_w = false
      }
      if(location.hash === '#/home' && this.showpc){
        this.show_p = true
      }else{
        this.show_p = false
      }

    }
  },
  mounted(){
    let languagetype = sessionStorage.getItem('languagetype') || 1;
    this.setlanguagetypeAsy(languagetype)
    this.loadpage()
    var vm = this;
    window.addEventListener('resize', function() {
      vm.loadpage()
    })
  },
  
  components:{
      navigationh5,
      navigation
  },
  methods:{
    ...mapActions(['setlanguagetypeAsy','setshowflagAsy','setnavflagAsy']),
    loadpage(){
      let clientwidth = document.documentElement.clientWidth;
      if(clientwidth < 900){
        this.showpc = false
        this.showh5 = true
      }else{
        this.showpc = true
        this.showh5 = false
      }
    },
  }
}
</script>
<style lang="stylus">
.opacityanimate-enter, .opacityanimate-leave-to {
  opacity: 0;
}

.opacityanimate-enter-to, .opacityanimate-leave {
  opacity: 1;
}

.opacityanimate-enter-active, .opacityanimate-leave-active {
  transition: all 1.5s;
}
#app
  width 100%;
  height 100%;
  overflow auto;
  -webkit-overflow-scrolling : touch;
  margin 0 auto;
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 14px;     
  animation opcity1 0.5s; 
  .view-pc
    position fixed;
    top 50%;
    right 0.2rem; 
    margin-top -0.1rem;
    z-index 9999999999;
    .show_p
      color #000000
  .view-menu-h5
    position: fixed;
    width: .3rem;
    top: .5rem;
    right: .2rem;
    z-index: 99; 
  .top_title
    width 100%;
    height 0.2rem; 
    background url('./assets/topimgbg.png') no-repeat;
    background-size cover; 
    img
      height 0.08rem;
      margin 0.06rem 0 0 0.2rem;  
  .shadebox
    width 100%;
    height 100%;
    background rgba(0,0,0,0.5);
    position fixed;
    left 0;
    top 0;    
  .header-top
    width 100%;
    height 0.4rem;
    background: linear-gradient(to right, #FF6603, #FEDB6D);
    line-height 0.4rem;
    position absolute;
    left 0;
    top 0;
    color white;
    z-index 9999;
    .LACRAE
      font-weight 900;
      color white;
      right 0.2rem;
      position absolute;
      font-size 0.18rem;
      line-height 0.4rem;
    img
      width 0.2rem;
      position relative;
      top 0.06rem;
      margin-left 0.1rem;
      margin-right 0.05rem;          
</style>
