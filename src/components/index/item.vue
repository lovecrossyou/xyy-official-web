<template>
  <div class="item left">
    <router-link :to="{path:'detail',query:{id:index}}" tag="div" >
        <div class="wid100" @click="itemClick(index)"><img :src="itemprop.src" class="wid100" alt=""></div>
        <p class="font-18 bold mar-t-29">{{itemprop.title}}</p>
        <p class="font-14 c-gray nowrap">{{itemprop.content}}</p>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "item",
        props:['itemprop','index'],
        methods:{
          itemClick(i){
            console.log('itemClick index:',i)
            this.$store.dispatch("setItem",i)
          }
        }
    }
</script>

<style scoped>

</style>
