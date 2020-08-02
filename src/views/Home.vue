<template>
  <div>
    <Topnav />
    <div class="topnav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="banner">
      <h1>轱辘</h1>
      <h2>一个好用的vue3 UI框架</h2>
      <a>GitHub</a>
      <a>开始</a>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav
  }
};
</script>

<style lang="scss"></style>
