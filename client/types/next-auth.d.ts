import 'next-auth'

declare module 'next-auth' {
    interface User {
        role?: "USER" | "SELLER"
    }
    interface AdapterUser {
        role?: "USER" | "SELLER" 
    }
}