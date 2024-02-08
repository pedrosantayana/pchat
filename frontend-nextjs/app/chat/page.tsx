export default function Chat({}) {
  return(
    <main>
      <div class="grow  flex flex-row bg-white">
        <div className="flex flex-col w-64 grow-0 border-r-2 border-r-slate-600 p-4">
          <input className="ring rounded focus:outline-none focus:ring-blue-400 p-1" id="username" />
          <button className="ring rounded ring-blue-600 bg-blue-400 p-1" onClick={socket.setUsername(username)}>
            Change username
          </button>
        </div>
        <div className="flex flex-col grow">
          <div className="overflow-y-auto p-2 grow z-0 bg-orange-300">
            <div v-for="message in messages" :key="message.message" className="m-1">
              <MessageUI :message="message" />
            </div>
          </div>
          <div className="flex flex-row p-4 bg-white shadow-2xl gap-4 z-50 border-t-2 border-t-slate-600">
            <input className="grow ring rounded focus:outline-none focus:ring-blue-400 p-3 ring-slate-600 shadow-xl"id="text" onKeyUp={sendMessage()} />
          </div>
        </div>
    </main>
  )
}
