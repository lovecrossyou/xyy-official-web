<template>
    <div class="connect">
      <header class="header">
        <div class="top bannerfix container-small">
          <div class=" clearfix nav">
            <Tabs></Tabs>
          </div>
        </div>
        <div class="poster-wrap width100 bg-post-connect">
          <div class="rgba">
            <img src="imgs/poster_connect.png"  style="width:100%;" alt="">
          </div>
        </div>
      </header>



      <div class="">
        <div class="container-small clearfix pad-l-118 bg-white mar-t-52 mar-b-30">
          <div class="left">
            <form  action="" method="post">
              <p class="c-gray mar-t-52">在线提交您需求，我们将在24小时内联系您，节假日除外</p>
              <!-- <div class="mar-t-21"> -->
              <input type="text" placeholder="称呼" name="userName" class="wid-465 line-hei-30 pad-l-15 mar-t-21">
              <br/>
              <!-- </div> -->
              <!-- <div class="mar-t-21"> -->
              <input type="number" placeholder="联系方式" name="phone" class="wid-465 line-hei-30 pad-l-15  mar-t-21">
              <br/>
              <!-- </div> -->
              <!-- <div class="mar-t-21 "> -->
              <textarea name="content" id="" cols="30" rows="10" placeholder="内容" class="hei-60 wid-465 line-hei-30 pad-l-15  mar-t-21"></textarea>
              <br/>
              <!-- </div> -->
              <!-- <div class="mar-t-21"> -->
              <button type="submit" class="btn  mar-t-21">提交</button>
              <br/>
              <!-- </div> -->
            </form>
          </div>
          <div class="left pad-t-70 pad-l-124">
            <div class="left">
              <img src="imgs/logo_2.png" alt="">
            </div>
            <div class="left font-14 pad-l-24">
              <ul>
                <li class="mar-t-15">
                  <span class="bold">公司名称：</span>
                  <span class="c-gray">北京汇格信息科技有限公司</span>
                </li>
                <li class="mar-t-15">
                  <span class="bold">住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span>
                  <span class="c-gray">北京市朝阳区大鲁店文化街16号3幢1层1036</span>
                </li>
                <li class="mar-t-15">
                  <span class="bold">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</span>
                  <span class="c-gray">10266000000738896</span></li>
                <li class="mar-t-15">
                  <span class="bold">开户银行：</span>
                  <span class="c-gray"> 华夏银行北京京广支行 </span>
                </li>
                <li class="mar-t-15">
                  <span class="bold">联系电话：</span>
                  <span class="c-gray">010—87395880</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      <div style="margin-top: 150px"></div>
      <Foot></Foot>

    </div>
</template>

<script>
    import Tabs from '@/components/common/tabs'
    import Foot from '@/components/common/foot'
    export default {
        name: "connect",
        components:{
          Tabs,
          Foot
        }
    }
</script>

<style scoped>

</style>
