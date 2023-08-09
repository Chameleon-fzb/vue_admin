<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <MenuList :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue'
import MenuList from './MenuList/index.vue'
import { useUserStore } from '@/store'
const userStore = useUserStore()
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
