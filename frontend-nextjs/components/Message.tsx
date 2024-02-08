interface MessageProps {
  username: string;
  message: string;
  own: boolean;
}

export default function Message({username, message, own}: MessageProps) {
  return(
    <div className={`flex text-xl ${own ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="flex flex-col-reverse pb-2 shadow-lg">
        <div className={`
          grow-0
          bg-transparent
          w-0 h-0
          border-solid
          border-4
          border-b-blue-400
          border-t-transparent
          ${own ?
          'border-e-transparent border-s-blue-400' :
          'border-e-blue-400 border-s-transparent'}
        `} />
      </div>
      <div className={`bg-blue-400 py-1 px-2 rounded mb-2 shadow-lg
      ${own ? 'rounded-br-none' : 'rounded-bl-none'}`}>
        { own ? '' : username + ': ' }{ message }
      </div>
    </div>
  )
}