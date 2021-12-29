<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="gulu-dialog-overlay"></div>
            <div class="gulu-dialog-wrapper">
                <div class="gulu-dialog">
                    <Header>
                        <slot name="title" />
                        <span @click="close" class="gulu-dialog-close"></span>
                    </Header>
                    <main>
                        <slot name="content" />
                    </main>
                    <footer>
                        <Button
                            :loading="confirmLoading"
                            level="main"
                            style="margin-right: 10px"
                            @click="ok"
                        >{{ okText }}</Button>
                        <Button @click="cancel">{{ cancelText }}</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
type OkType = Promise<any> | void | boolean | undefined | null
import { ref } from "vue";
import Button from "./Button.vue";
export default {
    components: { Button },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function
        },
        cancel: {
            type: Function
        },
        finished: {
            type: Function
        },
        okText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        }
    },
    setup(props, context) {
        let confirmLoading = ref<boolean>(false);
        function close(): void {
            context.emit('update:visible', false);
        }
        function onClickOverlay(): void {
            if (props.closeOnClickOverlay) {
                close()
            }
        }
        function ok(): OkType {
            let result = props.ok?.();
            if (!result) return;
            if (result instanceof Promise) {
                confirmLoading.value = true;
                result.then(() => {
                    confirmLoading.value = false;
                    context.emit('finished');
                    close();
                })
            } else if (result !== false) {
                context.emit('finished');
                close()
            }
        }

        function cancel(): void {
            props.cancel?.();
            close();
        }

        return { close, onClickOverlay, ok, cancel, confirmLoading }
    }
}
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 100%;
    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }
    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    > header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        white-space: nowrap;
    }

    > main {
        padding: 12px 16px;
    }

    > footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        margin-left: 10px;

        &::before,
        &::after {
            content: "";
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>