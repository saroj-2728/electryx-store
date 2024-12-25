'use server'
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import type { Message } from "@/components/Auth/Signin"

export type Provider = 'facebook' | 'github' | 'google'

export type UserRole = 'user' | 'seller'

type Action = 'in' | 'up'

type oauthFunc = (provider: Provider, role: UserRole) => Promise<void>;

type magicLinkFunc = (email: string, action: Action, role?: UserRole) => Promise<Message>;

declare global {
    var authRole: UserRole | undefined
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const signInWithMagicLink: magicLinkFunc = async (email: string, action: Action, role?: UserRole) => {

    if (!emailRegex.test(email)) {
        return {
            error: "Please enter a valid email address!",
            success: ""
        }
    };

    globalThis.authRole = "seller"

    try {
        const result = await signIn("resend", {
            email,
            redirect: false,
            redirectTo: `/`
        })

        const response = await fetch(result)

        if (response?.ok) {
            return {
                success: `Check your email for the sign-${action} link!`,
                error: ""
            }
        }
        else {
            return {
                error: `Sign-${action}  failed. Please try again.`,
                success: ""
            }
        }
    }
    catch (error) {
        if (error instanceof AuthError) {
            return {
                error: "An unexpected error occurred. Please try again.",
                success: ""
            };
        }
        throw error;
    }
}


export const signInWithOAuth: oauthFunc = async (provider: Provider, role: UserRole) => {
    globalThis.authRole = role

    await signIn(provider, {
        redirectTo: '/',
    })
}