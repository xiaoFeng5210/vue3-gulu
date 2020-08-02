<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>轱辘</h1>
      <h2>一个好用的vue3 UI框架</h2>
      <div>
        <a>GitHub</a>
        <router-link to="/doc">开始</router-link>
      </div>
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

<style lang="scss">
.banner {
  margin-top: 150px;
}
</style>
