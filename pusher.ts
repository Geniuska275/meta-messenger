import Pusher from "pusher"
import ClientPusher from "pusher-js"
export const serverPusher=new Pusher({
    appId:"1530554",
    key:"f5c7638a66470da844c2",
    secret:"de75b6e0b9cd35ab0d84",
    cluster:"mt1",
    useTLS:true
})
export const clientPusher=new ClientPusher("f5c7638a66470da844c2",{
    cluster:"mt1"
})