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
            <img src="imgs/poster_case.png"  style="width:0;" alt="">
          </div>
        </div>

        <div class="main">
          <div class="font-20 c-white">快速沟通您的软件需求</div>
          <div class="font-42 c-white">专业顾问为您提供服务</div>
        </div>
      </header>



      <div class="">
        <div class="container-small clearfix pad-l-118 bg-white mar-t-52">
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
            <div class="left font-12 pad-l-24">
              <ul>
                <li class="mar-t-15">
                  <span class="bold">账户名称：</span>
                  <span class="c-gray">上海汇亚信息科技有限公司</span>
                </li>
                <li class="mar-t-15">
                  <span class="bold">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</span>
                  <span class="c-gray"> 3168 5803 0005 4445 7 </span></li>
                <li class="mar-t-15">
                  <span class="bold">开户银行：</span>
                  <span class="c-gray">上海银行徐汇支行</span>
                </li>
              </ul>
              <ul>
                <li class="mar-t-18">
                  <span class="bold">Name：     </span><span class="c-gray">Shanghai Huiya Information Tech CO.,LTD</span></li>
                <li class="mar-t-18"><span class="bold">Number：</span><span class="c-gray">316858-03000-544457</span></li>
                <li class="mar-t-18"><span class="bold">Bankname： </span><span class="c-gray">BANK OF SHANGHAI</span></li>
                <li class="mar-t-18"><span class="bold">Swift Code： </span><span class="c-gray">BOSHCNSH</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clearfix container-small pad-t-62 pad-l-118 pad-b-94 bg-white mar-b-67">
          <div class="left">
            <div class="width100">
              <img src="@/imgs/addres.png" alt="">
            </div>
          </div>
          <div class="left pad-l-124 font-12 ">
            <p class="font-14 bold hei-39">开票信息</p>
            <ul class="bor-tb-bank wid-398">
              <li class="line-h-39 bor-t-1-gray">
                <span class="wid-80 bold">公司名称</span>
                <span class="c-gray font-12">上海汇亚信息科技有限公司</span>
              </li>
              <li class="line-h-39 bor-t-1-gray">
                <span class="wid-80 bold">税号</span>
                <span class="c-gray">91310112666055788N</span>
              </li>
              <li class="line-h-39 bor-t-1-gray">
                <span class="wid-80 bold">单位地址</span>
                <span class="c-gray">中国（上海）自由贸易试验区张衡路666弄2号201室</span>
              </li>
              <li class="line-h-39 bor-t-1-gray">
                <span class="wid-80 bold">电话号码</span>
                <span class="c-gray">021-58303589</span>
              </li>
              <li class="line-h-39 bor-t-1-gray">
                <span class="wid-80 bold">银行账户</span>
                <span class="c-gray">3168 5803 0005 4445 7</span>
              </li>
            </ul>
            <p class="font-14 bold line-h-39 mar-t-15">乘车线路</p>
            <ul class="bor-tb-bank  font-12 ">
              <li class="line-h-39 bor-t-1-gray">
                <div>
                  <span class="subway chuxing"></span>
                  <span class="c-gray font-12 bold">张江高科2号口</span>
                </div>
                <div>
                  <span class="num2 chuxing font-12">2</span>
                  <span class="c-gray font-12">张江高科2号出口</span>
                </div>
              </li>
              <li class="bor-t-1-gray">
                <div class="mar-t-15">
                  <span class="gongjiao chuxing"></span>
                  <span class="c-gray bold">公交</span>
                </div>
                <div class="c-gray line-hei-30">
                  <span class="wid-180 inline-block mar-l-25">161路张衡路科苑路下</span>
                  <span class="wid-180 inline-block">大桥六线张衡路科苑路下</span>
                  <br>
                  <span class="wid-180 inline-block mar-l-25">浦东25路张衡路科苑路下</span>
                  <span class="wid-180 inline-block">188路张衡路科苑路下</span>
                </div>

              </li>

            </ul>
          </div>

        </div>
      </div>

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
