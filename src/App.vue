<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
const str = 'woainizhongguo'
</script>
<template>
  <div class="box">
    <h1>app根组件</h1>
    <p>{{ str }}</p>
    <HelloWorld />
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
