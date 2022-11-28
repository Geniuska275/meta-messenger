"use client"
import useSWR from "swr"
import fetcher from "../utils/fetchMessages"
import { Message } from "../typings"

export  default function Messagelist(){
    const{data,error,mutate} =useSWR<Message[]>("/api/getMessage",fetcher)
    return(
        <>
        {data?.map((message)=>(
            <div key={message.id}>
                <h1>{message.messagetosend}</h1>
                <h2>{message.email}</h2>
                <h2>{message.created_at}</h2>

            </div>
        ))}      
</>
    )
}