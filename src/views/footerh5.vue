<template>
    <div class="footer">
        <div class="goindex" @click="goindex()">
            <p><img src="../assets/backhome.png" alt="" srcset=""></p>
            <p>{{back[languagetype]}}</p>
        </div>
        <div class="list" v-for="(item,index) in listdata[languagetype]" :key='index'>
            <div class="img"><img :src="item.img" alt="" srcset=""></div>
            <div class="con">
                <p>{{item.conutry}}</p>
                <p v-for="(list,index) in item.list" :key="index">{{list}}</p>           
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
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
                    '电话：0571-82572150'
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
                    'Tel:0571-82572150'
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
                    '電話番号:0571-82572150'
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
        goindex(){
            if(this.$route.name == 'Home'){
                window.scrollTo({ 
                    top: 0, 
                    behavior: "smooth" 
                })    
            }else{
                this.$router.push('/home')
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .footer
        width 100%;
        height 3.8rem;
        .goindex
            width 1rem;
            margin 0 auto;
            text-align center;
            font-size 0.1rem;
            margin-bottom 0.5rem;
            img
                width 0.35rem;
        .list
            width 2.4rem;
            margin 0 auto;
            display flex;
            margin-top 0.3rem;
            img
                width 0.45rem;
            .con
                font-size 0.1rem;    
                margin-left 0.2rem;
                        
</style>