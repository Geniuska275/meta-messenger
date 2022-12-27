import React from 'react'
import Chatinput from './Chatinput'
import Messagelist from './Messagelist'
import {Message} from "../typings"
async  function Homepage(){
  const data=await fetch("http://localhost:3000/api/getMessage").then((res)=>res.json())
  
  const messages:Message[]=data.messages;
  
    return(
        <main>
            <Messagelist initialMessages={messages}/>
            <Chatinput/>
        </main>
    )
}

export default Homepage;