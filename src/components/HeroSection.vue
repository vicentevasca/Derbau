<script setup>
import { ArrowRight } from 'lucide-vue-next'
import HeroBackground from './HeroBackground.vue'
</script>

<template>
  <section id="home" class="relative min-h-[100dvh] flex items-center lg:block lg:min-h-0 lg:pt-48 lg:pb-32 bg-slate-900 lg:bg-slate-50 overflow-hidden">
    
    <div class="absolute inset-0 lg:hidden z-0">
      <img 
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
        alt="Fondo Arquitectura" 
        class="w-full h-full object-cover opacity-50"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-slate-950/90"></div>
    </div>

    <div class="hidden lg:block absolute inset-0 z-0">
       <HeroBackground />
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12">
      
      <div class="text-center lg:text-left mt-16 lg:mt-0"> <div class="inline-block px-3 py-1 mb-4 lg:mb-6 border border-sky-500/30 bg-sky-500/10 text-sky-300 lg:border-sky-200 lg:bg-white/80 lg:text-sky-700 text-[10px] lg:text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
          Ingeniería y Construcción
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white lg:text-slate-900 leading-[1.1] mb-4 lg:mb-6 drop-shadow-xl lg:drop-shadow-none">
          Construimos con <br class="hidden lg:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200 lg:from-blue-800 lg:to-sky-500">
            Excelencia Técnica.
          </span>
        </h1>
        
        <p class="text-base sm:text-lg text-slate-200 lg:text-slate-600 mb-8 max-w-sm mx-auto lg:mx-0 leading-relaxed font-light">
          Especialistas en desarrollo, gestión y ejecución de obras para el sector inmobiliario y corporativo.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-4 sm:px-0">
          <a href="#contact" class="w-full sm:w-auto px-8 py-3.5 bg-sky-600 lg:bg-blue-900 text-white font-bold rounded-sm hover:bg-sky-500 transition shadow-lg flex items-center justify-center gap-2">
            Cotizar Ahora
            <ArrowRight class="w-4 h-4" />
          </a>
          
          <a href="#services" class="w-full sm:w-auto px-8 py-3.5 bg-white/10 border border-white/20 lg:border-slate-300 text-white lg:text-slate-700 font-bold rounded-sm hover:bg-white/20 backdrop-blur-md flex items-center justify-center">
            Ver Servicios
          </a>
        </div>
      </div>
      
      <div class="relative lg:h-[600px] w-full hidden lg:block animate-float">
        <div class="absolute inset-0 bg-blue-900/5 translate-x-4 translate-y-4 rounded-sm"></div>
        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
             alt="Arquitectura Moderna" 
             class="w-full h-full object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
      </div>

    </div>
    
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden animate-bounce text-white/50">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
    </div>

  </section>
</template>