<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  /*
      vue中data为方法
      组件必须将数据return出去
  */
  data(){
    return{

    }
  },
  /**    watch
   * 对应一个对象，键是观察表达式，值是对应回调。
   * 值也可以是方法名，或者是对象，包含选项。
   * 在实例化时为每个键调用 $watch() ；
   * */
  watch:{
    '$route':'routerTo'
  },
  methods:{
    routerTo(){
      console.log(this.$router.currentRoute.path);
      switch (this.$router.currentRoute.path){
        case '/':
          this.$store.commit("TAB_INDEX",0);
          break;
        case '/serve':
          this.$store.commit("TAB_INDEX",1);
          break;
        case '/case':
          this.$store.commit("TAB_INDEX",4);
          break;
        case '/about':
          this.$store.commit("TAB_INDEX",2);
          break;
        case '/connect':
          this.$store.commit("TAB_INDEX",3);
          break;
        default:
          break;
      }

    }
  }
}
</script>

<style>
  /*   css引入方式    */
  @import "css/reset.css";
  @import "css/common.css";
  @import "css/index.css";

</style>
