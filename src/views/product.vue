<template>
  <div class="paroduct">
    <!-- <img class="bg" :src="promes.bg" v-if="1" alt="" srcset=""> -->
    <div class="content">
    <!--
      <div class="logo">
        <img :src="promes.logo" alt="" srcset="">
      </div>
      <div class="list" v-for="(list,index) in promes.listdata" :key="index">
        <div class="title">{{list.title}}</div>
        <div class="con" v-for="(item,q) in list.content" :key="q">{{item}}</div>
      </div>
    -->  
      <img src="../assets/product_12345.jpg" alt="" srcset="">
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../views/Footer'
export default {
  data(){
    return{
      promes:{
        bg:require('../assets/pro_1_bg.png'),
        logo:require('../assets/pro_1_logo.png'),
        listdata:[
          {
            title:'背景',
            content:['TasmanUGG是澳洲本土的UGG品牌，TASMAN一词取自于澳大利亚TASMANIA的第一位登陆者Abel Tasman。品牌覆盖UGG真皮鞋具，时尚服饰和饰品，以及休闲产品线。']
          },{
            title:'挑战',
            content:['TasmanUGG在澳洲之外的品牌知名度不高，产品定位为中高级产品，一些原产澳洲的产品具有时效性和运输通关等挑战。目前TasmanUGGS主要依靠线下代理商，代购，旅游礼品店和面向中国的在澳人群开发中国市场，但是在宣传，物流，售后，产品开发和爆款打造方面难以有实质性突破。']
          },{
            title:'解决方案',
            content:[
              '帮助TasmanUGG针对中国市场进行品牌形象定位，定位在专业、天然、轻时尚，衍生出TasmanAUS的品牌；',
              '明确品牌受众，从而针对该类人群完善生产设计供应链，对新产品进行针对性宣传推广；',
              '梳理品牌逻辑，为品牌指定中国电商策略雏形，市场推广策划，并为品牌在中国开设了第一家企业直属网店，我们短期目标制定在开启天猫旗舰店，长期目标定为5年之内成为中国具有声量的鞋服品牌。'
            ]
          },{
            title:"成绩",
            content:[
              '6大明星产品植入；',
              '协助品牌入住4大电商平台；',
              '解决物流和客服后台服务。'                 
            ]
          }
        ]
      }
    }
  },
  components:{
    Footer
  },
  mounted(){
    //setTimeout(()=>{
     // console.log(document.getElementsByTagName('canvas')[0])
      //document.getElementsByTagName('canvas')[0].setAttribute('height','1350')
    //},1100)
    
    //document.getElementsByTagName('canvas')[0].setAttribute('height') = '1350px'
  }
}
</script>
<style lang="stylus" scoped>
.paroduct
  width 100%;
  //height 810px;
  position relative;
  overflow hidden;
  color #231815;
  font-size 14px;
  .content
    img
      width 100%;
      //height 810px;
</style>