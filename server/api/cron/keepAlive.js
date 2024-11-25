import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supabase = serverSupabaseServiceRole(event)

    var response = await supabase
    .from('newsletter_subscriptions')
    .select('*')
    .limit(10)

    return response
})