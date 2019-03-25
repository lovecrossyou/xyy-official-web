<template>
  <div class="top bannerfix container-small">
    <div class="mar-t-29 clearfix nav">
      <div class="logo-wrap left">
        <router-link to="/index"><img src="@/imgs/log.png" alt=""></router-link>
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
          tabs:[
            {
              path:"/index",
              name:"首页"
            },
            {
              path:"/serve",
              name:"公司介绍"
            },
            {
              path:"/case",
              name:"新闻咨询"
            },
            {
              path:"/about",
              name:"生产基地"
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
