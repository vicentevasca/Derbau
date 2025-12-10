<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { 
  PencilRuler, FileText, CheckSquare, 
  BrickWall, PaintBucket, Home, 
  Zap, PenTool, Fan, ArrowRight
} from 'lucide-vue-next'

const activeCategory = ref(0)
const isPaused = ref(false) // Si el usuario hizo click, se detiene para siempre
const isHovering = ref(false) // Si el usuario pasa el mouse, se pausa temporalmente
let intervalId = null
const DURATION = 6000 // 6 segundos por slide

const categories = [
  {
    id: 0,
    title: 'Desarrollo y Gestión',
    subtitle: 'Planificación estratégica',
    items: [
      { name: 'Diseño Arquitectónico', desc: 'Planos, elevaciones y modelado BIM.', icon: PencilRuler },
      { name: 'Gestión de Obras', desc: 'Supervisión técnica e inspección fiscal (ITO).', icon: FileText },
      { name: 'Regularizaciones', desc: 'Tramitación municipal y recepción final.', icon: CheckSquare }
    ]
  },
  {
    id: 1,
    title: 'Construcción y Ejecución',
    subtitle: 'Obras de alto estándar',
    items: [
      { name: 'Edificación', desc: 'Obra gruesa y terminaciones para empresas.', icon: BrickWall },
      { name: 'Habilitación Interior', desc: 'Remodelación de oficinas y espacios comerciales.', icon: PaintBucket },
      { name: 'Ampliaciones', desc: 'Mejoras estructurales y optimización de espacios.', icon: Home }
    ]
  },
  {
    id: 2,
    title: 'Ingeniería y Especialidades',
    subtitle: 'Sistemas técnicos complejos',
    items: [
      { name: 'Cálculo Estructural', desc: 'Memorias de cálculo y análisis sísmico.', icon: PenTool },
      { name: 'Instalaciones', desc: 'Proyectos eléctricos, sanitarios y gas.', icon: Zap },
      { name: 'Climatización', desc: 'Sistemas HVAC eficientes e industriales.', icon: Fan }
    ]
  }
]

// Lógica de cambio automático
const nextSlide = () => {
  if (!isPaused.value && !isHovering.value) {
    activeCategory.value = (activeCategory.value + 1) % categories.length
  }
}

const startAutoPlay = () => {
  intervalId = setInterval(nextSlide, DURATION)
}

const stopAutoPlay = () => {
  if (intervalId) clearInterval(intervalId)
}

// Interacción del usuario
const handleManualSelect = (index) => {
  activeCategory.value = index
  isPaused.value = true // Detener rotación permanentemente si el usuario elige
  stopAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <section class="py-24 bg-slate-50 relative overflow-hidden">
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold text-slate-900">Especialidades Técnicas</h2>
          <p class="text-slate-500 mt-4 text-lg">
            Nuestra experiencia abarca todo el ciclo de vida del proyecto.
          </p>
        </div>
        
        <div v-if="!isPaused" class="hidden md:flex items-center gap-2 text-xs text-sky-600 font-bold bg-sky-50 px-3 py-1 rounded-full animate-pulse">
          <span class="w-2 h-2 rounded-full bg-sky-500"></span>
          Explorando servicios automáticamente
        </div>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
        
        <div class="lg:col-span-4 flex flex-col space-y-3">
          <button 
            v-for="(cat, index) in categories" 
            :key="cat.id"
            @click="handleManualSelect(index)"
            class="group text-left p-5 rounded-sm border-l-4 transition-all duration-300 relative overflow-hidden"
            :class="[
              activeCategory === index 
                ? 'bg-white border-blue-900 shadow-lg' 
                : 'bg-transparent border-slate-200 hover:bg-white hover:border-sky-300 text-slate-400'
            ]"
          >
            <div v-if="activeCategory === index && !isPaused && !isHovering" 
                 class="absolute bottom-0 left-0 h-1 bg-sky-500/20 w-full">
               <div class="h-full bg-sky-500 animate-progress origin-left"></div>
            </div>

            <div class="flex justify-between items-center relative z-10">
              <div>
                <h3 class="text-lg font-bold transition-colors duration-300"
                    :class="activeCategory === index ? 'text-blue-900' : 'text-slate-600 group-hover:text-slate-900'">
                  {{ cat.title }}
                </h3>
                <p class="text-xs mt-1 transition-colors duration-300"
                   :class="activeCategory === index ? 'text-slate-500' : 'text-slate-400'">
                  {{ cat.subtitle }}
                </p>
              </div>
            </div>
          </button>
        </div>

        <div 
          class="lg:col-span-8 bg-white p-8 lg:p-10 rounded-sm shadow-xl border border-slate-100 min-h-[420px] relative"
          @mouseenter="isHovering = true" 
          @mouseleave="isHovering = false"
        >
          <Transition name="fade" mode="out-in">
            <div :key="activeCategory" class="h-full flex flex-col">
              
              <div class="mb-8 border-b border-slate-100 pb-4 flex justify-between items-center">
                <div>
                  <span class="text-sky-500 text-xs font-bold uppercase tracking-widest">
                    Categoría {{ activeCategory + 1 }} de {{ categories.length }}
                  </span>
                  <h3 class="text-2xl font-bold text-slate-900 mt-1">
                    {{ categories[activeCategory].title }}
                  </h3>
                </div>
                <div class="hidden sm:block text-slate-100">
                  <component :is="categories[activeCategory].items[0].icon" class="w-12 h-12 opacity-20" />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6 flex-grow">
                <div 
                  v-for="(item, idx) in categories[activeCategory].items" 
                  :key="idx"
                  class="flex items-start gap-4 p-4 rounded hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group/item"
                >
                  <div class="bg-blue-50 p-3 rounded-sm text-blue-900 group-hover/item:bg-blue-900 group-hover/item:text-white transition-colors duration-300">
                    <component :is="item.icon" class="w-6 h-6" />
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900">{{ item.name }}</h4>
                    <p class="text-sm text-slate-500 mt-1 leading-relaxed">{{ item.desc }}</p>
                  </div>
                </div>
              </div>

              <div class="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p class="text-xs text-slate-400 hidden sm:block">
                  * Todos los proyectos cumplen con normativa OGUC vigente.
                </p>
                <a href="#contact" 
                   class="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-sky-600 text-white text-sm font-bold rounded-sm transition-all shadow-lg flex items-center justify-center gap-2 group">
                  Cotizar {{ categories[activeCategory].title }}
                  <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Transition>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animación de Entrada de Contenido */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* Animación de Barra de Progreso */
@keyframes progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.animate-progress {
  animation: progress 6s linear forwards; /* 6s debe coincidir con la const DURATION del script */
}
</style>