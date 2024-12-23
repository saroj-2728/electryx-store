'use server'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import type { Provider } from '@supabase/supabase-js'

export const oauthSignIn = async (provider: Provider) => {

    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: 'http://localhost:3000/auth/callback',
        },
    })

    if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
    }
}

