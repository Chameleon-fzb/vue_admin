<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="!settingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="item in $route.matched"
      :key="item.name"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon>
        <component class="el_icon" :is="item.meta.icon"></component
      ></el-icon>
      <span class="text">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useLayoutSettingStore } from '@/store'
import { useRoute } from 'vue-router'
const settingStore = useLayoutSettingStore()
const changeIcon = () => {
  settingStore.fold = !settingStore.fold
}
const $route = useRoute()
console.log($route)
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style lang="scss" scoped>
.el_icon {
  position: relative;
  top: 1px;
}
.text {
  margin: 0 5px;
}
</style>
