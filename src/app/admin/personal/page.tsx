import { createClient as createServerClient } from '@/utils/supabase/server'
import { createClient as createSupabaseCore } from '@supabase/supabase-js'
import PersonalManager from './PersonalManager'
export const dynamic = 'force-dynamic';

export default async function PersonalPage() {
  const supabase = await createServerClient()

  const supabaseAdmin = createSupabaseCore(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: personalProfiles } = await supabaseAdmin.from('profiles').select('*').order('created_at', { ascending: false })
  const { data: authData } = await supabaseAdmin.auth.admin.listUsers()

  const personal = personalProfiles?.map(p => {
    const userAuth = authData?.users.find(u => u.id === p.id)
    return { ...p, email: userAuth?.email || '' }
  }) || []

  return <PersonalManager initialPersonal={personal} />
}
