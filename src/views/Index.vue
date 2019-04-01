<template>
    <div class="index">
      <header class="header">
        <Tabs ></Tabs>
        <div class="swiper-box rgba">
          <swiper :options="swiperOption" ref="swiper" class="z-index_-1">
            <swiper-slide v-for="(poster,index) in slides" :key="index" style="width:100%;height:450px;background: url(http://qnimage.xiteng.com/home.jpg) center center no-repeat;background-size: auto 100%; ">
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
      <!-- <QQ></QQ> -->
      <Foot></Foot>

    </div>

</template>

<script>
    import Tabs from '@/components/common/tabs'
    import Banner from '@/components/common/Banner'
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
                title:'水知识',
                content:'桶装水是指采用自来水或抽取地下水，经过现代工业技术（反渗透、电渗析、蒸馏、树脂软化等）处理而成的纯净水或矿泉水，由灌装生产线灌装至PC桶得到的产品。'
              },
              {
                title:'我们的优势',
                content:'以创意、经验、技术、服务为核心，为客户持续创造价值'
              }
            ],
            items:[
              {
                src:"http://qnimage.xiteng.com/1.jpg",
                title:"装在桶里就安全吗？",
                content:"饮水机还要定期清洁，虽然没必要每换一次桶就全面清洁一次，但是，每个月做一次清洁工作是良好卫生习惯的体现。需要注意的是，清洁饮水机的清洁剂毕竟是化学制剂，所以一定要冲洗干净后再饮用。另外，桶装水尽量10天内饮用完毕。"
              },
              {
                src:"http://qnimage.xiteng.com/2.jpg",
                title:"不同水种有什么区别？",
                content:"桶装水最常见的品种有纯净水、矿泉水和蒸馏水，用通俗易懂的说法解释，纯净水是被处理干净、可以直接饮用的自来水，矿泉水是含有一定矿物质和微量元素的天然矿泉水，蒸馏水是通过高温手段蒸馏取得的饮用水。"
              },
              {
                src:"http://qnimage.xiteng.com/3.jpg",
                title:"桶装水不宜直接喝",
                content:"食物放置久了会变坏，水放久了会变质，所以人们通常都习惯吃新鲜食物喝新鲜水，但桶装水却不宜趁鲜喝。市面上销售的桶装水，不论是蒸馏水、逆渗透水、矿泉水及其他纯净水，尽管在生产制作过程中已多次过滤消毒，但在装桶前一般都会用臭氧做最后的消毒处理，因此在刚灌装好的桶装水里都会含有较高浓度的臭氧。　虽然臭氧具有较强的消毒作用，但臭氧的强氧化性对人体健康有着很大的危害。臭氧吸入体内后，会破坏皮肤中的维生素E，致使皮肤起皱、出现黑斑，严重者还会破坏人体的免疫机能，诱发淋巴细胞疾病。"
              },
              {
                src:"http://qnimage.xiteng.com/4.jpg",
                title:"组成分类",
                content:"目前我国主要饮水类型为自来水、桶装水、分质供水和自动售水机售水。津京沪三地调查显示，2005年日常饮用水仍然保持饮用自来水的市民为28%，选择分质供水、自动售水机的比例分别为10%和4%，牢牢占据饮用水市场主导地位。"
              },
              {
                src:"http://qnimage.xiteng.com/5.jpg",
                title:"发展前景",
                content:"桶装水和饮水机的成熟相比，而饮水机清洗消毒业只是刚刚起步，它还有待于规模经营和技术革新.在饮用水市场竞争激烈的今天，有利于消费者消除健康盲点的特色配套服务—饮水机清洗消毒，可望成为新热点。"
              },
              {
                src:"http://qnimage.xiteng.com/6.jpg",
                title:"饮水方法",
                content:"正确饮用桶装水的方法：1、拆封后的桶装水最好在10日以内饮用完。2、桶装水不宜放置于阳光直射到的地方。3、饮水机清洗是保障桶装水健康指标不可或缺一环，一般建议1-2个月清洗消毒一次。4、纯净水和矿泉水应轮换着饮用。"
              },
            ]
          }
        }
    }
</script>

<style scoped>

</style>
