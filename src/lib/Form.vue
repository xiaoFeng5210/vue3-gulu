<template></template>

<script setup lang="ts">
import { defineProps, inject } from "vue"
interface Props {
    label?: string,
    prop?: string
}
const props = withDefaults(defineProps<Props>(), {
    label: '',
    prop: ''
})
// const formData = inject(key);
</script>