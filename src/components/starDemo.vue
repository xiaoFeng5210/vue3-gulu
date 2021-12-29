<template>
    <div>评级分数组件</div>
    <div class="rate">
        <Rate v-model="score" />
        <Rate v-model="score" theme="green" />
        <Rate v-model="score" theme="blue" />
    </div>
</template>

<script setup>
// import { defineProps, computed } from 'vue';
import { ref } from 'vue';
import Rate from '../lib/Rate.vue';

let score = ref(3);
</script>

<style scoped lang="scss">
.rate {
    margin-top: 20px;
}
</style>