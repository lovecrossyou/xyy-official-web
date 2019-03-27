<template>
  <div class="about">
    <header class="header">
      <div class="top bannerfix container-small">
        <div class=" clearfix nav">
          <Tabs></Tabs>
        </div>
      </div>

      <div class="poster-wrap width100 bg-post-about">
        <div class="rgba">
          <img src="@/imgs/poster_about.png" style="width:0;" alt="">
        </div>
      </div>

      <!--<div class="main">-->
      <!--<div class="font-20 c-white">心怀匠人之心  努力将每一个作品塑造成行业典范</div>-->
      <!--<div class="font-42 c-white">专业与可信赖的互联网供应商</div>-->
      <!--</div>-->
    </header>
    <div class="container-small clearfix  flex bg-white mar-t-60">
      <div class=" wid-878 pad-l-86 pad-r-106 height100">
        <div class="about-title font-30 c-cyan mar-t-50 mar-b-30">我们的使命</div>
        <div class="about-content font-16">
          公司承担的“首都真水工程”是经北京市政府社会工作办公室、中共北京市委社会工作委员会指导。核心目标是实现北京市包装饮用水行业服务能力整合，规范销售网点服务标准，打造北京社区一公里服务圈重货物流产业，提高从业人员服务素养，为北京市民提供“绿色、品质、安全、健康、放心”的信息化、标准化饮用水服务体系。
        </div>
        <div class="clearfix mar-t-58">
          <div class="left mar-r-106">
            <div class="about_tip about_tip1 wid-244"></div>
            <div class="font-14 c-gray wid-244 t-center  mar-t-35">由北京监督管理局支持，行业协会推动。线上下单、结算与线下配送相结合</div>
          </div>
          <div class="left">
            <div class="about_tip about_tip2 wid-244"></div>
            <div class="font-14 c-gray wid-244 t-center  mar-t-35">通过平台下单、精准配送。客户通过平台了解水站、水厂的各种信息。达到全民安全、健康饮用水服务</div>
          </div>
        </div>
        <div class="clearfix  mar-t-58 pad-b-114">
          <div class="left mar-r-106">
            <div class="about_tip about_tip3 wid-244"></div>
            <div class="font-14 c-gray wid-244 t-center  mar-t-35">平台作为核心。水厂、水站以及客户全部通过平台获取信息。平台配送数据精准无误，体现产业价值</div>
          </div>
          <div class="left">
            <div class="about_tip about_tip4"></div>
            <div class="font-14 c-gray wid-244 t-center mar-t-35">管理运营平台，规范桶装水市场。打造北京社区一公里服务圈重货物流产业，改变原有配送模式，增加配送商盈利点
            </div>
          </div>
        </div>
      </div>
      <div class="wid-398 c-white bg-brown pad-l-40">
        <div class="mar-t-86">我们的客户</div>
        <div class="mar-t-26">客户第一是我们一贯的坚持！</div>
        <ul class="mar-t-58">
          <li>服务客户</li>
          <li class="mar-t-21 font-39">5000+</li>
        </ul>
        <ul class="mar-t-58">
          <li>500强</li>
          <li class="mar-t-21 font-39">100+</li>
        </ul>
        <ul class="mar-t-58">
          <li>上市公司</li>
          <li class="mar-t-21 font-39">200+</li>
        </ul>
      </div>
    </div>

    <div class="container-small bg-white mar-t-15">

    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import Tabs from '@/components/common/tabs'
  import SwiperBottom from '@/components/about/swiper'
  import Foot from '@/components/common/foot'

  export default {
    name: "about",
    components: {
      Tabs,
      SwiperBottom,
      Foot
    },
    data() {
      return {
        swiperOption: {
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          autoplay: 3000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
        },
        slides: [
          {
            src: "./static/imgs/banner_t_1.png",
            title: "软件企业认定证书"
          },
          {
            src: "./static/imgs/banner_t_1.png",
            title: "软件企业认定证书"
          },
          {
            src: "./static/imgs/banner_t_1.png",
            title: "软件企业认定证书"
          },
          {
            src: "./static/imgs/banner_t_1.png",
            title: "软件企业认定证书"
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
