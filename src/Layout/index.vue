<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="white"
          active-text-color="yellowgreen"
          background-color="#001529"
        >
          <MenuList :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar">
      <Tabbar />
    </div>
    <div class="layout_main">
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue'
import MenuList from './MenuList/index.vue'
import Main from './Main/index.vue'
import Tabbar from './Tabbar/index.vue'
import { useUserStore } from '@/store'
import { useRoute } from 'vue-router'
const userStore = useUserStore()
const $route = useRoute()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    color: white;
    background: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-tabbar-height);
      //去掉默认边框
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
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
