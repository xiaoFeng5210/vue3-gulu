<template>
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @click="onRate(i)" @mouseover="mouseOver(i)" v-for="i in 5" :key="i">★</span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue';
let props = defineProps({
    modelValue: Number,
    theme: { type: String, default: 'orange' },
    size: { type: Number, default: 30 }
});
const themeObj = { 'black': '#00', 'white': '#fff', 'red': '#f5222d', 'orange': '#fa541c', 'yellow': '#fadb14', 'green': '#73d13d', 'blue': '#40a9ff' }
const fontStyle = computed(() => `color:${themeObj[props.theme] ? themeObj[props.theme] : props.theme};font-size:${props.size}px`);

let width = ref(props.modelValue);
const mouseOver = (i: number) => {
    width.value = i
}
const mouseOut = () => {
    width.value = props.modelValue;
}
const fontwidth = computed(() => `width:${width.value}em`);

let emits = defineEmits(['update:modelValue'])

function onRate(num: number) {
    emits('update:modelValue', num);
}
</script>

<style scoped lang="scss">
.rate {
    position: relative;
    display: inline-block;
}
.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>

