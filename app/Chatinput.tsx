  
"use client"
import { FormEvent, useState } from "react"
import { v4 as uuid } from 'uuid'
import { Message } from "../typings"
import useSWR from "swr"
import fetcher from "../utils/fetchMessages"

export default function Chatinput() {
    const [input, setInput] = useState("")
    const{data:messages,error,mutate} =useSWR("/api/getMessage",fetcher)

    console.log(messages)

    const addMessage =  async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!input) return;

        const messagetosend = input;
        setInput("");
        const id = uuid();
        
        const message: Message = {
            id,
            message:messagetosend,
            username: "Kingsley Aigbojie",
            created_at: Date.now(),
            profile_pic:"https://www.facebook.com/photo/?fbid=1783781928467843&set=a.105940712918648",
            
            email: "michael@gmail.com"
            
        }
        const UploadMessageToUpstash = async () => {
            const data = await fetch("/api/addMessage", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            }).then((res)=>res.json())
           return [data.message,...messages!]
        }
    
        await mutate(UploadMessageToUpstash,{
            optimisticData:[message,...messages!],
            rollbackOnError:true
        })
    }


    return (
        <form onSubmit={addMessage} className="flex  fixed bottom-0 px-5 py-5 z-50 w-full bg-white space-x-2 border-t border-gray-100">
            <input type="text"
                placeholder=" Message Here..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="
            flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2  focus:ring-blue-600
            focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed font-bold
            "/>
            <button
                type="submit"
                disabled={!input}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded
             disabled:opacity-50 disable:cursor-not-allowed ">
                send
            </button>
        </form>
    )
}