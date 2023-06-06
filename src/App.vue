<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { onMounted } from 'vue'
import { reqLogin } from './api/user'
onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' }).then((res) => {
    console.log(res)
  })
})
</script>
<template>
  <div class="box">
    <svg-icon width="30px" height="30px" name="copyright" color="red" />
  </div>
  <div><h1>1111</h1></div>
</template>
<style lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
