<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 lg:bg-slate-50 overflow-hidden">
    
    <div class="absolute inset-0 lg:hidden z-0">
      <img 
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
        alt="Fondo Arquitectura" 
        class="w-full h-full object-cover opacity-40"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-blue-900/30"></div>
    </div>

    <div class="hidden lg:block absolute inset-0 z-0 opacity-[0.03]" 
         style="background-image: radial-gradient(#1e3a8a 1px, transparent 1px); background-size: 32px 32px;">
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      
      <div class="text-center lg:text-left">
        <div class="inline-block px-3 py-1 mb-6 border border-sky-500/30 bg-sky-500/10 text-sky-300 lg:border-sky-200 lg:bg-sky-50 lg:text-sky-700 text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
          Ingeniería y Construcción
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold text-white lg:text-slate-900 leading-tight mb-6 drop-shadow-lg lg:drop-shadow-none">
          Construimos con <br class="hidden lg:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300 lg:from-blue-900 lg:to-sky-500">
            Excelencia Técnica.
          </span>
        </h1>
        
        <p class="text-lg text-slate-300 lg:text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light lg:font-normal">
          Especialistas en desarrollo, gestión y ejecución de obras para el sector inmobiliario, corporativo e industrial. Calidad garantizada.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#contact" class="px-8 py-4 bg-sky-600 lg:bg-blue-900 text-white font-bold rounded-sm hover:bg-sky-500 lg:hover:bg-blue-800 transition shadow-xl shadow-sky-900/20 flex items-center justify-center gap-2 group">
            Cotizar Proyecto 
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#services" class="px-8 py-4 bg-transparent border border-white/30 lg:border-slate-200 text-white lg:text-slate-700 font-bold rounded-sm hover:bg-white/10 lg:hover:border-sky-300 lg:hover:text-sky-600 transition shadow-sm backdrop-blur-sm lg:backdrop-blur-none flex items-center justify-center">
            Nuestros Servicios
          </a>
        </div>
      </div>
      
      <div class="relative lg:h-[600px] w-full hidden lg:block">
        <div class="absolute inset-0 bg-blue-900/5 translate-x-4 translate-y-4 rounded-sm"></div>
        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
             alt="Arquitectura Moderna" 
             class="w-full h-full object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
      </div>

    </div>
  </section>
</template>