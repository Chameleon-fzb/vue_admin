<template>
  <el-button size="default" icon="Refresh" circle></el-button>
  <el-button size="default" icon="FullScreen" circle></el-button>
  <el-button size="default" icon="Setting" circle></el-button>
  <img
    src="../../../../public/logo.png"
    style="width: 24px; height: 24px; margin: 0px 15px; border-radius: 50%"
  />

  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  font-size: 16px;
}
</style>
