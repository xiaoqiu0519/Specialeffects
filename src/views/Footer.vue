<template>
  <div class="footer">
    <div class="list" v-for="(item,index) in listdata" :key="index">
      <div class="list_img"><img :src="item.img" alt="" srcset=""></div>
      <div class="country">{{item.conutry}}</div>
      <div class="list_con">
        <p v-for="(list,q) in item.list" :key="q"> {{list}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      listdata:[
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
      ]
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
  height 340px;
  padding 0 5%;
  margin 0 auto;
  margin-top 150px;
  animation opcity2 1s;
  .list
    width 33.33333%;
    float left;
    height 340px;
    text-align center;
    font-size:24px;
    .list_img
      text-align center;
      margin-bottom 18px;
      img
        width 83px;
        height 83px;
    .country
      margin-bottom 21px;
      font-family:Source Han Sans SC;
    .list_con
      font-size:16px;
      line-height 32px;
</style>