"use client"
import useSWR from "swr"
import { useEffect } from "react"
import fetcher from "../utils/fetchMessages"
import { Message } from "../typings"
import Image from "next/image"
import { MessageComponents } from "./MessageComponents"
import { clientPusher } from "../pusher"

type Props={
    initialMessages:Message[]
}
export default function Messagelist({initialMessages}:Props) {
    const { data:messages, error, mutate } = useSWR<Message[]>("/api/getMessage", fetcher)
     useEffect(()=>{
        const channel=clientPusher.subscribe("messages")

        channel.bind("new-message",async (data:Message)=>{
            //if ypu sent the the message no need to update cache
            if(messages?.find((message)=>message.id==data.id)) return
            if(!messages){
                mutate(fetcher)
            }else{

                mutate(fetcher,{
                    optimisticData:[data,...messages!],
                    rollbackOnError:true
                })
            }
            return ()=>{
                channel.unbind_all()
                channel.unsubscribe()
            }
        })

     },[mutate,clientPusher,messages])


    return (
        <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
            {(initialMessages ||messages).map((message) => (
               <MessageComponents key={message.id} message={message}/>
                  
             ))} 
        </div>
    )
}