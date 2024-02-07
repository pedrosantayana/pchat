<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps({
    to: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <RouterLink :to=$props.to class="text-black dark:text-white hover:text-blue-400">
        <slot></slot>
    </RouterLink>
</template>