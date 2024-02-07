import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

type SocketState = {
  socket: WebSocket | null
  username: string
  callback: ((message: string) => void) | undefined
  messages: Ref<Message[]>
}

export type Message = {
  username: string
  message: string
  own: boolean
}

export const useSocketStore = defineStore('ws', () => {
  const state: SocketState = {
    socket: null,
    username: '',
    callback: undefined,
    messages: ref<Message[]>([])
  }

  const createConnection = (username: string) => {
    state.username = username
    state.socket = new WebSocket(`wss://pchat-backend.fly.dev/chat?username=${state.username}`)

    state.socket.onclose = () => {
      console.log('WebSocket is closed now.')
    }

    state.socket.onerror = (error) => {
      console.error('WebSocket error observed:', error)
    }

    state.socket.onopen = () => {
      console.log('WebSocket is open now.')
    }

    state.socket.onmessage = (event) => {
      console.log('Message received:', event.data)
      const data: { username: string; message: string } = JSON.parse(event.data)
      const msg: Message = {
        username: data.username,
        message: data.message,
        own: false
      }
      state.messages.value.push(msg)
    }
  }

  const setUsername = (username: string) => {
    state.username = username
    state.socket?.close()
    createConnection(username)
  }

  const sendMessage = (message: string) => {
    if (message === '') {
      console.error('Message is empty!')
      return
    }
    if (state.socket && state.socket.readyState === WebSocket.OPEN) {
      state.socket.send(message)
      state.messages.value.push({ username: state.username, message, own: true })
      //state.callback(`${state.username}: ${message}`)
    } else {
      console.error('WebSocket is not open!')
    }
  }

  const setCallback = (cb: (message: string) => void) => {
    state.callback = cb
  }

  return { createConnection, sendMessage, state, setUsername, setCallback }
})
