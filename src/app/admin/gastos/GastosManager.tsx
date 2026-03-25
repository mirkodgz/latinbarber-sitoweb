'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CardBox from '@/app/components/shared/CardBox'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Wallet, Trash2, ReceiptText, Landmark } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { registrarGasto, deleteGasto } from '@/app/actions/gastos'

type Barbero = { id: string, full_name: string, role: string }
type Producto = { id: string, nombre: string }
type Gasto = {
  id: string,
  tipo_gasto: string,
  aplicado_a: string,
  metodo_pago: string,
  monto: number,
  fecha: string,
  profiles?: { full_name: string } // Registrado_por (Auditoría)
}

export default function GastosManager({ gastos, barberos, productos, isAdmin }: {
  gastos: Gasto[], barberos: Barbero[], productos: Producto[], isAdmin: boolean
}) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Controla qué lista se despliega al lado en base a la categoría seleccionada
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Pago Personal')

  const listaServicios = ['Alquiler Local', 'Luz / Servicios Eléctricos', 'Agua / Saneamiento', 'Internet y Telefonía', 'Gasolina / Transporte', 'Mantenimiento y Arreglos', 'Licencias y Gestoría']

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    const formData = new FormData(e.currentTarget)
    
    // Ajuste dinámico de los nombres si un selector no entra en el formData automáticamente
    const res = await registrarGasto(formData)
    
    if (res?.error) setErrorMsg(res.error)
    else {
      setIsOpen(false)
      setTipoSeleccionado('Pago Personal')
      router.refresh()
    }
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de anular este gasto de la contabilidad? Esta acción es irreversible y altera el flujo financiero.")) {
        await deleteGasto(id)
        router.refresh()
    }
  }

  return (
    <div className="flex flex-col gap-8">
        
        <div className="flex justify-center mt-2 mb-2">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button disabled={!isAdmin} className="bg-black text-white hover:bg-zinc-800 border border-[#FFCA2E]/30 font-bold gap-3 px-8 h-auto py-4 text-lg shadow-lg shadow-yellow-900/20">
                        <Wallet size={24} strokeWidth={2.5} />
                        Registrar Gasto o Pago
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-xl font-black">
                            <ReceiptText className="text-gray-800" /> Nuevo Registro de Gasto
                        </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
                        
                        <div className="flex gap-4 w-full flex-col sm:flex-row">
                            <div className="flex flex-col gap-2 w-full">
                                <Label htmlFor="tipo_gasto">Categoría de Gasto</Label>
                                <Select name="tipo_gasto" value={tipoSeleccionado} onValueChange={(val) => setTipoSeleccionado(val)} required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Tipo..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Pago Personal">Pago al Personal</SelectItem>
                                        <SelectItem value="Compra Productos">Compra de Productos</SelectItem>
                                        <SelectItem value="Servicios Básicos">Servicios Básicos</SelectItem>
                                        <SelectItem value="Otros. Varios">Otros / Gastos Menores</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <Label htmlFor="aplicado_a">Aplicado o Destinado A</Label>

                                {tipoSeleccionado === 'Pago Personal' && (
                                    <Select name="aplicado_a" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Elige un Barbero" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {barberos.map(b => (
                                                <SelectItem key={b.id} value={`Salario/Pago de: ${b.full_name}`}>
                                                    {b.full_name} {b.role === 'admin' ? '(Admin)' : ''}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}

                                {tipoSeleccionado === 'Compra Productos' && (
                                    <Select name="aplicado_a" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Elige el Insumo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {productos.map(p => (
                                                <SelectItem key={p.id} value={`Reposición Inventario: ${p.nombre}`}>
                                                    {p.nombre}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}

                                {tipoSeleccionado === 'Servicios Básicos' && (
                                    <Select name="aplicado_a" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Elige el Servicio" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {listaServicios.map((s, idx) => (
                                                <SelectItem key={idx} value={`Factura: ${s}`}>
                                                    {s}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}

                                {tipoSeleccionado === 'Otros. Varios' && (
                                    <Input 
                                        name="aplicado_a" 
                                        type="text" 
                                        required 
                                        placeholder="Describe el gasto..." 
                                    />
                                )}
                            </div>
                        </div>

                        <div className="flex gap-4 w-full flex-col sm:flex-row">
                            <div className="flex flex-col gap-2 w-full">
                                <Label htmlFor="metodo_pago">Desde Dónde se Pagó</Label>
                                <Select name="metodo_pago" defaultValue="Efectivo" required>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Efectivo">Caja Efectivo</SelectItem>
                                        <SelectItem value="Banco / Transferencia">Banco / TRF</SelectItem>
                                        <SelectItem value="Tarjeta (POS)">Tarjeta (POS)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <Label htmlFor="monto">Monto Total a Pagar (€)</Label>
                                <Input id="monto" name="monto" type="number" step="0.01" min="0.01" required placeholder="0.00" />
                            </div>
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

        {/* TABLA HISTÓRICA */}
        <CardBox className="p-0 overflow-hidden w-full max-w-full border-none shadow-md">
            <div className="bg-black/5 p-4 border-b border-gray-100">
                <h3 className="font-bold text-lg flex items-center gap-2 tracking-tight">
                    <Landmark size={20} className="text-gray-500" />
                    Historial Contable de Egresos
                </h3>
            </div>
            <div className="overflow-x-auto w-full">
                <Table>
                    <TableHeader className="bg-white">
                        <TableRow>
                            <TableHead className="font-bold text-gray-400 uppercase text-xs tracking-wider pl-6">Fecha y Hora</TableHead>
                            <TableHead className="font-bold text-gray-400 uppercase text-xs tracking-wider">Categoría</TableHead>
                            <TableHead className="font-bold text-gray-400 uppercase text-xs tracking-wider">Concepto (Aplica A)</TableHead>
                            <TableHead className="font-bold text-gray-400 uppercase text-xs tracking-wider text-center">Fondo Extraído De</TableHead>
                            <TableHead className="font-bold text-gray-400 uppercase text-xs tracking-wider text-center">Autorizado Por</TableHead>
                            <TableHead className="font-bold text-gray-400 uppercase text-xs tracking-wider text-right">Monto (€)</TableHead>
                            {isAdmin && <TableHead className="text-right"></TableHead>}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {gastos.map((g) => (
                            <TableRow key={g.id} className="hover:bg-gray-50/50">
                                <TableCell className="text-gray-500 text-sm pl-6">
                                    {new Date(g.fecha).toLocaleString()}
                                </TableCell>
                                <TableCell className="font-semibold text-gray-800">
                                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-bold">
                                        {g.tipo_gasto}
                                    </Badge>
                                </TableCell>
                                <TableCell className="font-bold text-gray-900 border-l border-gray-100 ml-2">
                                    {g.aplicado_a}
                                </TableCell>
                                <TableCell className="text-center font-medium text-gray-600">
                                    {g.metodo_pago}
                                </TableCell>
                                <TableCell className="text-center font-medium text-gray-400 text-xs">
                                    {g.profiles?.full_name || 'Admin'}
                                </TableCell>
                                <TableCell className="text-right font-black text-red-500 text-md tracking-tight">
                                    - {Number(g.monto).toFixed(2)} €
                                </TableCell>
                                {isAdmin && (
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-red-500 hover:bg-red-50" onClick={() => handleDelete(g.id)}>
                                            <Trash2 size={16} />
                                        </Button>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                        {(gastos.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-10 text-gray-500 text-lg">
                                    No se han registrado gastos. Las arcas están intactas.
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
