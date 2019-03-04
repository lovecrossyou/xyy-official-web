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
            // {
            //   path:"/serve",
            //   name:"软件定制"
            // },
            // {
            //   path:"/case",
            //   name:"案例"
            // },
            {
              path:"/about",
              name:"关于"
            },
            {
              path:"/connect",
              name:"联系"
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
