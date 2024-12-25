import 'next-auth'

declare module 'next-auth' {
    interface User {
        role?: "user" | "seller"
    }
    interface AdapterUser {
        role?: "user" | "seller" 
    }
}