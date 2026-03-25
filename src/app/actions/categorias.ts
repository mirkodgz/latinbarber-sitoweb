'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createCategoria(formData: FormData) {
  const supabase = await createClient()
  const nombre = formData.get('nombre') as string

  if (!nombre) return { error: "El nombre de la categoría es obligatorio" }

  const { error } = await supabase.from('categorias').insert({ nombre })

  if (error) return { error: error.message }

  revalidatePath('/admin/categorias')
  return { success: true }
}

export async function deleteCategoria(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('categorias').delete().eq('id', id)
  if (error) return { error: error.message }
  
  revalidatePath('/admin/categorias')
  // We should also revalidate products just in case it nullified category_ids
  revalidatePath('/admin/productos')
  return { success: true }
}
