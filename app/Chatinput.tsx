 
"use client"
import { FormEvent, useState } from "react"
import { v4 as uuid } from 'uuid'
import { Message } from "../typings"
import useSWR from "swr"

export default function Chatinput() {
    const [input, setInput] = useState("")

    const addMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!input) return;

        const messagetosend = input;
        
        const id = uuid();

        const message: Message = {
            id,
            messagetosend,
            username: "Kingsley Aigbojie",
            created_at: Date.now(),
            email: "aigbojie@2020gmail.com"

        }
        const UploadMessageToUpstash = async () => {
            const res = await fetch("/api/addMessage", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            });
            const data = await res.json()
            console.log(data)
        }
        UploadMessageToUpstash()

    }
    return (
        <form onSubmit={addMessage} className="flex  fixed bottom-0 px-10 py-5 z-50 w-full bg-white space-x-2 border-t border-gray-100">
            <input type="text"
                placeholder="Enter Message Here..."
                onChange={(e) => setInput(e.target.value)}
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