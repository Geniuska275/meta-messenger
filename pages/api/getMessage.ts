import redis from  "../../redis";
import type { NextApiRequest, NextApiResponse } from 'next'
import{Message} from "../../typings"

type Data = {
  messages:Message[]
}
type errorData={
    body:string
}
export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | errorData>
) {
    if(req.method !=="GET"){
   res.status(405).json({ body: 'message not allowed' })
   return;
    }
  const messagesRes=await redis.hvals("messages");
  const messages:Message[]=messagesRes.map((message)=>JSON.parse(message)).sort((a,b)=>b.created_at - a.created_at)
   res.status(200).json({messages}) ; 
}
