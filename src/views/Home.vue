<template>
  <div class="home">
    <div class="lau">中 | En | 日</div>
    <div class="slogan">致力于一切和“美”有关的事业</div>
    <div class="bg-1">
      <img class="left" src="../assets/bg-1.png" alt="" srcset="">
      <img class="right" src="../assets/bg-1.png" alt="" srcset="">
      <div class="content">
        <div class="list">
          <p>Lacrae（乐科锐）是一家专注于中国市场的多元化的市场营销和销售咨询公司。我们利用大数据分析社交网络和电商趋势，通过战略性的品牌管理方针，明智的市场进入策略，有针对性的销售渠道和有效的营销支持，帮</p>
          <p>在Lacrae（乐科锐），我们通过“您是谁”来定义我们将为您带来什么服务。我们关心您想要实现的目标，并共同投资于您的未来。自乐科锐成立以来，我们与服务的客户一起成长，共同探索商业模型，并取得了长期的</p>
        </div>
        <div class="title">
          <p class="ab-us">关于我们</p>
          <p class="more">了解更多</p>
        </div>
      </div>
    </div>
    <div class="con">
      <div class="left">
        <p>定制专属于您的</p>
        <p>营销解决方案</p>  
        <p><span class="more">了解更多</span></p>
      </div>
      <div class="right">
        <div class="tips" v-for="(list,index) in tipArr" :key="index">
          <img :src="list.img" alt="" srcset="">
          <p>{{list.txt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data(){
    return{
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
      ]
    }
  },
  name: 'Home',
}
</script>
<style lang="stylus" scoped>
.home
  height 100%;
  padding-top 264px;
  position relative;
  .lau
    position absolute;
    top 42.5px;
    width 100%;
  .slogan
    width:424px;
    font-size:30px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(255,255,255,1);
    margin 0 auto;
  .bg-1
    width 100%;
    height 217px;
    margin-top 316px;
    img
      width 157px;
    .left
      float left;
    .right
      float right;  
    .content
      margin-top 5px;
      width 590px;
      height 206px;  
      margin 0 auto;
      background-image url('../assets/about.png') 
      background-size auto 100%;
      background-repeat no-repeat;
      position relative;
      font-size 0;
      .list
        width 298px;
        margin-top 50px;
        float left;
        margin-left 55px;
        margin-right 108px;
        font-size:8px;
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
          margin-top 65px;
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
    margin-top 120px;  
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
      width 365px;
      background white;
      height 100%;
      padding-left 50px;
      div
        width 50px;
        height 58px;
        float left;
        font-size:8px;
        font-family:Source Han Sans SC;
        font-weight:400;
        color:rgba(100,100,100,1);
        line-height:16px;
        text-align center;
        margin-top 103px;
        margin-right 30px;
        img
          width 40px;

</style>
