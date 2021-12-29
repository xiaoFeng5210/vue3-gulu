<template>
  <router-view></router-view>
</template>

<script lang='ts'>
import { ref, provide } from "vue";
export default {
  name: "App",
  setup() {
    //* 一个全局的provide注入
    const menuVisible = ref(true);
    provide("menuVisible", menuVisible);
  }
};
</script>
