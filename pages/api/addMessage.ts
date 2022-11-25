import redis from  "../../redis";
import type { NextApiRequest, NextApiResponse } from 'next'
import{Message} from "../../typings"

type Data = {
  message:Message
}
type errorData={
    body:string
}
export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | errorData>
) {
    if(req.method !=="POST"){
   res.status(405).json({ body: 'message not allowed' })
    }
     const{message}=req.body
     console.log(message)
     const newMessage={
        ...message,
        created_at:Date.now()
     }
    
    await redis.hset('messages', message.id ,JSON.stringify(newMessage))

  res.status(200).json({ message: newMessage })
}
