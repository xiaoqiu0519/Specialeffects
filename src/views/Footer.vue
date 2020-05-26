<template>
  <div class="footer">
    <div class="backhome">
      <img @click="gotoindex()" src="../assets/backhome.png" alt="" srcset="">
      <p>{{back[languagetype]}}</p> 
    </div>
    <div class="list" v-for="(item,index) in listdata[languagetype]" :key="index">
      <div class="list_img"><img :src="item.img" alt="" srcset=""></div>
      <div class="country">{{item.conutry}}</div>
      <div class="list_con">
        <p v-for="(list,q) in item.list" :key="q"> {{list}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      back:{
          1:'返回首页',
          2:'Back Home',
          3:'トップに戻る'
      },
      listdata:{
        1:[
          {
            img:require('../assets/zhongguo.png'),
            conutry:'中国',
            list:[
              '杭州市江干区UDC时代大厦A座28楼',
              'ken.l@lacrae.com.au'
            ]
          },
          {
            img:require('../assets/aozhou.png'),
            conutry:'澳洲',
            list:[
              'Suite 702, 11-15 Dean St, Burwood',
              'Sydney NSW Australia 2134',
              'ken.l@lacrae.com.au'
            ]
          },
          {
            img:require('../assets/lianxiwomen.png'),
            conutry:'联系我们',
            list:[
              '地址：杭州市江干区UDC时代大厦A座28楼',
              '电话：88888888'
            ]
          }
        ],
        2:[
          {
            img:require('../assets/zhongguo.png'),
            conutry:'China',
            list:[
              'UDC towers, 28 F, Jianggan, Hangzhou',
              'ken.l@lacrae.com.au'
            ]
          },
          {
            img:require('../assets/aozhou.png'),
            conutry:'Australia',
            list:[
              'Suite 702, 11-15 Dean St, Burwood',
              'Sydney NSW Australia 2134',
              'ken.l@lacrae.com.au'
            ]
          },
          {
            img:require('../assets/lianxiwomen.png'),
            conutry:'Contanct Us',
            list:[
              'Address:UDC towers, 28 F, Jianggan, Hangzhou',
              'Tel:88888888'
            ]
          }
        ],
        3:[
          {
            img:require('../assets/zhongguo.png'),
            conutry:'中国',
            list:[
              '杭州市江干区UDC時代大厦Aビル2803',
              'ken.l@lacrae.com.au'
            ]
          },
          {
            img:require('../assets/aozhou.png'),
            conutry:'オーストラリア',
            list:[
              'Suite 702, 11-15 Dean St, Burwood',
              'Sydney NSW Australia 2134',
              'ken.l@lacrae.com.au'
            ]
          },
          {
            img:require('../assets/lianxiwomen.png'),
            conutry:'お問い合わせ',
            list:[
              '住所:杭州市江干区UDC時代大厦Aビル2803',
              '電話番号:88888888'
            ]
          }
        ]
      }
    }
  },
  computed:{
    ...mapGetters(['languagetype'])
  },
  methods:{
    gotoindex(){
      this.$router.push('/home')
    }
  }

}
</script>
<style lang="stylus" scoped>
@keyframes opcity2 {
    0% {opacity :0;}
    100% {opacity:1};
}
.footer
  width 90%;
  clear both;
  overflow hidden;
  padding 0 5% 0.3rem;
  margin 0 auto;
  animation opcity2 1s;
  .backhome
    text-align center;
    margin 0.2rem auto;
    font-size 0.05rem;
    img
      cursor pointer;
  .list
    width 33.33333%;
    float left;
    text-align center;
    font-size:0.07rem;
    .list_img
      text-align center;
      margin-bottom 0.06rem;
      img
        width 0.3rem;
        height 0.3rem;
    .country
      margin-bottom 0.07rem;
      font-family:Source Han Sans SC;
    .list_con
      font-size:0.05rem;
      line-height 0.07rem;
</style>