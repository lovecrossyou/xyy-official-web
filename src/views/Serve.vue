<template>
  <div class="index">
    <header class="header">
      <Tabs ></Tabs>
      <div class="swiper-box rgba">
        <swiper :options="swiperOption" ref="swiper" class="z-index_-1">
          <swiper-slide v-for="(poster,index) in slides" :key="index" style="height:580px;background: url(http://qnimage.xiteng.com/lunbo2.jpg) center center no-repeat;background-size: auto 100%; ">
            <div>{{slides.src}}</div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
    </header>
    <Intro :intro="intro[0]"></Intro>

    <Model1></Model1>

    <Intro :intro="intro[1]"></Intro>

    <div class="m2 container clearfix">
      <template v-for="(el,i) in items">
        <Item :itemprop="el" :index="i"></Item>
      </template>
    </div>

    <div class="m-3">
      <Intro :intro="intro[2]"></Intro>
      <div class="clearfix container">
        <div class="left width33 pad-lr-50">
          <div class="bg-tip tip1"></div>
          <div class="font-24 t-center mar-tb-32">经验与方法</div>
          <div class="c-gray">我们拥有10余年的IT与移动互联网行业经验，服务数千家国内外企业，积累了众多行业经典案例，是业内知名的移动解决方案专家和领军企业。我们拥有超过多项业内权威的资质、专利及专业荣誉，是同业的标杆。</div>
        </div>
        <div class="left width33  pad-lr-50">
          <div class="bg-tip tip2"></div>
          <div class="font-24 t-center mar-tb-32">行业化</div>
          <div class="c-gray">我们深耕企业应用多年，对每一个行业都富有技术与资源的积累，并为企业提出一系列创造性的建议，帮助企业实现卓越绩效。此外，我们在国际医药行业、供应链智能管理、智能办公、移动电子商务等前沿领域投入的早期研究，已实现商业价值的突破。</div>
        </div>
        <div class="left width33  pad-lr-50">
          <div class="bg-tip tip3"></div>
          <div class="font-24 t-center mar-tb-32">专业团队</div>
          <div class="c-gray">我们管理团队和研发团队的成员均来自于Actiontec、IBM、HP、百度等，拥有专业的职业素养和前沿的开发思维，为客户搭建最有效的管理系统。</div>
        </div>
      </div>
    </div>
    <QQ></QQ>
    <Foot></Foot>

  </div>

</template>

<script>
  import Tabs from '@/components/common/tabs'
  import Banner from '@/components/common/banner'
  import Intro from '@/components/common/Intro'
  import Model1 from "@/components/index/model-1"
  import Item from '@/components/index/item'
  import Foot from '@/components/common/foot'
  import QQ from '@/components/common/qq'

  export default {
    name: "index",
    components:{
      Tabs,
      Banner,
      Intro,
      Model1,
      Item,
      Foot,
      QQ
    },
    mounted(){

    },
    computed:{

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
        slides:[
          {
            src:'./static/images/banner_t_1.png',
            href:'10余年的行业经验积累，为您提供全方位互联网服务'
          },

          {
            title:'./static/images/banner_t_2.png',
            content:'以创意、经验、技术、服务为核心，为客户持续创造价值'
          }
        ],
        intro:[
          {
            title:'我们的业务',
            content:'10余年的行业经验积累，为您提供全方位互联网服务'
          },
          {
            title:'我们的成功案例',
            content:'多维度、多平台开发体系，为客户打造真正有价值的互联网平台'
          },
          {
            title:'我们的优势',
            content:'以创意、经验、技术、服务为核心，为客户持续创造价值'
          }
        ],
        items:[
          {
            src:"./static/images/v1_item1.png",
            title:"罗氏",
            content:"实验室质量管理、诊断之窗、罗氏调研"
          },
          {
            src:"./static/images/v1_item2.png",
            title:"罗氏",
            content:"实验室质量管理、诊断之窗、罗氏调研"
          },
          {
            src:"./static/images/v1_item3.png",
            title:"罗氏",
            content:"实验室质量管理、诊断之窗、罗氏调研"
          },
          {
            src:"./static/images/v2_item1.png",
            title:"罗氏",
            content:"实验室质量管理、诊断之窗、罗氏调研"
          },
          {
            src:"./static/images/v2_item2.png",
            title:"罗氏",
            content:"实验室质量管理、诊断之窗、罗氏调研"
          },
          {
            src:"./static/images/v2_item3.png",
            title:"罗氏",
            content:"实验室质量管理、诊断之窗、罗氏调研"
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
