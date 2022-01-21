<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>小风轱辘</h1>
      <h2>一个好用的vue3 UI框架</h2>
      <div class="route_doc">
        <a class="init_nav" href="https://www.github.com/xiaoFeng5210">GitHub</a>
        <router-link class="to_doc init_nav" to="/doc/button">开始</router-link>
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

<style lang="scss" scoped>
.banner {
  margin-top: 150px;
}
.route_doc {
  margin-top: 10px;
}
.init_nav {
  text-decoration: none;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #fff;
  color: black;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 4px 2px 2px grey;
  &:hover {
    background-color: black;
    color: white;
  }
}
.to_doc {
  text-decoration: none;
  margin-left: 10px;
}
</style>
