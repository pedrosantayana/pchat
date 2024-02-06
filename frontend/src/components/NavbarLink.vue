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
    <RouterLink :to=$props.to class="text-black dark:text-white hover:text-green-500 dark:hover:text-green-500">
        <slot></slot>
    </RouterLink>
</template>