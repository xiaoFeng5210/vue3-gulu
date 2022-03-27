<template>
  <div class="g_box">
    <div v-for="item in 15" :key="item" class="box_item"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.g_box {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px;
  justify-content: center;
  .box_item {
    width: 100%;
    height: 200px;
    border: 1px solid gray;
  }
}
</style>
