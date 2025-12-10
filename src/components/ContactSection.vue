<script setup>
import { Phone, Mail, MapPin, Send } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="relative py-24 bg-slate-950 overflow-hidden">
    
    <div class="absolute inset-0 opacity-20 pointer-events-none" 
         style="background-image: linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px); background-size: 40px 40px;">
    </div>
    
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 z-0"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <div class="inline-block px-3 py-1 mb-6 border border-sky-500/30 bg-sky-900/10 text-sky-400 text-xs font-bold uppercase tracking-widest rounded-sm">
            Contacto
          </div>
          <h2 class="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Iniciemos tu <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Próximo Proyecto.
            </span>
          </h2>
          <p class="text-slate-400 mb-10 text-lg font-light leading-relaxed">
            Evaluamos requerimientos técnicos y normativos para entregar una propuesta precisa y eficiente.
          </p>

          <div class="space-y-8">
            <div class="flex items-start gap-5 group cursor-pointer">
              <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300">
                 <Phone class="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Llámanos</p>
                <a href="tel:+56931352832" class="text-xl font-bold text-white hover:text-sky-400 transition-colors">+56 9 3135 2832</a>
              </div>
            </div>

            <div class="flex items-start gap-5 group cursor-pointer">
               <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300">
                <Mail class="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Escríbenos</p>
                <a href="mailto:g.vasquezc@derbau.cl" class="text-xl font-bold text-white hover:text-sky-400 transition-colors">g.vasquezc@derbau.cl</a>
              </div>
            </div>
            
             <div class="flex items-start gap-5 group">
               <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm">
                <MapPin class="w-5 h-5 text-white" />
              </div>
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Oficina</p>
                <p class="text-lg font-bold text-white">Santiago, Región Metropolitana</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-sm backdrop-blur-md shadow-2xl">
          <form class="space-y-6">
            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre</label>
                <input type="text" class="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-600" placeholder="Tu nombre">
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Apellido</label>
                <input type="text" class="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-600" placeholder="Tu apellido">
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Corporativo</label>
              <input type="email" class="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-600" placeholder="nombre@empresa.com">
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Detalle del Proyecto</label>
              <textarea rows="4" class="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-600 resize-none" placeholder="Breve descripción de la obra o servicio requerido..."></textarea>
            </div>

            <button type="button" class="w-full group py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold tracking-wide rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-900/20">
              Enviar Solicitud
              <Send class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <p class="text-center text-xs text-slate-500 mt-4">
              Respondemos en un plazo máximo de 24 horas hábiles.
            </p>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>