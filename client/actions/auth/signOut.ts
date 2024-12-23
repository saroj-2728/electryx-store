'use server'

import { createClient } from '@/utils/supabase/server'

export const signOut = async () => {

    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()
}