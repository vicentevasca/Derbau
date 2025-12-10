<script setup>
import { Phone, Mail, MapPin } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="bg-blue-950 text-white py-24 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 class="text-3xl font-bold mb-6">Hablemos de tu proyecto</h2>
          <p class="text-blue-200 mb-12 text-lg font-light">
            Estamos listos para llevar tu visión a la realidad con estándares de ingeniería superiores.
          </p>

          <div class="space-y-8">
            <div class="flex items-start gap-4">
              <div class="mt-1 bg-white/10 p-2 rounded">
                 <Phone class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p class="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Teléfono</p>
                <a href="tel:+56931352832" class="text-xl font-semibold hover:text-sky-400 transition">+56 9 3135 2832</a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="mt-1 bg-white/10 p-2 rounded">
                <Mail class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p class="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:g.vasquezc@derbau.cl" class="text-xl font-semibold hover:text-sky-400 transition">g.vasquezc@derbau.cl</a>
              </div>
            </div>
            
             <div class="flex items-start gap-4">
              <div class="mt-1 bg-white/10 p-2 rounded">
                <MapPin class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p class="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Ubicación</p>
                <p class="text-lg">Santiago, Chile</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-sm shadow-2xl">
          <form class="space-y-5">
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
              <input type="text" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-900 focus:ring-0 outline-none transition text-slate-900 placeholder:text-slate-400" placeholder="Ej. Juan Pérez">
            </div>
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Correo Electrónico</label>
              <input type="email" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-900 focus:ring-0 outline-none transition text-slate-900" placeholder="juan@empresa.com">
            </div>
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
              <textarea rows="4" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-900 focus:ring-0 outline-none transition text-slate-900" placeholder="Detalles del proyecto..."></textarea>
            </div>
            <button type="button" class="w-full py-4 bg-blue-900 text-white font-bold hover:bg-sky-600 transition-colors shadow-lg">
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>