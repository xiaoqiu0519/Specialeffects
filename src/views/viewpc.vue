<template>
  <div class="home">
    <div class="top_title"><img class="lecrae_logo" src="../assets/h5_logo.png" alt srcset /></div>
    <div class="lau">
      <span :class="{activeclass:languagetype == 1}" @click="setlanguagetypeAsy(1)">中</span>|
      <span :class="{activeclass:languagetype == 2}" @click="setlanguagetypeAsy(2)">En</span>|
      <span :class="{activeclass:languagetype == 3}" @click="setlanguagetypeAsy(3)">JP</span>
    </div>
    <!-- <div class="menu" @click="setnavflagAsy(1)" v-if="!navflag">
      <img src="../assets/meun.png" alt srcset />
      <p>MENU</p>
    </div> -->
    <div class="slogan">
      <img v-if="languagetype == 1" src="../assets/slogan_ch.png" alt="" srcset="">
      <img v-if="languagetype == 2" src="../assets/slogan_en.png" alt="" srcset="">
      <img v-if="languagetype == 3" src="../assets/slogan_jp.png" alt="" srcset="">
    </div>
    <div class="bg-1">
      <!-- <img class="left" src="../assets/bg-1.png" alt srcset />
      <img class="right" src="../assets/bg-1.png" alt srcset /> -->
      <img
        class="conimg"
        @click="gotoabout()"
        v-if="languagetype == 1"
        src="../assets/auout_us_ch.png"
        alt
        srcset
      />
      <img
        class="conimg"
        @click="gotoabout()"
        v-else-if="languagetype == 2"
        src="../assets/auout_us_en.png"
        alt
        srcset
      />
      <img
        class="conimg"
        @click="gotoabout()"
        v-else-if="languagetype == 3"
        src="../assets/auout_us_jp.png"
        alt
        srcset
      />
    </div>
    <div class="con">
      <img
        @click="gotoquestent()"
        src="../assets/Exclusive_ch.png"
        v-if="languagetype == 1"
        alt
        srcset
      />
      <img
        @click="gotoquestent()"
        src="../assets/Exclusive_en.png"
        v-else-if="languagetype == 2"
        alt
        srcset
      />
      <img
        @click="gotoquestent()"
        src="../assets/Exclusive_jp.png"
        v-else-if="languagetype == 3"
        alt
        srcset
      />
    </div>
    <div class="Partner">
      <div class="title">
        <p>{{Partner[languagetype].title}}</p>
        <p>{{Partner[languagetype].con}}</p>
        <p>{{Partner[languagetype].tips}}</p>
      </div>
      <div class="Partner_list left">
        <img src="../assets/xinlang.png" alt srcset />
        <img src="../assets/weixin.png" alt srcset />
        <img src="../assets/douyin.png" alt srcset />
        <img src="../assets/kuaishou.png" alt srcset />
        <img src="../assets/alibaba.png" alt srcset />
      </div>
      <div class="Partner_list right">
        <img src="../assets/baidu.png" alt srcset />
        <img src="../assets/youku.png" alt srcset />
        <img src="../assets/jingdong.png" alt srcset />
        <img src="../assets/xiaohongshu.png" alt srcset />
        <img src="../assets/zhihu.png" alt srcset />
      </div>
    </div>
    <div class="product">
      <div class="title">{{producttitle[languagetype]}}</div>
      <div class="content">
        <div class="list" v-for="(list,index) in imgdata[languagetype]" :key="index">
          <img @click="gotoproduct(index)" v-if="languagetype == 1" :src="list.small_ch" alt srcset />
          <img @click="gotoproduct(index)" v-else-if="languagetype == 2" :src="list.small_en" alt srcset />
          <img @click="gotoproduct(index)" v-else-if="languagetype == 3" :src="list.small_jp" alt srcset />
        </div>
      </div>
    </div>
    <!-- <transition-group name="opacityanimate">
      <navigation :key="1" v-if="navflag" />
    </transition-group> -->
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
// import navigation from "./navigation";
import Footer from "../views/Footer";
export default {
  name: "Home",
  data() {
    return {
      slogan: {
        1: "致力于一切和“美”有关的事业",
        2: "Pursue of Beauty",
        3: "すべての美に関わることをする"
      },
      Partner: {
        1: {
          title: "我们的合作伙伴",
          con: "Lacrae（乐科锐）与所有主要的线上和线下销售渠道",
          tips: "和营销平台建立了牢固的合作关系。"
        },
        2: {
          title: "Our Partners",
          con:
            "Lacrae has developed a strong working relationships with key online",
          tips: "and offline sales channels and platforms ."
        },
        3: {
          title: "我々のパートナー",
          con:
            "LACRAEはすべての主要なオンラインとオフラインの販売ルートとマーケティングプ",
          tips: "ラットフォームと強固な協力関係を築いた"
        }
      },
      producttitle: {
        1: "案例展示",
        2: "Case Study",
        3: "コンサルティング事例"
      },
    };
  },
  mounted() {
    
  },
  props:['imgdata'],
  components: {
    // navigation,
    Footer
  },
  computed: {
    ...mapGetters(["navflag", "languagetype"])
  },
  methods: {
    ...mapActions(["setnavflagAsy", "setlanguagetypeAsy"]),
    gotoabout() {
      this.$router.push("/aboutus");
    },
    gotoquestent() {
      this.$router.push("/questent");
    },
    gotoproduct(index) {
      this.$router.push("/product/id/" + index);
    }
  }
};
</script>
<style lang="stylus" scoped>
@keyframes opcity1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.top_title{
  background transparent !important;
}
.home {
  padding-top: 0.3rem;
  position: relative;

  .opacityanimate-enter, .opacityanimate-leave-to {
    opacity: 0;
  }

  .opacityanimate-enter-to, .opacityanimate-leave {
    opacity: 1;
  }

  .opacityanimate-enter-active, .opacityanimate-leave-active {
    transition: all 1.5s;
  }
.lecrae_logo{
  width:0.3rem;
  position:absolute;
  left:0.1rem;
  top:0.1rem
}
  .menu {
    width: 0.4rem;
    height: 0.6rem;
    position: fixed;
    top: 50%;
    margin-top: -0.1rem;
    right: 0rem;
    z-index: 10;
    text-align: center;
    font-size: 0.1rem;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: white;
    cursor: pointer;

    img {
      width: 0.12rem;
      margin-top: 10px;
    }
  }

  .lau {
    width: 0.5rem;
    padding-right: 0.1rem;
    height: 0.1rem;
    line-height: 0.1rem;
    background: white;
    position: absolute;
    top: 0.14rem;
    right: 0;
    text-align: right;
    color: #333333;
    border-radius: 0 0 0 0.05rem;
    font-size: 0.06rem;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3), 0px 0px 20px rgba(0, 0, 0, 0.1) inset;

    span {
      width: 0.12rem;
      text-align: center;
      display: inline-block;
      cursor: pointer;
    }

    .activeclass {
      color: #E8560B;
    }
  }

  .slogan {
    width: 80%;
    height 1.31rem;
    font-size: 0.1rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    margin: 0 auto;
    text-align: center;
    display flex;
    justify-content center;
    align-items center;
    img {
      width: 80%;
    }
  }

  .bg-1 {
    width: 100%;
    height: 0.7rem;
    margin-top: 1rem;
    text-align: center;
    position: relative;

    img {
      height: 0.7rem;
    }

    .left {
      position: absolute;
      left: 0;
      // float left;
    }

    .right {
      position: absolute;
      right: 0;
      // float right;
    }

    .conimg {
      margin-left: 0.25rem;
    }
  }

  .con {
    width: 2rem;
    height: 0.8rem;
    margin: 0 auto;
    border-radius: 0.4rem;
    margin-top: 0.5rem;
    position: relative;
    overflow: hidden;
    text-align: center;

    img {
      height: 0.8rem;
    }
  }

  .Partner {
    width: 2.2rem;
    margin: 0 auto;
    font-size: 0.03rem;
    margin-top: 0.5rem;

    .title {
      text-align: center;

      &>p:nth-child(1) {
        font-size: 0.09rem;
        color: white;
        font-weight: 600;
        margin-bottom: 26px;
      }

      &>p:nth-child(2) {
        margin-bottom: 6px;
      }
    }

    img {
      width: 0.4rem;
    }

    .left {
      text-align: left;
      margin-top: 55px;
    }

    .right {
      text-align: right;
    }
  }

  .product {
    width: 100%;
    margin-top: 0.5rem;
    clear: both;
    //overflow: hidden;
    background: url('../assets/zhanshi.png') no-repeat;
    background-size: 100% auto;

    .title {
      width: 2rem;
      margin: 0 auto;
      font-size: 0.09rem;
      font-weight: 900;
      text-align: center;
      color: black;
      margin-top: 40px;
      margin-bottom: 30px;
    }

    .content {
      width: 2.7rem;
      clear: both;
      overflow: hidden;
      margin: 0 auto;
      text-align: center;
      padding-bottom 15px;

      .list {
        width: 0.8rem;
        margin: 0.1rem 0.05rem 0;
        float: left;
        background: white;
        border-radius: 23px;
        overflow: hidden;
        transition: transform .3s ease-in-out
        &:hover{
          box-shadow:15px 0 15px -15px #000,
                     -15px 0 15px -15px #000,
                     0px 15px 15px -15px #000;
            transform: translateY(-2.5px);
        }    
        
        img {
          width: 100%;
          
        }

        .shadow {
          position: relative;
          max-width: 270px;
          
        }

        .shadow::before,
        .shadow::after {
          content:"";
          position:absolute;
          z-index:-1;
        }

        .shadow::before,
        .shadow::after {
          content:"";
          position:absolute;
          z-index:-1;
          bottom:15px;
          left:10px;
          width:50%;
          height:20%;
        }

        .shadow::before,
        .shadow::after {
          content:"";
          position:absolute;
          z-index:-1;
          bottom:15px;
          left:10px;
          width:50%;
          height:20%;
          box-shadow:0 15px 10px rgba(0, 0, 0, 0.7);
          transform:rotate(-3deg);
        }

        .shadow::after{
          right:10px;
          left:auto;
          transform:rotate(3deg);
        }
      }
    }
  }
}
</style>
