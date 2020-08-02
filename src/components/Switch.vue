<template>
  <div class="g__box">
    <div class="show__switch">
      <SwitchComponent />
    </div>
  </div>
</template>

<script lang="ts">
import SwitchComponent from "../lib/SwitchComponent.vue";
export default {
  components: {
    SwitchComponent
  }
};
</script>

<style lang="scss" scoped>
.g__box {
  .show__switch {
    width: 20%;
  }
}
</style>