<template>
  <div class="topnav">
    <div class="logo" @click="handleChangeMenu" style="padding-left: 50px;">logo</div>
    <div class="menu" v-if="isShowHome" style="padding-right: 50px;" @click="notShowHome">
      <router-link to="/" style="text-decoration: none; color: black">首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const handleChangeMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    const isShowHome = inject<Ref<boolean>>("isShowHome");
    const notShowHome = () => {
      isShowHome.value = false
    }
    return { handleChangeMenu, notShowHome, isShowHome };
  }
};
</script>

<style lang="scss" scope>
.topnav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  background: burlywood;
  color: black;
}
</style>
