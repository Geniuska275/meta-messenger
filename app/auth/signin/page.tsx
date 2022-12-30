import {getProviders} from "next-auth/react"
import Image from "next/image"
import SignInComponent from "./SignInComponent"

 async function Signinpage() {

    const providers=await getProviders()
  return (
    <div className="grid justify-center">
        
        <div>
        <Image
         className="rounded-full mx-2 object-cover"
         src="https://links.papareact.com/161"
         alt=""
         height={700}
         width={700}     
        />
        </div>
            
        <SignInComponent providers={providers}/>
    </div>
  )
}

export default Signinpage