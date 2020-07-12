<template>
  <div class="paroduct">
    <div class="top_title"><img class="lecrae_logo" src="../assets/h5_logo.png" alt srcset /></div>
    <Swiper class="swiperdiv" :options="swiperOption">
      <swiper-slide v-for="(item,index) in imgdata[languagetype]" :key="index">
        <div class="swiperimg content">
            <img v-if="languagetype == 1" :src="item.detail_pc_ch" alt="" srcset="">
            <img v-else-if="languagetype == 2" :src="item.detail_pc_en" alt="" srcset="">
            <img v-else-if="languagetype == 3" :src="item.detail_pc_jp" alt="" srcset="">
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
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
      id:'',
      imgdata:'',
      swiperOption: {
        initialSlide:0,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: 3000,
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          style:{
            background:'red'
          }
        },
      }
    }
  },
  components:{
    Footer
  },
  computed:{
    ...mapGetters(['languagetype'])
  },
  created(){
    this.swiperOption.initialSlide = this.$route.params.id
  },
  mounted(){
    this.getproductlist(); 
  },
  methods:{
    getproductlist(){
      this.$get('/product/getlist').then((res) => {
          if (res.error == '0000') {
            this.imgdata = res.data
            
          } 
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active  //看这里
  background :#ffffff
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

<style lang="stylus">
.paroduct
  .swiper-button-prev, .swiper-button-next
    top 100px;
    color #FF6704;
  .wrapper >>> .swiper-pagination-bullet-active
    background: red 
</style>