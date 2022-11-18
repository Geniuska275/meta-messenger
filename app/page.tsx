import React from 'react'
import Chatinput from './Chatinput'
import Messagelist from './Messagelist'

export default function Homepage(){
    return(
        <main>
            <Messagelist/>
            <Chatinput/>
        </main>
    )
}