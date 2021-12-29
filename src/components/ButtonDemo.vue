<template>
    <div class="title">button示例</div>
    <Button class="button_component" theme="button">普通按钮</Button>
    <Button class="button_component" theme="link">导航按钮</Button>
    <Button class="button_component" theme="text">文字按钮</Button>

    <div class="title">size示例</div>
    <Button class="button_component" size="big">大按钮</Button>
    <Button class="button_component">普通大小</Button>
    <Button class="button_component" size="small">小按钮</Button>

    <div class="title">level示例</div>
    <Button class="button_component" level="main">主要按钮</Button>
    <Button class="button_component">普通按钮</Button>
    <Button class="button_component" level="danger">删除按钮</Button>

    <div class="title">disabled示例</div>
    <Button class="button_component" :disabled="true">禁止按钮</Button>

    <div class="title">loading示例</div>
    <Button class="button_component" loading>加载按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: {
        Button
    }
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.button_component {
    margin-left: 10px;
}
</style>
