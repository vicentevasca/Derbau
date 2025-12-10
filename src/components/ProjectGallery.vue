<script setup>
import { ref, computed } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

const activeFilter = ref('Todos')

const projects = [
  {
    category: 'Corporativo',
    title: 'Torre Costanera Sur',
    location: 'Las Condes',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    size: 'lg:col-span-2 lg:row-span-2' // Proyecto destacado grande
  },
  {
    category: 'Industrial',
    title: 'Centro Logístico Norte',
    location: 'Quilicura',
    image: 'https://images.unsplash.com/photo-1581094794329-cdac82a6cc88?q=80&w=2100&auto=format&fit=crop',
    size: 'lg:col-span-1 lg:row-span-1'
  },
  {
    category: 'Residencial',
    title: 'Condominio Los Robles',
    location: 'Chicureo',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    size: 'lg:col-span-1 lg:row-span-1'
  },
  {
    category: 'Ingeniería',
    title: 'Refuerzo Estructural Puente',
    location: 'Ruta 5 Sur',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    size: 'lg:col-span-2 lg:row-span-1' // Proyecto ancho
  },
  {
    category: 'Corporativo',
    title: 'Oficinas Derbau',
    location: 'Providencia',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
    size: 'lg:col-span-1 lg:row-span-1'
  }
]

// Lógica de filtrado
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') return projects
  return projects.filter(p => p.category === activeFilter.value)
})

const categories = ['Todos', 'Corporativo', 'Industrial', 'Residencial', 'Ingeniería']
</script>

<template>
  <section id="projects" class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div class="max-w-xl">
          <span class="text-sky-500 font-bold tracking-widest uppercase text-xs">Portafolio</span>
          <h2 class="text-3xl lg:text-4xl font-black text-slate-900 mt-2">Nuestra Huella Constructiva</h2>
          <p class="text-slate-500 mt-4 leading-relaxed">
            Seleccionamos proyectos que desafían lo convencional y demuestran nuestra capacidad técnica.
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeFilter = cat"
            class="px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border"
            :class="activeFilter === cat 
              ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105' 
              : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-sky-300 hover:text-sky-600'"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <TransitionGroup 
        name="gallery" 
        tag="div" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]"
      >
        <div 
          v-for="(project, idx) in filteredProjects" 
          :key="project.title" 
          :class="[
            project.size, 
            'group relative rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500'
          ]"
        >
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-80 lg:opacity-60 transition-opacity duration-500 group-hover:opacity-90"></div>

          <div class="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            
            <div class="flex items-center justify-between mb-2">
              <span class="inline-block px-2 py-1 bg-sky-500/20 border border-sky-500/30 text-sky-200 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm rounded-sm">
                {{ project.category }}
              </span>
              <div class="bg-white text-slate-900 rounded-full p-1.5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
                <ArrowUpRight class="w-4 h-4" />
              </div>
            </div>

            <h3 class="text-xl font-bold text-white mb-1 leading-tight">{{ project.title }}</h3>
            <p class="text-sm text-slate-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span class="w-1 h-1 bg-sky-500 rounded-full"></span> {{ project.location }}
            </p>
          </div>
        </div>
      </TransitionGroup>

      <div class="mt-12 text-center">
        <a href="#contact" class="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-200 hover:border-sky-500 transition-colors pb-1">
          Ver Catálogo Completo
          <ArrowUpRight class="w-4 h-4" />
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Animaciones para el filtrado (Vue TransitionGroup) */
.gallery-move, /* Aplica a los elementos que cambian de posición */
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s ease;
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Asegura que los elementos que salen no rompan el layout durante la animación */
.gallery-leave-active {
  position: absolute; 
  /* Nota: En un grid complejo, absolute a veces puede causar superposición visual momentánea,
     pero es necesario para una animación de salida fluida en listas */
}
</style>