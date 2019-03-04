<template>
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
</template>

<script>

    export default {
        name: "swiper",
        components:{

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

            ]
          }
      }
    }
</script>

<style scoped>

</style>
