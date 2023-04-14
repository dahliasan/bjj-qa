import React from 'react'

const Message = ({ text, isUserMessage }) => {
  return (
    <div className={`w-full`}>
      <div
        className={`block rounded-md px-4 py-2 ${
          isUserMessage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export default Message
