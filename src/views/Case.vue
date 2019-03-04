<template>
  <div class="case">
    <header class="header">
      <div class="top bannerfix container-small">
        <div class=" clearfix nav">
          <Tabs></Tabs>
        </div>
      </div>

      <div class="poster-wrap width100 bg-post-case">
        <div class="rgba">
          <img src="imgs/poster_case.png"  style="width:0;" alt="">
        </div>
      </div>

      <div class="main">
        <div class="font-20 c-white">我们的作品</div>
        <div class="font-42 c-white">精益求精，成就非凡</div>
      </div>
    </header>



    <div class="intro container t-center">
      <p class="font-28">我们追求极致的用户体验</p>
      <p class="font-18 mar-t-21"></p>
    </div>
    <div class="m-2 container">
      <!-- 第1列 -->
      <template v-for="(item,i) in caseItems">
        <div>

        </div>
        <Item :itemprop="item" :index="i"></Item>
      </template>
    </div>

  </div>
</template>

<script>
    import Tabs from '@/components/common/tabs'
    import Item from '@/components/index/item'
    export default {
        name: "case",
        components:{
          Tabs,
          Item
        },
        data(){
          return{
            caseItems:[
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
