<template>
    <div class="detail">
      <h1>这是Detail页面</h1>

      <p>每次点击之后改变item的值$store.state.index.item:{{item}}</p>

    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
          return{
            item:this.$store.state.index.item
          }
        },
      computed:{
        // item(){
        //   return this.$store.state.index.item
        // }
      },
      created(){
        // console.group('created 创建完毕状态===============》');
        // var state = {
        //   'el': this.$el,
        //   'data': this.$data,
        //   'message': this.message
        // }
        console.log(this.$store);
      },
      /*
              beforeCreate(){
                // 路由传递的参数获取



                console.log(this.$router.currentRoute.query)


                console.group('beforeCreate 创建前状态===============》');
                var state = {
                  'el': this.$el,
                  'data': this.$data,
                  'message': this.message
                }
                console.log(state);
              },

              created(){
                console.group('created 创建完毕状态===============》');
                var state = {
                  'el': this.$el,
                  'data': this.$data,
                  'message': this.message
                }
                console.log(state);
              },
              beforeMount(){
                console.group('beforeMount 挂载前状态===============》');
                var state = {
                  'el': this.$el,
                  'data': this.$data,
                  'message': this.message
                }
                console.log(this.$el);
                console.log(state);
              },
              mounted(){
                console.group('mounted 挂载结束状态===============》');
                var state = {
                  'el': this.$el,
                  'data': this.$data,
                  'message': this.message
                }
                console.log(this.$el);
                console.log(state);
                // this.message = 'change';
              },
              beforeUpdate(){
                console.group('beforeUpdate 更新前状态===============》');
                var state = {
                  'el': this.$el,
                  'data': this.$data,
                  'message': this.message
                }
                console.log(this.$el);
                console.log(state);
                // this.message = 'change2';
              },
              updated(){
                console.group('updated 更新完成状态===============》');
                var state = {
                  'el': this.$el,
                  'data': this.$data,
                  'message': this.message
                }
                console.log(this.$el);
                console.log(state);
              },
              beforeDestroy(){
                console.group('beforeDestroy 销毁前状态===============》');
                var state = {
                  'el': this.$el,
                  'data': this.$data,
                  'message': this.message
                }
                console.log(this.$el);
                console.log(state);
              },
              destroyed(){
                console.group('destroyed 销毁完成状态===============》');
                var state = {
                  'el': this.$el,
                  'data': this.$data,
                  'message': this.message
                }
                console.log(this.$el);
                console.log(state);
              },
          */
    }
</script>

<style scoped>

</style>
