<template>
    <div class="gulu-tabs-nav">
        <div
            class="gulu-tabs-nav-item"
            :class="{ selected: t === selected }"
            v-for="t in titles"
            :key="t"
        >{{ t }}</div>
    </div>
    <div>
        <!-- <component v-for="(c, index) in defaults" :key="index" :is="c" /> -->
        <component :is="current"></component>
    </div>
</template>

<script>
import Tab from './Tab.vue'
export default {
    props: {
        selected: String
    },
    setup(props, context) {
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs子组件必须是Tab');
            }
        });
        const titles = defaults.map(tag => tag.props.title);
        const current = defaults.filter(tag => tag.props.title === props.selected)[0];
        return { defaults, titles, current }
    }
}
</script>

<style lang="scss" scoped>
.gulu-tabs-nav {
    display: flex;
    border-bottom: 1px solid #d7dbdb;
}
.gulu-tabs-nav-item {
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
}
.selected {
    color: #609fea;
}
</style>