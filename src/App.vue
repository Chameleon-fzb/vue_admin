<script setup lang="ts">
const str = 'woainizhongguo'
</script>
<template>
  <div class="box">
    <h1>app根组件</h1>
    <p>{{ str }}</p>
  </div>
</template>
<style scoped lang="scss">
.box {
  width: 600px;
  height: 600px;
  background: black;
  h1 {
    color: white;
  }
}
</style>
