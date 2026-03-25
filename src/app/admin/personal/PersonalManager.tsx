'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CardBox from '@/app/components/shared/CardBox'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { UserPlus, FileEdit, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { addPersonal, updatePersonal, deletePersonal } from '@/app/actions/personal'

type Profile = {
  id: string
  full_name: string | null
  role: string
  email: string
  created_at: string
}

export default function PersonalManager({ initialPersonal }: { initialPersonal: Profile[] | null }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const personalList = initialPersonal || []

  const handleOpenNew = () => {
    setIsEditing(null)
    setErrorMsg('')
    setIsOpen(true)
  }

  const handleOpenEdit = (p: Profile) => {
    setIsEditing(p)
    setErrorMsg('')
    setIsOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)

    if (isEditing) {
      const res = await updatePersonal(isEditing.id, formData)
      if (res?.error) setErrorMsg(res.error)
      else {
        setIsOpen(false)
        router.refresh()
      }
    } else {
      const res = await addPersonal(formData)
      if (res?.error) setErrorMsg(res.error)
      else {
        setIsOpen(false)
        router.refresh()
      }
    }
    
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario? Esa acción no se puede deshacer.")) {
      await deletePersonal(id)
      router.refresh()
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8 w-full gap-4 pt-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenNew} className="bg-black text-white hover:bg-zinc-800 font-semibold gap-2 px-8 py-2 h-auto text-md mx-auto disabled:opacity-50">
              <UserPlus size={20} />
              Agregar Personal
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{isEditing ? 'Editar Personal' : 'Nuevo Integrante'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="full_name">Nombre Completo</Label>
                <Input id="full_name" name="full_name" defaultValue={isEditing?.full_name || ''} required placeholder="Ej. Juan Pérez" />
              </div>
              
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" name="email" type="email" defaultValue={isEditing?.email || ''} required placeholder="correo@ejemplo.com" />
                {isEditing && <span className="text-xs text-gray-500">Debe re-escribir el correo y contraseña (o dejar contraseña vacía).</span>}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" name="password" type="password" required={!isEditing} placeholder={isEditing ? "(Dejar vacío para no cambiar)" : "Mínimo 6 caracteres"} />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="role">Rol</Label>
                <Select name="role" defaultValue={isEditing?.role || 'barbero'}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="barbero">Barbero</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

              <DialogFooter className="mt-4">
                <Button type="submit" disabled={loading} className="w-full bg-black text-white hover:bg-zinc-800">
                  {loading ? 'Guardando...' : 'Guardar Cambios'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <CardBox className="p-0 overflow-hidden w-full max-w-full border-none shadow-md">
        <div className="overflow-x-auto w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre Completo</TableHead>
                <TableHead>Correo Electrónico</TableHead>
                <TableHead>Rol en el Sistema</TableHead>
                <TableHead>Fecha de Ingreso</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {personalList.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-bold text-gray-800">{p.full_name || 'Sin Asignar'}</TableCell>
                  <TableCell className="text-gray-500">{p.email}</TableCell>
                  <TableCell>
                    <Badge variant={p.role === 'admin' ? 'default' : 'secondary'} className={p.role === 'admin' ? 'bg-black text-white border-none shadow-sm uppercase tracking-wide text-xs px-3 py-1' : 'bg-amber-100 text-amber-800 border-none shadow-sm uppercase tracking-wide text-xs px-3 py-1 font-bold'}>
                      {p.role === 'admin' ? 'Admin' : 'Barbero'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(p.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => handleOpenEdit(p)}>
                      <FileEdit size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(p.id)}>
                      <Trash2 size={18} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {(personalList.length === 0) && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                    No hay personal registrado aún.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardBox>
    </>
  )
}
