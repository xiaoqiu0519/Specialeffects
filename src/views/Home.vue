<template>
  <div class="home">
    <viewpc v-if="showpc"></viewpc>
    <viewh5 v-if="showh5"></viewh5>
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
      showh5:false
    }
  },
  mounted(){
    var vm = this;
    this.loadpage()
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
    }
  },
 
}
</script>
<style lang="stylus" scoped>
</style>
