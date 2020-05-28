<template>
  <div class="questent">
    <div class="con">
      <div class="list list1">
        <div class="title" v-html="listobj.list1[languagetype]"></div>
        <img v-if="languagetype == 1" src="../assets/questent_de_ch_1.png" alt="" srcset="">
        <img v-else-if="languagetype == 2" src="../assets/questent_de_en_1.png" alt="" srcset="">
        <img v-else-if="languagetype == 3" src="../assets/questent_de_jp_1.png" alt="" srcset="">
      </div>
      <div class="list list2">
        <div class="title" style="top:0.32rem" v-html="listobj.list2[languagetype]"></div>
        <img v-if="languagetype == 1" src="../assets/questent_de_ch_2.png" alt="" srcset="">
        <img v-else-if="languagetype == 2" src="../assets/questent_de_en_2.png" alt="" srcset="">
        <img v-else-if="languagetype == 3" src="../assets/questent_de_jp_2.png" alt="" srcset="">
      </div>
      <div class="list list3">
        <div class="title" style="top:0.43rem" v-html="listobj.list3[languagetype]"></div>
        <img v-if="languagetype == 1" src="../assets/questent_de_ch_3.png" alt="" srcset="">
        <img v-else-if="languagetype == 2" src="../assets/questent_de_en_3.png" alt="" srcset="">
        <img v-else-if="languagetype == 3" src="../assets/questent_de_jp_3.png" alt="" srcset="">
      </div>
      <div class="list list4">
        <div class="title" v-html="listobj.list4[languagetype]"></div>
        <img v-if="languagetype == 1" src="../assets/questent_de_ch_4.png" alt="" srcset="">
        <img v-else-if="languagetype == 2" src="../assets/questent_de_en_4.png" alt="" srcset="">
        <img v-else-if="languagetype == 3" src="../assets/questent_de_jp_4.png" alt="" srcset="">
      </div>
      <div class="list list5" style="text-align:left">
        <div class="title" v-html="listobj.list5[languagetype]"  style="top:0.17rem"></div>
        <div class="serverlist">
          <div :class="{china:languagetype == 1,english:languagetype == 2,japan:languagetype == 3}" v-for="(item,index) in serverlist[languagetype]" :key="index">
            <img :src="item.img" alt="" srcset="">
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../views/Footer'
import { mapGetters} from 'vuex';
export default {
  data(){
    return{
      listobj:{
        list1:{
          1:'品牌战略的策划<br>制定和管理',
          2:'Brand stategy planning <br> management',
          3:'ブランド戦略'
        },
        list2:{
          1:'一站式服务<br>定制营销解决方案',
          2:'Turnkey, Bespoke <br> marketing solutuions',
          3:'ワンストップサービス'
        },
        list3:{
          1:'海外品牌引进',
          2:'Chinese market entry advisory',
          3:'国外ブランド紹介'
        },
        list4:{
          1:'销售和营销支持',
          2:'Sales and <br/> Marketing support',
          3:'マーケティングサポート'
        },
        list5:{
          1:'我们的服务包括',
          2:'Our service includes',
          3:'我々のサービス'
        },
      },
      serverlist:{
        1:[
          {img:require('../assets/ques_1.png'),title:'创新策略的制定'},
          {img:require('../assets/ques_2.png'),title:'社交媒体运营'},
          {img:require('../assets/ques_3.png'),title:'内容生成'},
          {img:require('../assets/ques_4.png'),title:'社群运营'},
          {img:require('../assets/ques_5.png'),title:'市场营销和传播策略'},
          {img:require('../assets/ques_6.png'),title:'创意与视觉设计'},
          {img:require('../assets/ques_7.png'),title:'短视频创作'},
          {img:require('../assets/ques_8.png'),title:'销售渠道管理'},
          {img:require('../assets/ques_9.png'),title:'数据分析'},
        ],
        2:[
          {img:require('../assets/ques_1.png'),title:'Creative strategies creation'},
          {img:require('../assets/ques_2.png'),title:'Social Media operations'},
          {img:require('../assets/ques_3.png'),title:'Content generations'},
          {img:require('../assets/ques_4.png'),title:'Digital fanbase marketing'},
          {img:require('../assets/ques_5.png'),title:'Marketing & Communication stategies'},
          {img:require('../assets/ques_6.png'),title:'Creative & Visual design'},
          {img:require('../assets/ques_7.png'),title:'Short Video production'},
          {img:require('../assets/ques_8.png'),title:'Sale channel management'},
          {img:require('../assets/ques_9.png'),title:'Date analysis'},
        ],
        3:[
          {img:require('../assets/ques_1.png'),title:'ブランドのイノベーション戦略'},
          {img:require('../assets/ques_2.png'),title:'デジタルメディアとコンテンツの運用'},
          {img:require('../assets/ques_3.png'),title:'ロジスティクス'},
          {img:require('../assets/ques_4.png'),title:'バックエンドサービス'},
          {img:require('../assets/ques_5.png'),title:'マーケティング戦略'},
          {img:require('../assets/ques_6.png'),title:'ビジュアルコンテンツのデザイン'},
          {img:require('../assets/ques_7.png'),title:'ショートムービーの作成'},
          {img:require('../assets/ques_8.png'),title:'ECの運用とカスタマーサービス'},
          {img:require('../assets/ques_9.png'),title:'ブランド紹介・ データ分析'},
        ]
      }
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
      document.getElementsByTagName('canvas')[0].height = document.body.offsetHeight 
    //}
  }
}
</script>
<style lang="stylus" scoped>
.questent
  width 3rem;
  margin 0 auto;
  .con
    background url('../assets/left_line.png') no-repeat; 
    background-size 0.06rem auto;
    background-position 0 -20px;
    width 3rem;
    clear both;
    overflow hidden;
    padding-bottom 0.1rem;
    .list
      position relative;
      text-align right ;
      .title
        position absolute;
        color white;
        font-size 0.08rem;
        text-align center;
        left 50px;
        top 0.42rem;
      img
        height 100%;
    .list1
      height 1rem;
      margin-top 0.2rem;
    .list2
      height 1rem;   
      margin-top 0.4rem; 
    .list3
      height 1.1rem;   
      margin-top 0.35rem;   
    .list4
      height 0.85rem;   
      margin-top 0.2rem;     
    .list5
      height 0.8rem;
      margin-top 0.34rem;     
      .serverlist
        float right;
        width 2rem;
        height 0.8rem;
        display flex;
        align-items center;
        flex-wrap wrap;
        justify-content space-between;
        font-size 0.04rem; 
        margin-top -0.17rem;
        &>div
          width 26%;
          padding 0 2%; 
          height 0.1rem;
          font-size 0.04rem;
          border-radius 0.05rem;
          margin 0 1%;
          background white;
          color #646464;
          display flex;
          align-items center;
          align-content center;
          img
            height 0.05rem;
            margin-right 5px;
        .china
          font-size 0.04rem;   
          img
            margin-left 20px;
            margin-right 10px;
              
</style>