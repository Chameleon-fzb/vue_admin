<template>
  <div class="logo">
    <img :src="setting.logo" alt="" />
    <p v-show="!settingStore.fold">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting.ts'
import { useLayoutSettingStore } from '@/store'
const settingStore = useLayoutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-logo-title-fontsize;
    margin-left: 10px;
    white-space: nowrap;
  }
}
</style>
