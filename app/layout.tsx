import React from 'react'
import '../styles/globals.css'
import Header from './Header'
import { Providers } from './provider'
import {unstable_getServerSession} from "next-auth/next"
import {authOptions} from "../pages/api/auth/[...nextauth]"



export default  function RootLayout({children}:{
  children:React.ReactNode  
}){
  const session=unstable_getServerSession(authOptions)

return(
  
<Providers session={session}>
    <html>
        <head>
           
        </head>
        <body>
        <Header/>
           
            {children}
      
        
            </body>
    </html>
    </Providers>

)
}