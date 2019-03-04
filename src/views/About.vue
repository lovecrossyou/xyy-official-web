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
            <img src="@/imgs/poster_about.png"  style="width:0;" alt="">
          </div>
        </div>

        <div class="main">
          <div class="font-20 c-white">心怀匠人之心  努力将每一个作品塑造成行业典范</div>
          <div class="font-42 c-white">专业与可信赖的互联网供应商</div>
        </div>
      </header>
      <div class="container-small clearfix  flex bg-white mar-t-60">
        <div class=" wid-878 pad-l-86 pad-r-106 height100">
          <div class="about-title font-30 c-cyan mar-t-50 mar-b-30">汇亚科技</div>
          <div class="about-content font-16">上海汇亚信息科技有限公司是经过上海信息委、经济委员会认定的“双软”软件企业，公司成立于2007年9月，2010年被上海市闵行区政府评定为上海市见习基地，2011年被上海市闵行区政府认定为上海高校产学研联合单位，并与上海交通大学博士后研究中心建立了物联网与云计算研究合作。2012年2月公司取得了“汇亚”及相关LOGO商标注册证书。2012年5月，公司荣获上海市创新基金。同时公司也获得了多项软件产品著作权及软件产品登记证书。</div>
          <div class="clearfix mar-t-58">
            <div class="left mar-r-106">
              <div class="about_tip about_tip1 wid-244"></div>
              <div class="font-14 c-gray wid-244 t-center  mar-t-35">在软件信息服务领域，依靠点点滴滴、锲而不舍的艰苦追求，使我们逐渐成为行业内领先企业是汇亚的目标</div>
            </div>
            <div class="left">
              <div class="about_tip about_tip2 wid-244"></div>
              <div class="font-14 c-gray wid-244 t-center  mar-t-35" >提供高质量技术服务是汇亚生存之本</div>
            </div>
          </div>
          <div class="clearfix  mar-t-58 pad-b-114">
            <div class="left mar-r-106">
              <div class="about_tip about_tip3 wid-244"></div>
              <div class="font-14 c-gray wid-244 t-center  mar-t-35">质量是我们的自尊心</div>
            </div>
            <div class="left">
              <div class="about_tip about_tip4"></div>
              <div class="font-14 c-gray wid-244 t-center mar-t-35">不断提升中华民族软件信息服务国际竞争力是汇亚的崇高理想</div>
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
      <div class="container-small flex pad-l-86 mar-t-15 bg-white">
        <div class="wid-271 mar-t-52">
          <div class="font-22">办公环境</div>
          <div class="line-2 wid-18 bg-gray mar-t-22 mar-b-43"></div>
          <div class="font-14 c-gray">汇亚办公位于盛大全球研发中心，2017年搬
            入至今，全面开启高品质研发之路，在许多
            行业留下足迹。
          </div>
        </div>
        <div class="wid-894"><img src="@/imgs/environment.png" class="width100" alt=""></div>
      </div>
      <div class="container-small bg-white mar-t-15">
        <div class="swiper-bottom">
          <div>
            <swiper :options="swiperOption" ref="swiper" class="z-index_-1">
              <swiper-slide v-for="(poster,index) in slides" :key="index" style="height:580px;background: url(./static/images/poster_about.png) center center no-repeat;background-size: auto 100%; ">
                <div>{{slides.src}}</div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <Foot></Foot>
      </div>
    </div>
</template>

<script>
    import Tabs from '@/components/common/tabs'
    import SwiperBottom from '@/components/about/swiper'
    import Foot from '@/components/common/foot'
    export default {
        name: "about",
        components:{
          Tabs,
          SwiperBottom,
          Foot
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
                src:"./static/imgs/banner_t_1.png",
                title:"软件企业认定证书"
              },
              {
                src:"./static/imgs/banner_t_1.png",
                title:"软件企业认定证书"
              },
              {
                src:"./static/imgs/banner_t_1.png",
                title:"软件企业认定证书"
              },
              {
                src:"./static/imgs/banner_t_1.png",
                title:"软件企业认定证书"
              },

            ]
          }
      }
    }
</script>

<style scoped>

</style>
