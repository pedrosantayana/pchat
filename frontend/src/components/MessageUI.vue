<script setup lang="ts">

type Message = {
  username: string;
  message: string;
  own: boolean;
}

defineProps<{
  message: Message,
}>()
</script>

<template>
  <div class="flex text-xl" :class="message.own ? 'flex-row-reverse' : 'flex-row'">
    <div class="flex flex-col-reverse pb-2 shadow-lg">
      <div class="
                grow-0
                bg-transparent
                w-0 h-0
                border-solid
                border-4
                border-b-blue-400
                border-t-transparent
            " :class="!message.own ?
              'border-e-blue-400 border-s-transparent' :
              'border-e-transparent border-s-blue-400'"></div>
    </div>
    <div class="bg-blue-400 py-1 px-2 rounded mb-2 shadow-lg"
      :class="message.own ? 'rounded-br-none' : 'rounded-bl-none'">
      {{ message.own ? '' : message.username + ': ' }}{{ message.message }}
    </div>
  </div>
</template>