'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CardBox from '@/app/components/shared/CardBox'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tags, Trash2, FolderPlus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createCategoria, deleteCategoria } from '@/app/actions/categorias'

type Categoria = {
  id: string,
  nombre: string,
  created_at: string
}

export default function CategoriasManager({ categorias, isAdmin }: { categorias: Categoria[], isAdmin: boolean }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    const formData = new FormData(e.currentTarget)
    
    const res = await createCategoria(formData)
    
    if (res?.error) setErrorMsg(res.error)
    else {
      setIsOpen(false)
      router.refresh()
    }
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Eliminar esta categoría? Los productos seguirán existiendo pero quedarán sin categoría designada.")) {
        await deleteCategoria(id)
        router.refresh()
    }
  }

  return (
    <div className="flex flex-col gap-8">
        <div className="flex justify-center mt-2 mb-2">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button disabled={!isAdmin} className="bg-black text-white hover:bg-zinc-800 border border-[#FFCA2E]/30 font-bold gap-3 px-8 h-auto py-4 text-lg shadow-lg shadow-yellow-900/20">
                        <FolderPlus size={24} strokeWidth={2.5} />
                        Crear Nueva Categoría
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-xl font-black">
                            <Tags className="text-gray-800" /> Nueva Categoría
                        </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="nombre">Nombre de la Categoría</Label>
                            <Input name="nombre" type="text" required placeholder="Ej. Pomadas, Lociones, Accesorios..." />
                        </div>
                        {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
                        <DialogFooter className="mt-4">
                            <Button type="submit" disabled={loading} className="w-full bg-black text-white hover:bg-zinc-800">
                                {loading ? 'Guardando...' : 'Guardar Categoría'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>

        <CardBox className="p-0 overflow-hidden w-full max-w-full border-none shadow-md mb-8">
            <div className="bg-black/5 p-4 border-b border-gray-100">
                <h3 className="font-bold text-lg flex items-center gap-2 tracking-tight">
                    <Tags size={20} className="text-gray-500" />
                    Categorías de Inventario Registradas
                </h3>
            </div>
            <div className="overflow-x-auto w-full">
                <Table>
                    <TableHeader className="bg-white">
                        <TableRow>
                            <TableHead className="font-bold text-gray-400 uppercase text-xs tracking-wider pl-6">Fecha de Creación</TableHead>
                            <TableHead className="font-bold text-gray-400 uppercase text-xs tracking-wider">Nombre de la Categoría</TableHead>
                            {isAdmin && <TableHead className="text-right"></TableHead>}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categorias.map((c) => (
                            <TableRow key={c.id} className="hover:bg-gray-50/50">
                                <TableCell className="text-gray-500 text-sm pl-6">
                                    {new Date(c.created_at).toLocaleDateString()}
                                </TableCell>
                                <TableCell className="font-bold text-gray-900 text-md">
                                    {c.nombre}
                                </TableCell>
                                {isAdmin && (
                                    <TableCell className="text-right px-6">
                                        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-red-500 hover:bg-red-50" onClick={() => handleDelete(c.id)}>
                                            <Trash2 size={16} />
                                        </Button>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                        {(categorias.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-10 text-gray-500 text-lg">
                                    No se ha creado ninguna categoría.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </CardBox>
    </div>
  )
}
