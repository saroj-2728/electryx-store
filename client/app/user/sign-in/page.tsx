'use client'
import { SignIn } from "@/components/Auth/Signin";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const SignInPage = () => {

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session)
            router.push('/')
    }, [session])

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex items-center justify-center gap-10 w-full mx-auto shadow-lg overflow-hidden bg-accent-light dark:bg-accent-dark">

                <div className="hidden md:flex flex-col justify-center items-center w-1/2 text-white p-10">
                    <h1 className="text-3xl font-bold mb-4 animate-in fade-in duration-700 font-allertaStencil">Welcome Back!</h1>
                    <p className="text-base animate-in fade-in duration-1000">Sign in to resume where you left off and explore new features tailored just for you.</p>
                    <div className="pt-14 w-72 h-72 transform -rotate-12 animate-in duration-500">
                        <Image
                            src="/images/signInImage.jpg"
                            height={500}
                            width={500}
                            alt="Illustration"
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>

                <div className="w-[30%]">
                    <SignIn />
                </div>

            </div>
        </div>
    );
}

export default SignInPage;