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
import { PackagePlus, FileEdit, Trash2, Box, ShoppingCart, Banknote, History } from 'lucide-react'
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addProducto, updateProducto, deleteProducto } from '@/app/actions/productos'
import { registrarVentaSimple, deleteVenta } from '@/app/actions/ventas'

type Producto = {
  id: string
  nombre: string
  precio_compra: number
  precio_venta: number
  stock: number
  created_at: string
  categoria_id?: string
  categorias?: { nombre: string }
}

type Barbero = {
  id: string
  full_name: string
  role: string
}

type VentaHistorial = {
  id: string
  total_venta: number
  metodo_pago: string
  fecha: string
  profiles?: { full_name: string }
  ventas_detalles?: { cantidad: number, nombre_historico: string, precio_unitario: number }[]
}

type Categoria = {
  id: string
  nombre: string
}

export default function ProductosManager({ initialProducts, isAdmin, barberos, ventasHistory, categorias }: { 
  initialProducts: Producto[] | null, 
  isAdmin: boolean,
  barberos: Barbero[],
  ventasHistory: VentaHistorial[],
  categorias: Categoria[]
}) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState<Producto | null>(null)
  
  const [isOpenVenta, setIsOpenVenta] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  
  // Nuevo estado para alternar vistas
  const [activeTab, setActiveTab] = useState<'catalogo' | 'ventas'>('catalogo')

  const productList = initialProducts || []

  // ---------- GESTION DE PRODUCTOS ----------
  const handleOpenNew = () => { setIsEditing(null); setErrorMsg(''); setIsOpen(true) }
  const handleOpenEdit = (p: Producto) => { setIsEditing(p); setErrorMsg(''); setIsOpen(true) }

  const handleSubmitProducto = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    const formData = new FormData(e.currentTarget)

    if (isEditing) {
      const res = await updateProducto(isEditing.id, formData)
      if (res?.error) setErrorMsg(res.error)
      else { setIsOpen(false); router.refresh() }
    } else {
      const res = await addProducto(formData)
      if (res?.error) setErrorMsg(res.error)
      else { setIsOpen(false); router.refresh() }
    }
    setLoading(false)
  }

  const handleDeleteProducto = async (id: string) => {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
      await deleteProducto(id)
      router.refresh()
    }
  }

  // ---------- GESTION DE VENTAS SIMPLES ----------
  const handleSubmitVenta = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    const formData = new FormData(e.currentTarget)
    
    const res = await registrarVentaSimple(formData)
    if (res?.error) setErrorMsg(res.error)
    else {
      setIsOpenVenta(false)
      setActiveTab('ventas') // Automáticamente saltamos a ver la venta recién hecha
      router.refresh()
    }
    setLoading(false)
  }

  const handleDeleteVenta = async (id: string) => {
    if (confirm("¿Seguro que quieres borrar este registro de venta del historial?")) {
      await deleteVenta(id)
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col gap-6">
      
      {/* BOTONES PRINCIPALES DE ACCIÓN GLOBALES */}
      <div className="flex flex-row items-center justify-center pt-2 gap-4">
          {isAdmin && (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleOpenNew} className="bg-black text-white hover:bg-zinc-800 font-semibold gap-2 px-6 h-auto py-3 text-md disabled:opacity-50 shadow-md">
                  <PackagePlus size={20} />
                  Agregar Producto
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>{isEditing ? 'Editar Producto' : 'Crear Nuevo Producto'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitProducto} className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="nombre">Nombre del Producto o Servicio</Label>
                    <Input id="nombre" name="nombre" defaultValue={isEditing?.nombre || ''} required placeholder="Ej. Pomada Mate..." />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <Label htmlFor="categoria_id">Categoría</Label>
                    <Select key={isEditing ? isEditing.id : 'new-prod-cat'} name="categoria_id" defaultValue={isEditing?.categoria_id || undefined} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Elige la familia..." />
                      </SelectTrigger>
                      <SelectContent>
                        {categorias.map(c => (
                          <SelectItem key={c.id} value={c.id}>{c.nombre}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-4 w-full flex-col sm:flex-row">
                    <div className="flex flex-col gap-2 w-full">
                      <Label htmlFor="precio_compra">Precio de Compra (€)</Label>
                      <Input id="precio_compra" name="precio_compra" type="number" step="0.01" min="0" defaultValue={isEditing?.precio_compra || ''} required />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <Label htmlFor="precio_venta">Precio de Venta (€)</Label>
                      <Input id="precio_venta" name="precio_venta" type="number" step="0.01" min="0" defaultValue={isEditing?.precio_venta || ''} required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="stock">Cantidad en Stock (Inventario)</Label>
                    <Input id="stock" name="stock" type="number" step="1" min="0" defaultValue={isEditing?.stock ?? ''} required />
                  </div>
                  {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
                  <DialogFooter className="mt-4">
                    <Button type="submit" disabled={loading} className="w-full bg-black text-white hover:bg-zinc-800">
                      {loading ? 'Guardando...' : 'Guardar Producto'}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}

          {/* BOTON ESTRELLA: GENERAR VENTA */}
          <Dialog open={isOpenVenta} onOpenChange={setIsOpenVenta}>
            <DialogTrigger asChild>
              <Button className="bg-[#111] text-white hover:bg-black border border-white/20 font-bold gap-2 px-6 h-auto py-3 text-md shadow-lg shadow-black/20">
                <ShoppingCart size={20} strokeWidth={2.5} />
                Generar Venta Rápida
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-amber-500/20">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-xl font-black">
                   <Banknote className="text-amber-500" />
                   Registrar Nueva Venta
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmitVenta} className="flex flex-col gap-4 mt-6">
                
                <div className="flex flex-col gap-2">
                  <Label htmlFor="barbero_id" className="text-gray-600">Asignar Venta A:</Label>
                  <Select name="barbero_id" required>
                    <SelectTrigger className="font-semibold">
                      <SelectValue placeholder="Selecciona quién hizo el trabajo" />
                    </SelectTrigger>
                    <SelectContent>
                      {barberos.map(b => (
                        <SelectItem key={b.id} value={b.id}>
                          {b.full_name || 'Sin Nombre'} {b.role === 'admin' ? '(Admin)' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="producto_id" className="text-gray-600">Servicio o Producto Brindado:</Label>
                  <Select name="producto_id" required>
                    <SelectTrigger className="font-bold text-gray-900">
                      <SelectValue placeholder="Elige un artículo del catálogo" />
                    </SelectTrigger>
                    <SelectContent>
                      {productList.map(p => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.nombre} — {Number(p.precio_venta).toFixed(2)} €
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col gap-2 w-1/3">
                    <Label htmlFor="cantidad" className="text-gray-600">Cantidad</Label>
                    <Input id="cantidad" name="cantidad" type="number" min="1" defaultValue="1" required className="font-bold text-lg text-center" />
                  </div>
                  <div className="flex flex-col gap-2 w-2/3">
                    <Label htmlFor="metodo_pago" className="text-gray-600">Método de Pago</Label>
                    <Select name="metodo_pago" defaultValue="Efectivo" required>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Efectivo">Efectivo 💵</SelectItem>
                        <SelectItem value="Tarjeta/POS">Tarjeta / POS 💳</SelectItem>
                        <SelectItem value="Bizum/Banco">Bizum / Banco 📱</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {errorMsg && <p className="text-red-500 text-sm font-medium p-2 bg-red-50 rounded-md">{errorMsg}</p>}
                
                <p className="text-xs text-gray-400 text-center italic mt-2">
                  *Al guardar, el precio se sumará al historial y el stock bajará automáticamente.
                </p>

                <DialogFooter className="mt-2">
                  <Button type="submit" disabled={loading} className="w-full bg-black text-white hover:bg-zinc-800 font-bold text-lg h-12 shadow-md">
                    {loading ? 'Procesando...' : 'Confirmar y Guardar Venta'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
      </div>

      {/* TABS DE NAVEGACION (Para alternar vistas y no saturar la pantalla) */}
      <div className="flex gap-8 border-b border-gray-200 mt-2 px-4 justify-center">
        <button 
          onClick={() => setActiveTab('catalogo')}
          className={`pb-3 px-2 font-bold text-lg transition-colors border-b-4 flex items-center gap-2 ${activeTab === 'catalogo' ? 'border-primary text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
          <Box size={20} className={activeTab === 'catalogo' ? 'text-primary' : ''} />
          Catálogo e Inventario
        </button>
        <button 
          onClick={() => setActiveTab('ventas')}
          className={`pb-3 px-2 font-bold text-lg transition-colors border-b-4 flex items-center gap-2 ${activeTab === 'ventas' ? 'border-amber-500 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
          <History size={20} className={activeTab === 'ventas' ? 'text-amber-500' : ''} />
          Historial de Ventas
        </button>
      </div>

      {/* SECCION 1: PRODUCTOS (Renderizado condicional) */}
      {activeTab === 'catalogo' && (
        <CardBox className="p-0 overflow-hidden w-full max-w-full border-none shadow-md mb-8 animate-in fade-in slide-in-from-left-4 duration-300">
          <div className="overflow-x-auto w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Producto / Servicio</TableHead>
                  <TableHead>Categoría</TableHead>
                  {isAdmin && <TableHead className="text-center">Costo Unit.</TableHead>}
                  <TableHead className="text-center">Precio de Venta</TableHead>
                  <TableHead className="text-center">Stock Disponible</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productList.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-bold text-gray-800">{p.nombre}</TableCell>
                    <TableCell className="text-gray-500 font-medium">{p.categorias?.nombre || 'General'}</TableCell>
                    {isAdmin && <TableCell className="text-center text-gray-400 font-medium">{Number(p.precio_compra).toFixed(2)} €</TableCell>}
                    <TableCell className="text-center text-black font-bold">{Number(p.precio_venta).toFixed(2)} €</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={p.stock > 10 ? 'default' : (p.stock > 0 ? 'secondary' : 'destructive')} className={p.stock > 10 ? 'bg-green-100 text-green-800 border-none px-3' : (p.stock > 0 ? 'bg-amber-100 text-amber-800 border-none px-3' : 'bg-red-100 text-red-800 border-none px-3')}>
                        {p.stock > 0 ? `${p.stock} Uds.` : 'Agotado'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {isAdmin ? (
                        <>
                          <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => handleOpenEdit(p)}>
                            <FileEdit size={18} />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDeleteProducto(p.id)}>
                            <Trash2 size={18} />
                          </Button>
                        </>
                      ) : (
                        <span className="text-gray-400 text-xs">-</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {(productList.length === 0) && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                      Tu catálogo de inventario está vacío.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardBox>
      )}

      {/* SECCION 2: HISTORIAL DE VENTAS (Renderizado condicional) */}
      {activeTab === 'ventas' && (
        <CardBox className="p-0 overflow-hidden w-full max-w-full border-none shadow-md animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="overflow-x-auto w-full">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="font-bold text-gray-600 pl-6">Fecha y Hora</TableHead>
                  <TableHead className="font-bold text-gray-600">Vendedor</TableHead>
                  <TableHead className="font-bold text-gray-600">Producto / Servicio</TableHead>
                  <TableHead className="font-bold text-gray-600 text-center">Cantidad</TableHead>
                  <TableHead className="font-bold text-gray-600 text-center">P. Unitario</TableHead>
                  <TableHead className="font-bold text-gray-600 text-center">Método</TableHead>
                  <TableHead className="font-bold text-gray-600 text-right">Monto Total</TableHead>
                  {isAdmin && <TableHead className="text-right font-bold text-gray-600"></TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {ventasHistory.map((v) => {
                  const firstItem = v.ventas_detalles?.[0]; // Al ser simplificado, solo hay 1 item por venta
                  return (
                    <TableRow key={v.id} className="hover:bg-gray-50/50">
                      <TableCell className="text-gray-600 text-sm pl-6 whitespace-nowrap">
                        {new Date(v.fecha).toLocaleString()}
                      </TableCell>
                      <TableCell className="font-semibold text-gray-800 whitespace-nowrap">
                        {v.profiles?.full_name || 'Desconocido'}
                      </TableCell>
                      <TableCell className="font-bold text-gray-900 whitespace-nowrap">
                        {firstItem ? firstItem.nombre_historico : <span className="text-gray-400 italic">Sin Detalle</span>}
                      </TableCell>
                      <TableCell className="text-center font-medium text-gray-700">
                        {firstItem ? firstItem.cantidad : '-'}
                      </TableCell>
                      <TableCell className="text-center font-medium text-gray-500 whitespace-nowrap">
                        {firstItem ? `${Number(firstItem.precio_unitario).toFixed(2)} €` : '-'}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="border-gray-200 text-gray-600 font-medium bg-white shadow-sm whitespace-nowrap">
                          {v.metodo_pago}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-black text-gray-900 text-md whitespace-nowrap">
                        {Number(v.total_venta).toFixed(2)} €
                      </TableCell>
                      {isAdmin && (
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-600 hover:bg-red-50" onClick={() => handleDeleteVenta(v.id)}>
                            <Trash2 size={16} />
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  )
                })}
                {(ventasHistory.length === 0) && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-gray-500 text-lg">
                      No has registrado ventas todavía en tu negocio. 
                      <br/><span className="text-sm font-normal">Haz clic en "Generar Venta Rápida" arriba para empezar a facturar.</span>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardBox>
      )}
    </div>
  )
}
