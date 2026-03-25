'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function registrarGasto(formData: FormData) {
  const supabase = await createClient()

  const tipo_gasto = formData.get('tipo_gasto') as string
  const aplicado_a = formData.get('aplicado_a') as string
  const metodo_pago = formData.get('metodo_pago') as string
  const monto = parseFloat(formData.get('monto') as string)

  if (!aplicado_a) return { error: "Debes detallar a qué / quién aplica el gasto." }
  if (isNaN(monto) || monto <= 0) return { error: "El monto debe ser numérico y mayor a 0." }

  const { error } = await supabase.from('gastos').insert({
    tipo_gasto,
    aplicado_a,
    metodo_pago,
    monto
  })

  if (error) return { error: error.message }

  revalidatePath('/admin/gastos')
  return { success: true }
}

export async function deleteGasto(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('gastos').delete().eq('id', id)
  if (error) return { error: error.message }
  
  revalidatePath('/admin/gastos')
  return { success: true }
}
