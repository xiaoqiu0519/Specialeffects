<template>
  <div class="contaner home">
    <viewpc v-if="showpc" :imgdata='imgdata'></viewpc>
    <viewh5 v-if="showh5" :imgdata='imgdata'></viewh5>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions ,mapGetters} from 'vuex';
import viewpc from '@/views/viewpc'
import viewh5 from '@/views/viewh5'
export default {
  name: 'Home',
  data(){
    return{
      showpc:false,
      showh5:false,
      imgdata:[]
    }
  },
  mounted(){
    var vm = this;
    this.loadpage()
    this.getproductlist();
    window.addEventListener('resize', function() {
      vm.loadpage()
    })
  },
  components:{
   viewpc,
   viewh5
  },
  computed:{
    ...mapGetters([])
  },
  methods:{
    ...mapActions([]),
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
    getproductlist(){
      this.$get('/product/getlist').then((res) => {
          if (res.error == '0000') {
              this.imgdata = res.data
          } else {
              console.log(0)
          }
      })
    }
  },
 
}
</script>
<style lang="stylus" scoped>
  .contaner
    position relative;
</style>
