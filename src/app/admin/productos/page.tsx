import { createClient as createServerClient } from '@/utils/supabase/server'
import { createClient as createSupabaseCore } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import ProductosManager from './ProductosManager'
export const dynamic = 'force-dynamic';

export default async function ProductosPage() {
  const supabase = await createServerClient()

  // Proteger ruta
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  // Core bypass para garantizar lectura administrativa sin bloqueos RLS
  const supabaseAdmin = createSupabaseCore(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // Determinar si es admin evitando el bucle de RLS actual de las BD
  const { data: profile } = await supabaseAdmin.from('profiles').select('role').eq('id', user.id).single()
  const isAdmin = profile?.role === 'admin'

  // Traer inventario con su categoría correspondiente
  const { data: productos } = await supabaseAdmin.from('productos').select('*, categorias(nombre)').order('nombre', { ascending: true })

  // Todos los empleados (para el selector de la venta)
  const { data: barberos } = await supabaseAdmin.from('profiles').select('id, full_name, role').order('created_at', { ascending: true })
  
  // Últimas ventas para la tabla inferior
  const { data: ventas } = await supabaseAdmin
    .from('ventas')
    .select(`
      id,
      total_venta,
      metodo_pago,
      fecha,
      profiles(full_name),
      ventas_detalles(cantidad, nombre_historico, precio_unitario)
    `)
    .order('fecha', { ascending: false })
    .limit(50)

  const { data: categorias } = await supabaseAdmin.from('categorias').select('id, nombre').order('nombre', { ascending: true })

  return <ProductosManager 
            initialProducts={productos as any} 
            isAdmin={isAdmin} 
            barberos={barberos as any || []} 
            ventasHistory={(ventas as any) || []} 
            categorias={categorias as any || []}
         />
}
