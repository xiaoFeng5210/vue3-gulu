<template>
  <div class="topnav">
    <div class="logo" @click="handleChangeMenu">logo</div>
    <div class="menu">menu</div>
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
  height: 30px;
  background: grey;
}
</style>
