<script setup lang="ts">
import NavbarUI from "@/components/NavbarUI.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div class="h-dvh bg-emerald-500 flex flex-col">
      <NavbarUI />
      <RouterView />
    </div>
</template>