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
    this.id = this.$route.params.id
    this.getproductlist(this.id); 
  },
  methods:{
    getproductlist(index){
      this.$get('/product/getlist').then((res) => {
          if (res.error == '0000') {
              this.imgdata = res.data
              if(this.languagetype == 1){
                  this.imgurl = res.data[this.languagetype][index].detail_pc_ch
              }else if(this.languagetype == 2){
                  this.imgurl = res.data[this.languagetype][index].detail_pc_en
              }else if(this.languagetype == 3){
                  this.imgurl = res.data[this.languagetype][index].detail_pc_jp
              }
          } else {
              console.log(0)
          }
      })
    }
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