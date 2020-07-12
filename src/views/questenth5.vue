<template>
    <div class="questenth5">
        <div class="header-top" @click="goindex()">
            <img src="../assets/fanhui1.png" alt="" srcset="">
            {{back[languagetype]}}
            <span class="LACRAE">LACRAE</span>
        </div>
        <div class="list list1">
            <div class="title" v-html="listobj.list1[languagetype]"></div>
            <img v-if="languagetype == 1"  class="listimg" src="../assets/qwes_h5_cn_1.png" alt="">
            <img v-else-if="languagetype == 2" class="listimg" src="../assets/qwes_h5_en_1.png" alt="">
            <img v-else-if="languagetype == 3" class="listimg" src="../assets/qwes_h5_jp_1.png" alt="">
        </div>
        <div class="list list2">
            <div class="title" v-html="listobj.list2[languagetype]"></div>
            <img v-if="languagetype == 1"  class="listimg" src="../assets/qwes_h5_cn_2.png" alt="">
            <img v-else-if="languagetype == 2" class="listimg" src="../assets/qwes_h5_en_2.png" alt="">
            <img v-else-if="languagetype == 3" class="listimg" src="../assets/qwes_h5_jp_2.png" alt="">
        </div>
        <div class="list list3">
            <div class="title" v-html="listobj.list3[languagetype]"></div>
            <img v-if="languagetype == 1"  class="listimg" src="../assets/qwes_h5_cn_3.png" alt="">
            <img v-else-if="languagetype == 2" class="listimg" src="../assets/qwes_h5_en_3.png" alt="">
            <img v-else-if="languagetype == 3" class="listimg" src="../assets/qwes_h5_jp_3.png" alt="">
        </div>
        <div class="list list4">
            <div class="title" v-html="listobj.list4[languagetype]"></div>
            <img v-if="languagetype == 1"  class="listimg" src="../assets/qwes_h5_cn_4.png" alt="">
            <img v-else-if="languagetype == 2" class="listimg" src="../assets/qwes_h5_en_4.png" alt="">
            <img v-else-if="languagetype == 3" class="listimg" src="../assets/qwes_h5_jp_4.png" alt="">
        </div>
        <div class="list list5">
            <div class="title" v-html="listobj.list5[languagetype]"></div>
            <div class="con">
                <div v-for="(list,index) in serverlist[languagetype]" :key="index">
                    <img :src="list.img" alt="" srcset="">
                    <span>{{list.title}}</span>
                </div>
            </div>
        </div>
        <footerh5></footerh5>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import footerh5 from '@/views/footerh5'
export default {
    data(){
        return{
            back:{
                1:'返回',
                2:'Back',
                3:'帰る'
            },
            listobj:{
                list1:{
                1:'品牌战略的策划制定和管理',
                2:'Brand Stategy Planning Management',
                3:'ブランド戦略'
                },
                list2:{
                1:'一站式服务定制营销解决方案',
                2:'Turnkey, Bespoke Marketing Solutuions',
                3:'ワンストップサービス'
                },
                list3:{
                1:'海外品牌引进',
                2:'Chinese Market Entry Advisory',
                3:'国外ブランド紹介'
                },
                list4:{
                1:'销售和营销支持',
                2:'Sales And <br> Marketing Support',
                3:'マーケティングサポート'
                },
                list5:{
                1:'我们的服务包括',
                2:'Our Service Includes',
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
                {img:require('../assets/ques_1.png'),title:'Creative Strategies Creation'},
                {img:require('../assets/ques_2.png'),title:'Social Media Operations'},
                {img:require('../assets/ques_3.png'),title:'Content Generations'},
                {img:require('../assets/ques_4.png'),title:'Digital Fanbase Marketing'},
                {img:require('../assets/ques_5.png'),title:'Marketing & Communication'},
                {img:require('../assets/ques_6.png'),title:'Creative & Visual Design'},
                {img:require('../assets/ques_7.png'),title:'Short Video Production'},
                {img:require('../assets/ques_8.png'),title:'Sale channel Management'},
                {img:require('../assets/ques_9.png'),title:'Date Analysis'},
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
    computed:{
        ...mapGetters(['languagetype'])
    },
    components:{
        footerh5
    },
    methods:{
        goindex(){
            this.$router.push('/home')
        }
    }
}
</script>
<style lang="stylus" scoped>
.questenth5
    width 100%;
    background url('../assets/questent_h5_bg.png') no-repeat;
    background-size 0.15rem auto;
    background-position 0.1rem 0.6rem;
    clear both;
    overflow hidden;
    .list1
        margin-top 0.8rem;
    .list2  
        margin-top 0.3rem;   
    .list3 
        margin-top 0.2rem; 
    .list4
        margin-top 0.48rem; 
        .listimg
            margin-top -0.2rem !important;        
    .list
        font-size 0.15rem;
        font-weight 900;
        margin-left 0.4rem;
        .listimg
            width 3rem;
            margin-top 0.2rem;
    .list5
        margin-top 0.3rem;
        margin-bottom 0.5rem;
        .con  
            display flex;
            flex-wrap wrap;
            font-size 0;
            div
                width 42%; 
                height 0.36rem;
                background white;
                border-radius 0.2rem;  
                font-size 0.1rem;
                color #636464;  
                display flex;
                align-items center;
                margin-right 0.2rem;
                margin-top 0.2rem;
                img
                    width 0.13rem;
                    margin-left 0.1rem;
                    margin-right 0.05rem;
</style>