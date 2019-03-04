<template>
  <div class="intro container t-center">
    <p class="font-28">{{intro.title}}
    </p>
    <p class="font-18 mar-t-21">{{intro.content}}</p>
  </div>
</template>

<script>
    export default {
        name: "intro",
      props:['intro']
    }
</script>

<style scoped>

</style>
