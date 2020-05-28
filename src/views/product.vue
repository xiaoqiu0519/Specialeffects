<template>
  <div class="paroduct">
    <div class="content">
      <img :src="imgurl" alt="" srcset="">
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../views/Footer'
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      imgurl:'',
      id:''
    }
  },
  components:{
    Footer
  },
  computed:{
    ...mapGetters(['languagetype'])
  },
  mounted(){
    //if(document.getElementsByTagName('canvas')){
      //document.getElementsByTagName('canvas')[0].height = document.body.offsetHeight 
    //}
    this.id = this.$route.params.id
    var str = '_ch_';
    if(this.languagetype == 1){
        str = '_ch_'
    }else if(this.languagetype == 2){
        str = '_en_'
    }else if(this.languagetype == 3){
        str = '_jp_'
    }
    this.imgurl = require('../assets/pro_detail_h5'+ str + this.id +'.png')
  }
}
</script>
<style lang="stylus" scoped>
.paroduct
  width 100%;
  //height 810px;
  position relative;
  overflow hidden;
  font-size 14px;
  .content
    img
      width 100%;
      //height 810px;
</style>