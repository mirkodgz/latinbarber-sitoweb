'use client'

import FullLogo from '@/app/admin/layout/shared/logo/FullLogo'
import CardBox from '../shared/CardBox'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <>
      <div className='h-screen w-full flex justify-center items-center bg-lightprimary'>
        <div className='w-full max-w-[400px] px-4'>
          <CardBox>
            <div className='flex justify-center mb-4'>
              <FullLogo />
            </div>
            <p className='text-sm text-charcoal text-center mb-6'>
              Panel de Acceso Interno
            </p>
            
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='email' className='font-medium'>
                    Correo Electrónico
                  </Label>
                </div>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Ingresa tu correo'
                  required
                />
              </div>
              
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='password' className='font-medium'>
                    Contraseña
                  </Label>
                </div>
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Ingresa tu contraseña'
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-md">
                  Credenciales incorrectas: Verifica tu usuario o contraseña.
                </div>
              )}

              <div className='flex flex-wrap gap-6 items-center justify-between mt-2'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='remember' defaultChecked />
                  <Label className='text-link font-normal text-sm' htmlFor='remember'>
                    Recordar sesión
                  </Label>
                </div>
              </div>
              
              <Button type="submit" className='w-full mt-4 bg-black text-primary hover:bg-black/90 font-semibold text-md' disabled={loading}>
                {loading ? 'Iniciando sesión...' : 'Entrar al Sistema'}
              </Button>
            </form>
          </CardBox>
        </div>
      </div>
    </>
  )
}
