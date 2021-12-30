<template>
    <div class="gulu-tabs-nav">
        <div
            class="gulu-tabs-nav-item"
            :class="{ selected: t === selected }"
            v-for="(t, index) in titles"
            :key="t"
            :ref="el => { if (el) navItems[index] = el }"
            @click="changeTab(t, index)"
        >{{ t }}</div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div>
        <!-- <component v-for="(c, index) in defaults" :key="index" :is="c" /> -->
        <component :is="current" :key="current.props.title"></component>
    </div>
</template>

<script>
import { watchEffect, reactive, computed, ref, onMounted } from 'vue';
import Tab from './Tab.vue'
export default {
    props: {
        selected: String
    },
    setup(props, context) {
        const navItems = ref([]);
        const indicator = ref(null);
        const navItemWidth = ref(null);
        onMounted(() => {
            const divs = navItems.value;
            const resultDiv = divs.find(div => div.classList.contains('selected'));
            const { width } = resultDiv.getBoundingClientRect();
            indicator.value.style.width = width + 'px';
            navItemWidth.value = width;
        });
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs子组件必须是Tab');
            }
        });
        const titles = defaults.map(tag => tag.props.title);
        // const current = computed(() => defaults.filter(tag => tag.props.title === props.selected)[0])
        let current = reactive({ props: null });
        watchEffect(() => {
            current = Object.assign(current, defaults.filter(tag => tag.props.title === props.selected)[0]);
            console.log(JSON.parse(JSON.stringify(current)))
        })
        const changeTab = (title, index) => {
            if (title === props.selected) return;
            // 每次点击tab的时候底部的横线也要跟着滑动
            indicator.value.style.left = (navItemWidth.value * index) + 'px';
            context.emit('update:selected', title);
        }
        return { defaults, titles, current, changeTab, navItems, indicator }
    }
}
</script>

<style lang="scss" scoped>
$blue: #609fea;
.gulu-tabs-nav {
    display: flex;
    border-bottom: 1px solid #d7dbdb;
    position: relative;
}
.gulu-tabs-nav-item {
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
}
.selected {
    color: $blue;
}
.gulu-tabs-nav-indicator {
    position: absolute;
    height: 3px;
    background: $blue;
    left: 0;
    bottom: -1px;
    // width: 100px;
    transition: left 0.2s ease-in-out;
}
</style>