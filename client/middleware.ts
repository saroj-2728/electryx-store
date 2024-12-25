import type { NextRequest } from 'next/server'
import {
    apiAuthPrefix,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT,
    protectedRoutes
} from '@/routes'
export { auth as middleware } from "@/auth" 