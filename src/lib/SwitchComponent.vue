<template>
  <button :class="{ checked: value }" @click="toggleSwitch">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggleSwitch = () => {
      context.emit("update:value", !props.value);
    };
    return { toggleSwitch };
  }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h / 2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 0.7s;
}
button:focus {
  outline: none;
}
button.checked {
  background: #1890ff;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>