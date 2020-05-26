<template>
    <div class="aboutus">
        <div class="con">
            <img v-if="languagetype == 1" src="../assets/auout_us_h5_1.png" alt="" srcset="">
            <img v-else-if="languagetype == 2" src="../assets/auout_us_h5_2.png" alt="" srcset="">
            <img v-else-if="languagetype == 3" src="../assets/auout_us_h5_3.png" alt="" srcset="">
        </div>
        <footerh5></footerh5>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import footerh5 from '@/views/footerh5'
export default {
    components:{
        footerh5
    },
    computed:{
        ...mapGetters(['languagetype'])
    },
}
</script>
<style lang="stylus" scoped>
.aboutus
    width 100%;
    .con
        width 100%;
        margin-bottom 0.5rem;
        img 
            width 100%;
</style>