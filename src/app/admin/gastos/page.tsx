import { createClient as createServerClient } from '@/utils/supabase/server'
import { createClient as createSupabaseCore } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import GastosManager from './GastosManager'
export const dynamic = 'force-dynamic';

export default async function GastosPage() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const supabaseAdmin = createSupabaseCore(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: profile } = await supabaseAdmin.from('profiles').select('role').eq('id', user.id).single()
  const isAdmin = profile?.role === 'admin'

  // Para poblar los desplegables inteligentemente
  const { data: barberos } = await supabaseAdmin.from('profiles').select('id, full_name, role').order('created_at', { ascending: true })
  const { data: productos } = await supabaseAdmin.from('productos').select('id, nombre').order('nombre', { ascending: true })
  
  // Extraemos la contabilidad
  const { data: gastos } = await supabaseAdmin
    .from('gastos')
    .select(`
      id,
      tipo_gasto,
      aplicado_a,
      metodo_pago,
      monto,
      fecha,
      profiles(full_name)
    `)
    .order('fecha', { ascending: false })
    .limit(100)

  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300 pt-2">
       <GastosManager 
          gastos={(gastos as any) || []} 
          barberos={barberos || []} 
          productos={productos || []} 
          isAdmin={isAdmin}
       />
    </div>
  )
}
