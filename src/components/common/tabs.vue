<template>
  <div class="top bannerfix container-small">
    <div class="mar-t-29 clearfix nav">
      <div class="logo-wrap left">
        <router-link to="/index"><img src="http://qnimage.xiteng.com/logo.png" alt=""></router-link>
      </div>
      <div class="right line-h-63 font-16 " >
        <span
          v-for="(tab,i) in tabs"
          @click="changeTabIndex(i)"
          :key="i"
        >
          <router-link
            :to="tab.path"
            :class="{'c-white':true,'inline-b':true,'mar-l-58':true,'active':i == tabIndex}"
          >{{tab.name}}</router-link>
        </span>

      </div>
    </div>
  </div>
</template>

<script>

    export default {
      computed:{
        tabIndex(){
          return this.$store.state.index.tabIndex
        }
      },
      methods:{
        changeTabIndex(i){
          console.log('changeTabIndex ',i);
          this.$store.commit("TAB_INDEX",i);
        }
      },
      data(){
        return{
          swiperOption: {
            // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
            debugger: true,
            autoplay: 3000,
            pagination:{
              el:'.swiper-pagination',
              clickable:true
            },
            slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
            centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
          },
          tabs:[
            {
              path:"/index",
              name:"首页"
            },
            {
              path:"/serve",
              name:"公司介绍"
            },
            // {
            //   path:"/case",
            //   name:"新闻咨询"
            // },
            {
              path:"/about",
              name:"公司愿景"
            },
            {
              path:"/connect",
              name:"联系我们"
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
