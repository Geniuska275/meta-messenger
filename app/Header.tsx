import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logoutbutton from "./Logoutbutton";
import {unstable_getServerSession} from "next-auth/next"


async function Header(){
  const session= await unstable_getServerSession()


   if(session)return(
    <header className="sticky top-0 z-50 shadow-sm bg-white flex justify-between items-center
    p-10">
       <div className="flex space-x-2">
       <Image src={session.user?.image!} className="rounded-full object-contain"
                 height={50}
                 width={50}
                 alt="profile picture "
                     />
        <div>
            <p className="text-blue-400">Logged in as :</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
            
        </div>

       </div>
        <Logoutbutton/>
    </header>



   )

    return(
        <header className="sticky top-0 z-50 shadow-sm bg-white flex justify-center items-center
        p-10">
            <div className="flex flex-col space-y-5 items-center">
                <div className="flex items-center space-x-2">
                <img src="index.png" className="rounded-full object-contain"
                 height={50}
                 width={50}
                     />
                     <p className="text-blue-400">Welcome to Meta  Messenger</p>
                </div>
                <Link href="/auth/signin"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                py-2 px-4 rounded"> sign in</Link>
            
            </div>
        </header>
        
    )

}
export default Header;