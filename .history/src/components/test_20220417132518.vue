<template>
  <div class="g_box" @drop="drop" @dragover="dragover">
    <div
      v-for="(item, index) in list"
      :key="item"
      class="box_item"
      draggable="true"
      @dragstart="dragstart($event, item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";
import { useRouter } from "vue-router";

const list = reactive(Array.from({ length: 15 }, (el, i) => i));

const router = useRouter();
function dragstart(event: dragEvent) {
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("dragData");
}
function drop(event: dragEvent) {
  const data = event.dataTransfer.getData("dragData");
  console.log(data);
}
function dragover(event: dragEvent) {
  event.preventDefault();
}
</script>

<style scoped lang="scss">
.g_box {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px;
  justify-content: center;
  .box_item {
    // user-select: none;
    width: 100%;
    height: 200px;
    border: 1px solid gray;
  }
}
</style>
