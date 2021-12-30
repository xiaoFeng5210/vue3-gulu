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
    const isShowHome = ref(false);
    provide("menuVisible", menuVisible);
    provide("isShowHome", isShowHome);
  }
};
</script>
