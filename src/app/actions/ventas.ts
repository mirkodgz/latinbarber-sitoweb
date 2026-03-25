'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function registrarVentaSimple(formData: FormData) {
  const supabase = await createClient()

  const barbero_id = formData.get('barbero_id') as string;
  const producto_id = formData.get('producto_id') as string;
  const cantidad = parseInt(formData.get('cantidad') as string || '1');
  const metodo_pago = formData.get('metodo_pago') as string || 'Efectivo';

  // Obtener detalles del producto
  const { data: prod } = await supabase.from('productos').select('*').eq('id', producto_id).single();
  if(!prod) return { error: "Producto no encontrado." }

  const total = prod.precio_venta * cantidad;

  // Insertar Venta Principal
  const { data: venta, error: vError } = await supabase.from('ventas').insert({
    barbero_id,
    metodo_pago,
    total_venta: total
  }).select('id').single();

  if(vError) return { error: vError.message };

  // Insertar Detalle (Dispara el descuento de stock automaticamente en Supabase)
  const { error: dError } = await supabase.from('ventas_detalles').insert({
    venta_id: venta.id,
    producto_id: prod.id,
    nombre_historico: prod.nombre,
    cantidad: cantidad,
    precio_unitario: prod.precio_venta,
    subtotal: total
  })

  if(dError) return { error: dError.message };

  revalidatePath('/admin/productos');
  return { success: true };
}

export async function deleteVenta(id: string) {
  const supabase = await createClient()
  // Borrar la cabecera borrará el detalle por cascade, pero el stock no se restaura automáticamente con nuestro trigger simple. 
  // Omitimos control de devolución de stock por ahora para mantenerlo ultra simple.
  const { error } = await supabase.from('ventas').delete().eq('id', id)
  if (error) return { error: error.message }
  
  revalidatePath('/admin/productos')
  return { success: true }
}
