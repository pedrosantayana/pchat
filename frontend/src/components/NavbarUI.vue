<script setup lang="ts">
import NavbarLink from '@/components/NavbarLink.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <nav class="z-10">
    <div class="flex flex-row justify-between bg-white px-8 py-4 shadow-2xl">
      <div>
      <a href="/" class="text-3xl font-semibold font-mono select-none">
        <span class="text-blue-400"><font-awesome-icon :icon="faComments" /></span>
        PChat
      </a>
      </div>
      <div class="flex flex-row gap-x-8 text-xl font-medium select-none">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/chat">Chat</NavbarLink>
      </div>
    </div>
  </nav>
</template>