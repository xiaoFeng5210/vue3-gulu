<template>
  <div class="topnav">
    <div class="logo" @click="handleChangeMenu" style="padding-left: 50px;">logo</div>
    <div class="menu" style="padding-right: 50px;">menu</div>
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

    return { handleChangeMenu };
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
