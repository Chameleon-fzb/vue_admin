<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { watch, ref, nextTick } from 'vue'
import { useLayoutSettingStore } from '@/store'
const settingStore = useLayoutSettingStore()
const flag = ref(true)
watch(
  () => settingStore.refsh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  }
)
</script>
<script lang="ts">
export default {
  name: 'LayoutMain',
}
</script>
<style>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
