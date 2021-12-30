<template>
    <h2>tabs组件示例</h2>
    <div style="width: 400px;margin-left: 50%; transform: translateX(-50%);margin-top: 10px">
        <Tabs v-model:selected="whichTap">
            <Tab title="导航1">内容1</Tab>
            <Tab title="导航2">内容2</Tab>
        </Tabs>
    </div>
</template>

<script>
import { ref } from 'vue'
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
    components: {
        Tabs,
        Tab
    },
    setup() {
        const whichTap = ref('导航1');

        return { whichTap }
    }
}
</script>