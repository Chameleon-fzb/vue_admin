<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="`${prefix}${name}`" :fill="color"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  //xlik:href属性前缀
  prefix: { type: String, default: '#icon-' },
  //提供使用的图标的名字
  name: { type: String, require: true },
  //填充颜色
  color: { type: String, default: '' },
  //宽高
  width: { type: String, default: '16px' },
  height: { type: String, default: '16px' },
})
</script>

<style scoped></style>
