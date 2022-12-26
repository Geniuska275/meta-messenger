import Image from 'next/image'
import React from 'react'
import { Message } from '../typings'
type Props={
    message:Message
}
export const MessageComponents = ( {message}:Props) => {
    console.log(message)
    const isUser=true
  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
        <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        {/* <Image src={message.profile_pic}
        alt="images"
        width={50}
        height={10}
        className="rounded-full mx-2 "/> */}
        </div>

            
        <div>
            <p className={`text-[0.65rem] px-[2px] pb-[2px] ${isUser? "text-blue-400 text-right" :"text-red-400 text-left"} `}>{message.username}</p>
        </div>
        <div>
            <div>
                <p>{new Date(message.created_at).toLocaleDateString()}</p>
                <p>{new Date(message.created_at).toLocaleTimeString()}</p>

            </div>
            <p>{message.message}</p>

        </div>
    </div>
  )
}
