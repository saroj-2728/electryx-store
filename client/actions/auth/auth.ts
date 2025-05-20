'use server'
import { cookies } from "next/headers"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import type { Message } from "@/components/Auth/Signin"
import { prisma } from "@/prisma"

export type Provider = 'facebook' | 'github' | 'google'

export type UserRole = 'user' | 'seller'

type Action = 'in' | 'up'

type oauthFunc = (provider: Provider, role: UserRole) => Promise<void>;

type magicLinkFunc = (email: string, action: Action, role?: UserRole) => Promise<Message>;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const signInWithMagicLink: magicLinkFunc = async (email: string, action: Action, role: UserRole = 'user') => {

    if (!emailRegex.test(email)) {
        return {
            error: "Please enter a valid email address!",
            success: ""
        }
    };

    try {

        await prisma.pendingRole.delete({
            where: {
                email
            }
        });

        await prisma.pendingRole.create({
            data: {
                email,
                role,
                createdAt: new Date()
            }
        });

        const result = await signIn("resend", {
            email,
            redirect: false,
            redirectTo: `/`,
        })

        const response = await fetch(result)

        return response?.ok
            ? { success: `Check your email for the sign-${action} link!`, error: "" }
            : { error: `Sign-${action} failed. Please try again.`, success: "" }
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

    const cookieStore = await cookies()
    cookieStore.set('authRole', role as UserRole, {
        maxAge: 24 * 60 * 60,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
    })

    await signIn(provider, {
        redirectTo: '/',
    })
}