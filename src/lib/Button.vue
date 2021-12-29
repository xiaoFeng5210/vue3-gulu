<template>
    <button :class="classes" :disabled="disabled">
        <span class="gulu_loadingIndecator" v-if="loading"></span>
        <slot />
    </button>
</template>

<script lang="ts">import { computed } from "@vue/reactivity";

export default {
    props: {
        theme: {
            type: String,
            default: "button"
        },
        size: {
            type: String,
            default: "normal"
        },
        level: {
            type: String,
            default: "normal"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    // 不希望组件的根元素继承特性，你可以在组件的选项中设置 inheritAttrs: false
    // inheritAttrs: false,
    setup(props, context) {
        const { theme, size, level, disabled, loading } = props
        const classes = computed(() => {
            return {
                gulu_button: !disabled && !loading,
                gulu_button_disabled: disabled || loading,
                [`theme-${theme}`]: theme,
                [`size-${size}`]: size,
                [`level-${level}`]: level,
            }
        });
        return { classes }
    }
};
</script>

<style lang="scss">
$burlywood: burlywood;
.gulu_button {
    padding: 0 12px;
    border-radius: 2px;
    height: 32px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #b0b3b3;
    background-color: #fff;
    white-space: nowrap;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    &:hover {
        border: 1px solid $burlywood;
        color: $burlywood;
    }
}
.gulu_button_disabled {
    cursor: no-drop;
    padding: 0 12px;
    border-radius: 2px;
    height: 32px;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #b0b3b3;
    background-color: #fff;
    white-space: nowrap;
}
.gulu_button_loading {
    &:hover {
        cursor: wait;
    }
}
.gulu_disabled_button {
    padding: 0 12px;
    border-radius: 2px;
    height: 32px;

    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    border: 1px solid #b0b3b3;
    background-color: #fff;
    white-space: nowrap;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
}
.theme-link {
    border: none;
    color: blue;
    &:hover {
        color: blue;
        opacity: 0.8;
        border: none;
    }
}
.theme-text {
    border: none;
    color: black;
    &:hover {
        background-color: #f4f6f6;
        border: none;
        color: black;
    }
}
.size-big {
    font-size: 24px;
    height: 48px;
}
.size-small {
    font-size: 10px;
    height: 20px;
}
.level-main {
    border: 1px solid black;
    background-color: black;
    color: white;
    &:hover {
        opacity: 0.8;
        border: 1px solid black;
        color: white;
        background-color: rgb(7, 7, 7);
    }
}
.level-danger {
    border: 1px solid red;
    background-color: red;
    color: white;
    &:hover {
        opacity: 0.8;
        border: 1px solid red;
        background-color: red;
        color: white;
    }
}
// loading加载的css实现方式
.gulu_loadingIndecator {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $burlywood $burlywood $burlywood transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
}
@keyframes gulu-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
