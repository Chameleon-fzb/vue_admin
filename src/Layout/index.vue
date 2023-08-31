<template>
  <div class="layout_container">
    <div class="layout_slider" :class="className">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="white"
          active-text-color="yellowgreen"
          background-color="#001529"
          :collapse="settingStore.fold"
        >
          <MenuList :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="className">
      <Tabbar />
    </div>
    <div class="layout_main" :class="className">
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue'
import MenuList from './MenuList/index.vue'
import Main from './Main/index.vue'
import Tabbar from './Tabbar/index.vue'
import { useLayoutSettingStore, useUserStore } from '@/store'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const userStore = useUserStore()
const settingStore = useLayoutSettingStore()
const $route = useRoute()
const className = computed(() => (settingStore.fold ? 'fold' : 'expand'))
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
    // width: $base-menu-width;
    height: 100vh;
    color: white;
    background: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-tabbar-height);
      //去掉默认边框
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
    &.expand {
      width: $base-menu-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all 0.3s;
    &.fold {
      left: $base-menu-min-width;
      width: calc(100% - $base-menu-min-width);
    }
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
    transition: all 0.3s;
    &.fold {
      left: $base-menu-min-width;
      width: calc(100% - $base-menu-min-width);
    }
  }
}
</style>
