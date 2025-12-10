<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

const projects = [
  {
    category: 'Corporativo',
    title: 'Oficinas Centrales Las Condes',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
    size: 'col-span-1 md:col-span-2 row-span-2' // Grande
  },
  {
    category: 'Industrial',
    title: 'Centro de Distribución Norte',
    image: 'https://images.unsplash.com/photo-1581094794329-cdac82a6cc88?q=80&w=2100&auto=format&fit=crop',
    size: 'col-span-1 row-span-1'
  },
  {
    category: 'Residencial',
    title: 'Condominio Alto Valle',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    size: 'col-span-1 row-span-1'
  },
  {
    category: 'Ingeniería',
    title: 'Refuerzo Estructural Puente',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    size: 'col-span-1 md:col-span-2 row-span-1' // Ancho
  }
]
</script>

<template>
  <section id="projects" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex justify-between items-end">
      <div>
        <h2 class="text-3xl font-bold text-slate-900">Proyectos Destacados</h2>
        <p class="text-slate-500 mt-2">Una muestra de nuestra precisión técnica.</p>
      </div>
      <a href="#contact" class="hidden md:flex items-center gap-2 text-blue-900 font-bold hover:underline">
        Ver Portafolio Completo <ArrowUpRight class="w-4 h-4" />
      </a>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        <div v-for="(project, idx) in projects" :key="idx" 
             :class="[project.size, 'group relative overflow-hidden rounded-sm cursor-pointer']">
          
          <img :src="project.image" :alt="project.title" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span class="text-sky-400 text-xs font-bold uppercase tracking-widest mb-1">{{ project.category }}</span>
            <h3 class="text-white text-xl font-bold">{{ project.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>