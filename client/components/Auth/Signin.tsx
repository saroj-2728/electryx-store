'use client'
import { FaGithub, FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"
import { useState } from "react"
import { LoaderSec } from "@/components/Loader"
import { signInWithMagicLink, signInWithOAuth } from "@/actions/auth/auth"

export type Provider = 'facebook' | 'github' | 'google'

export interface Message {
    success: string
    error: string
}

export const SignIn = ({ isSellerComp }: { isSellerComp?: boolean }) => {

    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<Message>({ success: "", error: "" })
    const [loading, setLoading] = useState<boolean>(false)

    const resendAction = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        setMessage({ success: "", error: "" })

        const role = isSellerComp ? 'seller' : 'user'
        const result = await signInWithMagicLink(email, 'in', role)
        setMessage(result)

        setLoading(false)
    }

    const oauthSignIn = async (provider: Provider) => {
        const role = isSellerComp ? 'seller' : 'user'
        await signInWithOAuth(provider, role)
    }

    return (
        <div className="border bg-back-light dark:bg-back-dark border-brd-light dark:border-brd-dark max-w-xs p-3 py-5 rounded-xl flex items-center justify-center shadow-light-card animate-in zoom-in-0 transition-all duration-300 text-sm">
            <form
                onSubmit={resendAction}
                className="w-full p-3"
            >

                <div className="options w-full mb-6">
                    <div className="text-center font-allertaStencil">
                        {message.success ? "Verify Your Sign-In" : isSellerComp ? "Get started with your Seller Account" : "Welcome Back! Let's Get Started."}
                    </div>
                </div>

                {message.success ?
                    <div>
                        {message.success}
                    </div>
                    :
                    <div className="w-full space-y-4">

                        <div className="creds w-full flex flex-col justify-center items-center">

                            <div className="w-full">
                                <input
                                    value={email}
                                    disabled={loading}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="px-3 py-2 rounded-lg text-xs bg-back-light dark:bg-back-dark w-full h-full border-2 border-brd-light dark:border-brd-dark focus:border-btn-bg dark:focus:border-btn-dark-bg focus:outline-none"
                                    placeholder="Enter your email address"
                                    type="email" id="email-resend" name="email"
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <button
                                disabled={loading}
                                type="submit"
                                className={`w-full py-2.5 bg-btn-bg dark:bg-btn-dark-bg text-btn-txt dark:text-btn-dark-txt rounded-lg ${!loading ? "hover:opacity-70" : ""}  transition duration-300 flex items-center justify-center disabled:bg-btn-bg/50`}
                            >
                                {
                                    loading ? <LoaderSec size="w-5" /> : "Sign in"
                                }
                            </button>
                        </div>

                        {message.error &&
                            <div className={`text-xs text-center py-0 my-0 text-error`}>
                                {message.error}
                            </div>
                        }

                        <div className="w-full text-center">
                            <p className="text-xs">Don't have an account?  {" "}
                                <Link href={'/user/sign-up'} className="hover:text-btn-bg hover:dark:text-btn-dark-bg transition duration-300">Sign up</Link>
                            </p>
                        </div>

                        <div className="text-center opacity-70">Or, log in with</div>

                        <div className="w-full flex flex-row items-center justify-center gap-3 text-xs">
                            <div
                                onClick={() => oauthSignIn('google')}
                                className="flex justify-center items-center gap-1 cursor-pointer">
                                <FcGoogle className="w-5 h-5" />
                                <p>Google</p>
                            </div>

                            <div
                                onClick={() => oauthSignIn('github')}
                                className="flex justify-center items-center gap-1 cursor-pointer">
                                <FaGithub className="w-5 h-5" />
                                <p>Github</p>
                            </div>

                            <div
                                onClick={() => oauthSignIn('facebook')}
                                className="flex justify-center items-center gap-1 cursor-pointer">
                                <FaFacebook className="text-[#1877F2] w-5 h-5" />
                                <p>Facebook</p>
                            </div>

                        </div>
                    </div>
                }
            </form>
        </div>
    )
}