"use client"
import useSWR from "swr"
import fetcher from "../utils/fetchMessages"
import { Message } from "../typings"
import Image from "next/image"
import { MessageComponents } from "./MessageComponents"
export default function Messagelist() {
    const { data, error, mutate } = useSWR<Message[]>("/api/getMessage", fetcher)
    return (
        <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
            {data?.map((message) => (
               <MessageComponents key={message.id} message={message}/>
                  
             ))} 
        </div>
    )
}