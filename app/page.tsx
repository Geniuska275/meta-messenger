import React from 'react'
import Chatinput from './Chatinput'
import Messagelist from './Messagelist'
import {Message} from "../typings"
import { Providers } from './provider'
import {unstable_getServerSession} from "next-auth/next"

async  function Homepage(){
  const data=await fetch("http://localhost:3000/api/getMessage").then((res)=>res.json()).catch(
    error=>console.log(error)
  )
  
  const messages:Message[]=data.messages;

  const session=unstable_getServerSession()
    return(
    <Providers session={session}>


        <main>
            <Messagelist initialMessages={messages}/>
            <Chatinput session={session}/>
        </main>

      </Providers>
    )
}

export default Homepage;