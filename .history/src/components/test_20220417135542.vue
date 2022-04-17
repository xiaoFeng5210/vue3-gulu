<template>
  <div class="g_box" @drop="drop" @dragover="dragover">
    <div
      v-for="(item, index) in list"
      :key="item"
      class="box_item"
      draggable="true"
      @dragstart="dragstart($event, index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const list = reactive(Array.from({ length: 15 }, (el, i) => i));

const router = useRouter();
function dragstart(event: DragEvent, index: number) {
  let effectAllowed = event.dataTransfer?.effectAllowed;
  effectAllowed = "move";
  event.dataTransfer?.setData("dragData", JSON.stringify(list[index]));
  // list.splice(index, 1);
}
function drop(event: DragEvent) {
  const data = event.dataTransfer
    ? JSON.parse(event.dataTransfer.getData("dragData"))
    : "";
  console.log(data);
}
function dragover(event: DragEvent) {
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
