'use client'
import { SignUp } from "@/components/Auth/Signup";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignUpPage = () => {

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
                    <h1 className="text-3xl font-bold mb-4 animate-in fade-in duration-700 font-allertaStencil">Join Us!</h1>
                    <p className="text-base animate-in fade-in duration-1000">Sign up to join our community and begin experiencing everything we have in store for you.</p>
                    <div className="pt-10 mb-8 w-64 h-64 transform rotate-12 animate-in duration-500">
                        <Image
                            src="/images/signUpImage.jpg"
                            height={500}
                            width={500}
                            alt="Sign up Illustration"
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>

                <div className="w-[30%]">
                    <SignUp />
                </div>

            </div>
        </div>
    );
}

export default SignUpPage;