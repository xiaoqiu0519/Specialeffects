<template>
  <div class="home">
    <div class="lau">
      <span @click="setlanguagetypeAsy(1)">中</span>|
      <span @click="setlanguagetypeAsy(2)">En</span>|
      <span @click="setlanguagetypeAsy(3)">JP</span>
    </div>
    <div class="menu" @click="setnavflagAsy(1)" v-if="!navflag">
        <img src="../assets/meun.png" alt="" srcset="">
        <p>menu</p>
    </div>
    <div class="slogan">{{slogan[languagetype]}}</div>
    <div class="bg-1">
      <img class="left" src="../assets/bg-1.png" alt="" srcset="">
      <img class="right" src="../assets/bg-1.png" alt="" srcset="">
      <div class="content">
        <div class="list">
          <p>{{contentlist[languagetype].lacraetop}}</p>
          <p>{{contentlist[languagetype].lacraedown}}</p>
        </div>
        <div class="title">
          <p class="ab-us">{{contenttitle[languagetype].aboutus}}</p>
          <p class="more" @click="gotoabout()">{{contenttitle[languagetype].more}}</p>
        </div>
      </div>
    </div>
    <div class="con">
      <div class="left">
        <p>{{Exclusive[languagetype].title}}</p>
        <p>{{Exclusive[languagetype].con}}</p>  
        <p><span class="more" @click="gotoquestent()">{{Exclusive[languagetype].more}}</span></p>
      </div>
      <div class="right">
        <div class="tips" v-for="(list,index) in tipArr" :key="index">
          <img :src="list.img" alt="" srcset="">
          <p>{{list.txt}}</p>
        </div>
      </div>
    </div>
    <div class="Partner">
      <div class="title">
        <p>{{Partner[languagetype].title}}</p>
        <p>{{Partner[languagetype].con}}</p>
        <p>{{Partner[languagetype].tips}}</p>
      </div>
      <div class="Partner_list left">
        <img src="../assets/xinlang.png" alt="" srcset="">
        <img src="../assets/weixin.png" alt="" srcset="">
        <img src="../assets/douyin.png" alt="" srcset="">
        <img src="../assets/kuaishou.png" alt="" srcset="">
        <img src="../assets/alibaba.png" alt="" srcset="">
      </div>
      <div class="Partner_list right">
        <img src="../assets/baidu.png" alt="" srcset="">
        <img src="../assets/youku.png" alt="" srcset="">
        <img src="../assets/jingdong.png" alt="" srcset="">
        <img src="../assets/xiaohongshu.png" alt="" srcset="">
        <img src="../assets/zhihu.png" alt="" srcset="">
      </div>
    </div>
    <div class="product">
      <div class="title">{{producttitle[languagetype]}}</div>
      <div class="content">
        <div class="list" v-for="(list,index) in prolist[languagetype]" :key="index">
          <img :src="list.img" alt="">
          <p class="text">{{list.text}}</p>
          <p class="more" @click="gotoproduct(list)"><u>了解更多</u></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions ,mapGetters} from 'vuex';
export default {
  name: 'Home',
  data(){
    return{
      slogan:{
        1:'致力于一切和“美”有关的事业',
        2:'',
        3:''
      },
      contentlist:{
        1:{
          lacraetop:'Lacrae（乐科锐）是一家专注于中国市场的多元化的市场营销和销售咨询公司。我们利用大数据分析社交网络和电商趋势，通过战略性的品牌管理方针，明智的市场进入策略，有针对性的销售渠道和有效的营销支持，帮',
          lacraedown:'在Lacrae（乐科锐），我们通过“您是谁”来定义我们将为您带来什么服务。我们关心您想要实现的目标，并共同投资于您的未来。自乐科锐成立以来，我们与服务的客户一起成长，共同探索商业模型，并取得了长期的'
        },
        2:{
          lacraetop:'',
          lacraedown:''
        },
        3:{
          lacraetop:'',
          lacraedown:''
        }
      },
      contenttitle:{
        1:{
          aboutus:'关于我们',
          more:'了解更多'
        },
        2:{
          aboutus:'',
          more:''
        },
        3:{
          aboutus:'',
          more:''
        }
      },
      Exclusive:{
        1:{
          title:'定制专属于您的',
          con:'营销解决方案',
          more:'了解更多'
        },
        2:{
          title:'',
          con:"",
          more:''
        },
        3:{
          title:'',
          con:"",
          more:''
        }
      },
      Partner:{
        1:{
          title:'我们的合作伙伴',
          con:'Lacrae（乐科锐）与所有主要的线上和线下销售渠道',
          tips:'和营销平台建立了牢固的合作关系。'
        },
        2:{
          title:'',
          con:"",
          tips:''
        },
        3:{
          title:'',
          con:"",
          tips:''
        },
      },
      tipArr:[
        {
          img:require('../assets/tip1.png'),
          txt:'品牌战略'
        },
        {
          img:require('../assets/tip2.png'),
          txt:'一站式服务'
        },
        {
          img:require('../assets/tip3.png'),
          txt:'海外品牌引进'
        },
        {
          img:require('../assets/tip4.png'),
          txt:'市场支持'
        }
      ],
      producttitle:{
        1:'案例展示',
        2:'',
        3:''
      },
      prolist:{
        1:[
          {id:1,img:require('../assets/pro_1.png'),text:'TasmanUGG是澳洲本土的UGG品牌，TASMAN一词取自于澳大利亚，NIA的第一位登陆者AbelTASMA，覆盖UGG真皮鞋具，时尚服饰和饰品，以及休闲产品线。'},
          {id:2,img:require('../assets/pro_2.png'),text:'博乐达是一个专业护肤品品牌，自成立以来专注于皮肤修复，祛痘控油等领域，采用缓控释超分子水杨酸专利技术，研发了一系列具有“博乐达“标签的超分子水杨酸产品。'},
          {id:3,img:require('../assets/pro_3.png'),text:'维维豆奶是中国最大的豆奶企业，集团成立于1992年迄今为止28年历史。维维豆奶粉是经过先进技术生产的，具有营养丰富，合理平衡的食品。'},
          {id:4,img:require('../assets/pro_4.png'),text:'A股上市企业旗下女性时尚运动品牌，邀请意大利设计师设计，国内顶级供应链，定位中高端女性健身服市场。'},
          {id:5,img:require('../assets/pro_5.png'),text:'杭州市西湖环境集团开展的公共服务项目，意在倡导居民们实行垃圾分类，并为其提供对应基础服务。'},
          {id:6,img:require('../assets/pro_6.png'),text:'澳洲品牌totalpet，由两位行业经验丰富的动物学和农业专家创立，主要致力于帮助宠物达成一生的福祉，她们利用行业内40多年的经验，研发了一系列宠物保健产品，在澳洲广受好评。'},
        ],
        2:[
          {img:require('../assets/pro_1.png'),text:''},
          {img:require('../assets/pro_2.png'),text:''},
          {img:require('../assets/pro_3.png'),text:''},
          {img:require('../assets/pro_4.png'),text:''},
          {img:require('../assets/pro_5.png'),text:''},
          {img:require('../assets/pro_6.png'),text:''},
        ],
        3:[
          {img:require('../assets/pro_1.png'),text:''},
          {img:require('../assets/pro_2.png'),text:''},
          {img:require('../assets/pro_3.png'),text:''},
          {img:require('../assets/pro_4.png'),text:''},
          {img:require('../assets/pro_5.png'),text:''},
          {img:require('../assets/pro_6.png'),text:''},
        ]
        
      }
    }
  },
  mounted(){
    document.getElementsByTagName('canvas')[0].setAttribute('height','3750')
  },
  computed:{
    ...mapGetters(['navflag','languagetype'])
  },
  methods:{
     ...mapActions(['setnavflagAsy','setlanguagetypeAsy']),
    gotoabout(){
      this.$router.push('/aboutus')
    },
    gotoquestent(){
      this.$router.push('/questent')
    },
    gotoproduct(list){
      this.$router.push('/product/'+ list.id)
    }
  },
 
}
</script>
<style lang="stylus" scoped>
.home
  padding-top 264px;
  position relative;
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
  .lau
    width 120px;
    padding-right 30px;
    height 30px;
    line-height 30px;
    background white;
    position absolute;
    top 42px;
    right 0;
    text-align right ;
    color #333333;
    border-radius 0 0 0 15px;
    span
      width 30px;
      text-align center;
      display inline-block;
      cursor pointer;
  .slogan
    width:424px;
    font-size:30px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(255,255,255,1);
    margin 0 auto;
  .bg-1
    width 100%;
    height 250px;
    margin-top 316px;
    img
      height 250px;
    .left
      float left;
    .right
      float right;  
    .content
      margin-top 5px;
      width 720px;
      height 250px;  
      margin 0 auto;
      background-image url('../assets/about1.png') 
      background-size auto 100%;
      background-repeat no-repeat;
      position relative;
      font-size 0;
      .list
        width 430px;
        margin-top 64px;
        float left;
        margin-left 45px;
        margin-right 108px;
        font-size:12px;
        font-family:Source Han Sans SC;
        font-weight:400;
        color:rgba(100,100,100,1);
        line-height:16px;
        p
          margin-bottom 20px;
      .title
        float left ;
        .ab-us
          font-size:30px;
          family:Source Han Sans SC;
          font-weight:800;
          margin-top 90px;
          margin-bottom 15px;
        .more
          width:50px;
          height:14px;  
          background white;
          color #FF8428;
          font-size 10px;
          text-align center;
          line-height 14px;
          cursor pointer;
  .con
    width 830px;
    height 264px;
    margin 0 auto;
    border 1px solid white;
    border-radius 150px;  
    margin-top 200px;  
    position relative;
    overflow hidden;
    div
      float left;
      width 415px;
    .left
      text-align right ; 
      font-size:30px;
      font-family:Source Han Sans SC;
      font-weight:800;
      color:rgba(255,255,255,1);  
      margin-top 90px;
      p
        margin-right 50px;
      &>p:nth-child(3)
        line-height 1;  
      .more
        text-align center;
        width:50px;
        height:14px; 
        line-height 14px;
        background white;
        font-size 10px;
        font-weight normal;
        color #FF8428;
        display inline-block;
        cursor pointer;
    .right
      width 375px;
      background white;
      height 100%;
      padding-left 40px;
      div
        width 80px;
        height 58px;
        float left;
        font-size:12px;
        font-family:Source Han Sans SC;
        font-weight:400;
        color:rgba(100,100,100,1);
        line-height:16px;
        text-align center;
        margin-top 97px;
        margin-right 10px;
        img
          width 40px;
          margin-bottom 10px;
  .Partner
    width 1050px;
    margin 0 auto;
    font-size 12px;
    margin-top 200px;
    .title
      text-align center;
      &>p:nth-child(1)
        font-size 30px;
        color white;
        font-weight 600;
        margin-bottom 26px;
      &>p:nth-child(2)
        margin-bottom 6px;
      img
        width 162px;   
    .left
      text-align left ;
      margin-top 55px;
    .right
      text-align right;
  .product
    width 100%;
    margin-top 100px;
    clear both;
    overflow hidden;
    background url('../assets/zhanshi.png') no-repeat;
    background-size 100% auto;  
    .title
      width 900px;
      margin 0 auto;
      font-size 28px;
      font-weight 900;
      text-align center;
      color black;   
      margin-top 40px; 
      margin-bottom 30px;
    .content
      width 960px;
      clear both;
      overflow hidden;
      margin 0 auto;  
      .list
        width 300px;
        margin 20px 10px 0;
        float left;
        background white;
        border-radius 20px;
        .text
          width 280px;
          height 95px;
          overflow hidden;
          padding 0 14px;
          font-size:16px;
          font-family:Source Han Sans SC;
          color:rgba(100,100,100,1);
          line-height:24px;
          margin-bottom 20px;
        .more
          width 280px;
          height 30px;  
          text-align right;
          color #ff8428;
          u
            cursor pointer
        img
          width 300px;
          height 300px;
          margin-bottom 20px;
</style>
