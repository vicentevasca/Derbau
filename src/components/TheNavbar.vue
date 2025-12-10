<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, ArrowRight } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Datos de navegación actualizados con las nuevas secciones
const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#stats' }, // Apunta a las cifras
  { name: 'Servicios', href: '#services' },
  { name: 'Proyectos', href: '#projects' }, // Apunta a la galería
]

// Control del Scroll para cambiar el fondo del nav
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Cerrar menú móvil al hacer click en un link
const closeMenu = () => {
  isMenuOpen.value = false
}

// Listeners del ciclo de vida
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header 
    class="fixed w-full z-50 transition-all duration-500 border-b"
    :class="[
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-slate-200 py-3 shadow-sm' 
        : 'bg-white/0 border-transparent py-6'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Global">
      <div class="flex items-center justify-between">
        
        <div class="flex lg:flex-1">
          <a href="#" class="text-2xl font-black tracking-tighter uppercase transition-colors duration-300"
             :class="isScrolled ? 'text-slate-900' : 'text-slate-900'">
            Derbau<span class="text-sky-500">.</span>
          </a>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            class="relative text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-blue-900 transition-colors group py-2"
          >
            {{ link.name }}
            <span class="absolute inset-x-0 bottom-0 h-[2px] bg-sky-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contact" 
             class="group px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-sm transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-900/20 flex items-center gap-2">
            Contáctanos
            <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div class="flex lg:hidden">
          <button 
            type="button" 
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:text-blue-900 transition-colors"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="sr-only">Abrir menú principal</span>
            <transition name="rotate" mode="out-in">
              <component :is="isMenuOpen ? X : Menu" class="h-7 w-7" />
            </transition>
          </button>
        </div>
      </div>
    </nav>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="lg:hidden absolute inset-x-0 top-full bg-white border-b border-slate-100 shadow-xl">
        <div class="space-y-1 px-6 py-6">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            @click="closeMenu"
            class="block py-3 text-base font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-50 hover:pl-2 transition-all border-b border-slate-50 last:border-0"
          >
            {{ link.name }}
          </a>
          
          <div class="mt-6 pt-6 border-t border-slate-100">
            <a href="#contact" 
               @click="closeMenu"
               class="flex w-full items-center justify-center rounded-sm bg-blue-900 px-3 py-4 text-base font-bold text-white hover:bg-sky-600 transition-colors shadow-lg">
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Animación para el icono del menú móvil */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.2s ease;
}

.rotate-enter-from {
  transform: rotate(-90deg);
  opacity: 0;
}

.rotate-leave-to {
  transform: rotate(90deg);
  opacity: 0;
}
</style>