import { CalendarDays, Wrench } from "lucide-react";

export default function CalendarioPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 animate-in fade-in duration-500">
      
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-yellow-400 to-black opacity-30 blur-xl"></div>
        <div className="relative bg-white p-6 rounded-full shadow-2xl border border-gray-100">
           <CalendarDays className="h-16 w-16 text-gray-800" strokeWidth={1.5} />
        </div>
      </div>

      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-3">
            <Wrench className="text-[#FFCA2E] h-8 w-8" />
            Work In Progress
        </h1>
        <p className="text-lg text-gray-500 max-w-md mx-auto font-medium">
            El Módulo de Calendario y Citas está recibiendo los toques maestros de ingeniería. Muy pronto podrás gestionar aquí toda la agenda.
        </p>
      </div>

    </div>
  )
}
