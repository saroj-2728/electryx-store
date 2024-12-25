'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const User = () => {

    const router = useRouter()
    useEffect(() => {
        router.push('/user/profile')
    }, [])


    return (
        <div>

        </div>
    )
}

export default User