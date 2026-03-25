'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function addPersonal(formData: FormData) {
  const full_name = formData.get('full_name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = formData.get('role') as string

  // Crear usuario en Auth
  const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name }
  })

  if (authError) {
    return { error: authError.message }
  }

  // El trigger suele crear el profile por defecto como 'barbero', 
  // pero forzaremos la actualización para poner el rol elegido.
  // Es bueno esperar un momentito a que el trigger termine en Supabase, 
  // o hacer update directo si usamos retries.
  const { error: profileError } = await supabaseAdmin
    .from('profiles')
    .update({ role, full_name })
    .eq('id', authData.user.id)

  if (profileError) {
    console.error("Profile error:", profileError)
  }

  revalidatePath('/admin/personal')
  return { success: true }
}

export async function updatePersonal(id: string, formData: FormData) {
  const full_name = formData.get('full_name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = formData.get('role') as string

  // Actualizar Auth Si hay password
  if (password && password.length >= 6) {
    await supabaseAdmin.auth.admin.updateUserById(id, { password, email, user_metadata: { full_name } })
  } else {
    // Solo actualizar metadata si no hay password
    await supabaseAdmin.auth.admin.updateUserById(id, { email, user_metadata: { full_name } })
  }

  // Actualizar Profiles
  const { error } = await supabaseAdmin
    .from('profiles')
    .update({ role, full_name })
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/personal')
  return { success: true }
}

export async function deletePersonal(id: string) {
  const { error } = await supabaseAdmin.auth.admin.deleteUser(id)
  
  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/personal')
  return { success: true }
}
