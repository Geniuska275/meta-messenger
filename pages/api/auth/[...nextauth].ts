import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions={
    providers:[
        FacebookProvider({
            clientId:"904859500675082",
            clientSecret:"a067cf0309c042cb93ca0bb0eaec7dcc",
        }),
    ],
    secret:"helloworld",
    pages:{
        signIn:"/auth/signin"
    },
   
   
}

export default NextAuth(authOptions)

