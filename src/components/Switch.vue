<template>
    <div class="g__box">
        <div class="show__switch">
            <SwitchComponent v-model:value="switchChecked"/>
        </div>
    </div>
</template>

<script lang="ts">
    import SwitchComponent from "../lib/SwitchComponent.vue";
    import {ref} from "vue";

    export default {
        components: {
            SwitchComponent
        },
        setup() {
            const switchChecked = ref(false);
            return {switchChecked};
        }
    };
</script>

<style lang="scss" scoped>
    .g__box {
        .show__switch {
            width: 20%;
        }
    }
</style>