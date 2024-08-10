import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supabase = serverSupabaseServiceRole(event)

    var response = await supabase
    .from('leaderboard')
    .select('*')
    .gt('points', 4500)

    return response
})