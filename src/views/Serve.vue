<template>
    <div class="serve">
      <header class="header">
        <div class="top bannerfix container-small">
          <div class=" clearfix nav">
            <Tabs></Tabs>
          </div>
        </div>
        <div class="poster-wrap width100 bg-post-serve" style="background-image: url(./static/images/post_serve.png)">
          <div class="rgba">

          </div>
        </div>

        <div class="main">
          <div class="font-20 c-white">助力企业及品牌打造个性化软件定制</div>
          <div class="font-42 c-white">精心定制您的应用软件</div>
        </div>
      </header>


      <Intro :intro="intros[0]"></Intro>


      <div class="container-small ">
        <div class="flex mar-b-67 c-white">
          <div class="serve_tip serve_tip1 wid-630 hei-440">
            <div class="font-28 mar-tb-50"><i class="left-bor-serve"></i>微信小程序</div>
            <ul class="pad-l-62 line-hei-30">
              <li><i class="bor-r-50">快</i>微信小程序无需下载，即开即应用</li>
              <li class="mar-t-21"><i class="bor-r-50">广</i>入口极多，线下覆盖范围与应用场景非常广</li>
              <li class="mar-t-21"><i class="bor-r-50">强</i>可实现的能力几乎比拟APP</li>
              <li class="mar-t-21"><i class="bor-r-50">通</i>与公众号可以互补打通，提升用户好感和黏度</li>
              <li class="mar-t-21"><i class="bor-r-50">高</i>8.89亿月活用户，超高流量入口</li>
            </ul>
          </div>
          <div class="serve_tip serve_tip2 wid-630 hei-440">
            <div class=" font-28  mar-tb-50"><i class="left-bor-serve"></i>微信公众号</div>
            <ul class="pad-l-62">
              <li class="clearfix mar-t-29">
                <div class="left font-18">服务号开发</div>
                <div class="left mar-r-12 font-14 wid-398 pad-t-5">定制个性化功能，可以和企业网站、手机站、APP等连接，实现
                  数据同步，提升企业的业务能力和用户管理能力</div>
              </li>
              <li class="clearfix mar-t-29">
                <div class="left font-18">订阅号开发</div>
                <div class="left mar-r-12 font-14 wid-398 pad-t-5">能够帮助企业实现产品宣传，提供图文、视频、音频传播方式，
                  更好的与用户互动</div>
              </li>
              <li class="clearfix mar-t-29">
              <li class="clearfix">
                <div class="left font-18">企业号开发</div>
                <div class="left mar-r-12 font-14 wid-398 pad-t-5">以企业需求为前提，帮助企业建立员工、上下游供应链与企业IT
                  系统间的连接，实现生产、管理、协作、运营的移动化</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex">
          <div class="serve_tip serve_tip3 wid-630 hei-440 c-white">
            <div class=" font-28  mar-tb-50"><i class="left-bor-serve"></i>微信公众号</div>
            <ul class="pad-l-62">
              <li class="clearfix mar-t-29">
                <div class="left font-18">专属功能 </div>
                <div class="left mar-r-12 font-14 wid-398 pad-t-5">从用户需求出发，深度整合企业的各类业务系统</div>
              </li>
              <li class="clearfix mar-t-29">
                <div class="left font-18">扩展性强</div>
                <div class="left mar-r-12 font-14 wid-398 pad-t-5">完好主流接口，互联互通性强，系统迭代升级更容易</div>
              </li>
              <li class="clearfix mar-t-29">
              <li class="clearfix">
                <div class="left font-18">成熟架构</div>
                <div class="left mar-r-12 font-14 wid-398 pad-t-5">成熟的分布式及高并发解决方案</div>
              </li>
            </ul>
          </div>
          <div class="serve_tip serve_tip4 wid-630 hei-440 c-white">
            <div class=" font-28  mar-tb-50"><i class="left-bor-serve"></i>APP开发</div>
            <ul class="pad-l-62">
              <li class="clearfix mar-t-29">
                <div class="left font-18 wid-140">专业UI交互体验</div>
                <div class="left mar-r-12 font-14 wid-380 pad-t-5">让APP搭建模式及功能需求更加清晰，完善的产品架构原型
                  交互设计，让用户在移动端的操作体验更便捷</div>
              </li>
              <li class="clearfix mar-t-29">
                <div class="left font-18 wid-140">定位目标群体</div>
                <div class="left mar-r-12 font-14 wid-380 pad-t-5">信息直触实实在在的目标消费群体，更以用户体验为中心，
                  丰富多样的交互形式触发用户体验的粘性</div>
              </li>
              <li class="clearfix mar-t-29">
              <li class="clearfix">
                <div class="left font-18 wid-140">极速增强粘性</div>
                <div class="left mar-r-12 font-14 wid-380 pad-t-5">对不同手机终端进行大量测试，确保较高的兼容性以支持不
                  同手机终端极速浏览</div>
              </li>
            </ul>
          </div>
        </div>
      </div>



      <div class="m-3" style="background: none">

        <Intro :intro="intros[1]"></Intro>


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
    </div>
</template>

<script>
    import Tabs from '@/components/common/tabs'
    import Intro from '@/components/common/Intro'
    export default {
        name: "serve",
        components:{
          Tabs,
          Intro
        },
        data(){
          return{
            intros:[
              {
                title:"为您提供量身定制的软件定制服务",
                content:""
              },
              {
                title:"我们的优势",
                content:""
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
