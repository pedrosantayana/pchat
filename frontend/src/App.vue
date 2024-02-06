<script setup lang="ts">
import NavbarUI from "@/components/NavbarUI.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div class="h-dvh bg-white flex flex-col">
      <NavbarUI />
      <RouterView />
    </div>
</template>