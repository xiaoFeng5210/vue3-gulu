<template>
    <div style="margin-bottom: 10px;">
        <h2>dialog示例</h2>
    </div>
    <h5 style="margin-bottom: 10px;margin-top: 10px">示例2</h5>
    <Button @click="showDialog">切换对话框</Button>

    <h5 style="margin-bottom: 10px; margin-top: 10px">示例1</h5>
    <Button @click="toggle">切换异步的对话框</Button>

    <Dialog
        v-model:visible="toggleDialog"
        :closeOnClickOverlay="false"
        :ok="confirmHandle"
        :cancel="cancelHandle"
        @finished="finishedHandle"
    >
        <template v-slot:title>
            <strong>欢迎来到小风的世界和我一起玩耍</strong>
        </template>
        <template v-slot:content>
            <h3>测试对话框</h3>
        </template>
    </Dialog>
</template>

<script lang="ts">
import { ref } from "vue"
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from '../lib/openDialog'
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const toggleDialog = ref<boolean>(false);
        const toggle = () => {
            toggleDialog.value = !toggleDialog.value;
        }
        const showDialog = () => {
            openDialog({
                title: '标题',
                content: 'hahahaha'
            })
        }

        const promiseTest: () => Promise<any> = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(null);
                }, 1000);
            })
        }
        // 传入的ok函数
        const confirmHandle = async () => {
            await promiseTest();
        }

        // 传入的cancel函数
        const cancelHandle = () => {

        }

        // 传入的finished函数
        const finishedHandle = () => {
            console.log('对话框关闭')
        }

        return { toggle, toggleDialog, confirmHandle, cancelHandle, finishedHandle, showDialog }
    }
}
</script>