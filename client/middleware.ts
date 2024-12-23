import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'


import {
    apiAuthPrefix,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT,
    protectedRoutes
} from '@/routes'

export async function middleware(request: NextRequest) {

    return await updateSession(request)

    // const { nextUrl } = request
    // const isLoggedIn = /* !!req.auth */ true

    // const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    // const isProtectedRoute = protectedRoutes.some(route => nextUrl.pathname.startsWith(route));
    // const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    // if (isApiRoute) {
    //     return
    // }

    // if (isAuthRoute) {
    //     if (isLoggedIn) {
    //         return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    //     }
    //     return
    // }

    // if (!isLoggedIn && isProtectedRoute) {
    //     return Response.redirect(new URL('/user/sign-in', nextUrl))
    // }

    // return
}

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}