<script setup lang="ts">
import { useSocketStore } from '@/stores/ws';
import { ref } from 'vue';
import MessageUI from '@/components/MessageUI.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const username = ref(`Anônimo${Math.floor(Math.random() * (9999 - 1000) + 1000)}`);
const socket = useSocketStore();
socket.createConnection(username.value)

const text = ref('');

const messages = socket.state.messages;
const sendMessage = () => {
  socket.sendMessage(text.value);
  text.value = '';
}

</script>

<template>
<div class="grow  flex flex-row bg-white">
    <div class="flex flex-col w-64 grow-0 border-r-2 border-r-slate-600 p-4">
      <input class="ring rounded focus:outline-none focus:ring-blue-400 p-1" v-model="username">
      <button class="ring rounded ring-blue-600 bg-blue-400 p-1" @click="socket.setUsername(username)">
        Change username
      </button>
    </div>
    <div class="flex flex-col grow">
      <div class="overflow-y-auto p-2 grow z-0 bg-orange-300">
        <div v-for="message in messages" :key="message.message" class="m-1">
          <MessageUI :message="message" />
        </div>
      </div>
      <div class="flex flex-row p-4 bg-white shadow-2xl gap-4 z-50 border-t-2 border-t-slate-600">
        <input class="grow ring rounded focus:outline-none focus:ring-blue-400 p-3 ring-slate-600 shadow-xl"
          v-model="text" @keyup.enter="sendMessage()">
      </div>
    </div>


  </div>
</template>