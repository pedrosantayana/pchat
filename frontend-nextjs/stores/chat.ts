import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'
import { create } from 'domain'

interface ChatState {
  socket: WebSocket
  username: string
  messages: Message[]
}

interface Message {
  username: string
  message: string
  own: boolean
}

interface MessageResponse {
  username: string
  message: string
}

const username: string = `Anônimo${Math.floor(Math.random() * (9999 - 1000) + 1000)}`
const url: string = `${process.env.NODE_ENV === 'production' ? 'wss' : 'ws'}://${process.env.NEXT_PUBLIC_BACKEND_URL}?username=${username}`

const initialState: ChatState = {
  socket: new WebSocket(url),
  username: username,
  messages: []
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createConnection: state => {
      const url: string = `${process.env.NODE_ENV === 'production' ? 'wss' : 'ws'}://${process.env.NEXT_PUBLIC_BACKEND_URL}?username=${state.username}`
      state.socket = new WebSocket(url)

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
        const data: MessageResponse = JSON.parse(event.data)
        const msg: Message = {
          username: data.username,
          message: data.message,
          own: false
        }
        state.messages.push(msg)
      }
    },
    setUsername: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        console.error('Username is empty!')
        return
      }
      state.username = action.payload
      state.socket.close()
      state.socket = new WebSocket(`${process.env.NODE_ENV === 'production' ? 'wss' : 'ws'}://${process.env.NEXT_PUBLIC_BACKEND_URL}?username=${state.username}`)
    },
    sendMessage: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        console.error('Message is empty!')
        return
      }
      if (state.socket.readyState === WebSocket.OPEN) {
        state.socket.send(action.payload)
        state.messages.push({ username: state.username, message: action.payload, own: true })
      } else {
        console.error('WebSocket is not open!')
      }
    }
  }
})