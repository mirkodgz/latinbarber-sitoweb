import { createClient as createServerClient } from '@/utils/supabase/server'
export const dynamic = "force-dynamic";
import { createClient as createSupabaseCore } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import CategoriasManager from './CategoriasManager'

export default async function CategoriasPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const supabaseAdmin = createSupabaseCore(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: profile } = await supabaseAdmin.from('profiles').select('role').eq('id', user.id).single()
  const isAdmin = profile?.role === 'admin'

  const { data: categorias } = await supabaseAdmin
    .from('categorias')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300 pt-2">
       <CategoriasManager categorias={categorias || []} isAdmin={isAdmin} />
    </div>
  )
}
