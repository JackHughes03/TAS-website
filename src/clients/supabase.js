import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VUE_APP_SUPAURL
const supabaseKey = process.env.VUE_APP_SUPAKEY

export const supabase = createClient(supabaseUrl, supabaseKey)