<template>
    <div v-for="t in titles" :key="t">{{ t }}</div>
    <component v-for="(c, index) in defaults" :key="index" :is="c" />
</template>

<script>
import Tab from './Tab.vue'
export default {
    setup(props, context) {
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs子组件必须是Tab');
            }
        });
        const titles = defaults.map(tag => tag.props.title);
        return { defaults, titles }
    }
}
</script>