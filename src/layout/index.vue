<template>
  <div class="layout_container">
    <div class="layout_slider"><Logo /></div>
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <p style="height: 1000px; background: yellowgreen">123</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: blanchedalmond;
  }
  .layout_main {
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background: red;
    padding-top: calc($base-tabbar-height + 20px);
    padding-left: 20px;
    overflow: auto;
  }
}
</style>
