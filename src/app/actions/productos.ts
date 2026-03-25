'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addProducto(formData: FormData) {
  const supabase = await createClient()
  const nombre = formData.get('nombre') as string
  const precio_compra = parseFloat(formData.get('precio_compra') as string)
  const precio_venta = parseFloat(formData.get('precio_venta') as string)
  const stock = parseInt(formData.get('stock') as string)
  const categoria_id = formData.get('categoria_id') as string

  if (!categoria_id) return { error: "Debes seleccionar una categoría" }

  const { error } = await supabase.from('productos').insert({
    nombre,
    precio_compra,
    precio_venta,
    stock,
    categoria_id
  })

  if (error) return { error: error.message }

  revalidatePath('/admin/productos')
  return { success: true }
}

export async function updateProducto(id: string, formData: FormData) {
  const supabase = await createClient()
  const nombre = formData.get('nombre') as string
  const precio_compra = parseFloat(formData.get('precio_compra') as string)
  const precio_venta = parseFloat(formData.get('precio_venta') as string)
  const stock = parseInt(formData.get('stock') as string)
  const categoria_id = formData.get('categoria_id') as string

  const { error } = await supabase
    .from('productos')
    .update({ nombre, precio_compra, precio_venta, stock, categoria_id })
    .eq('id', id)

  if (error) return { error: error.message }

  revalidatePath('/admin/productos')
  return { success: true }
}

export async function deleteProducto(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('productos').delete().eq('id', id)
  
  if (error) return { error: error.message }

  revalidatePath('/admin/productos')
  return { success: true }
}
