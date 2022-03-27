<template>
  <div class="topnav">
    <div class="logo" @click="handleChangeMenu" style="margin-left: 40px; width: 50px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--carbon"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          fill="#888888"
          d="M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z"
        ></path>
      </svg>
    </div>
    <div class="menu" v-if="isShowHome" style="padding-right: 50px" @click="notShowHome">
      <router-link class="menu" to="/" style="text-decoration: none; color: black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ion"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            fill="#888888"
            d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
          ></path>
          <path
            fill="currentColor"
            d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
          ></path>
        </svg>
      </router-link>
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
      isShowHome.value = false;
    };
    return { handleChangeMenu, notShowHome, isShowHome };
  },
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
.logo {
  display: inline-flex;
  align-items: center;
  color: black;
}
.menu {
  display: flex;
  align-items: center;
  color: black;
}
</style>
