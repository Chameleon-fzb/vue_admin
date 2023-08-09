<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute(item)"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute(item)"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <MenuList :menuList="item.children" />
      </el-sub-menu>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

defineProps(['menuList'])
const $router = useRouter()
const goRoute = (vc: any) => {
  $router.push(vc.path)
}
</script>
<script lang="ts">
export default {
  name: 'MenuList',
}
</script>
<style lang="scss">
.el-menu {
  background-color: $base-menu-background;
}
.el-menu-item,
.el-sub-menu__title {
  color: white;
}
.el-menu-item:hover,
.el-sub-menu__title:hover {
  color: skyblue;
  background-color: #002529;
}
</style>
