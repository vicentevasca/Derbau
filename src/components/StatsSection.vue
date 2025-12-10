<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const hasAnimated = ref(false)

const stats = [
  { label: 'Años Experiencia', value: 10, suffix: '+' },
  { label: 'Proyectos', value: 150, suffix: '+' },
  { label: 'Cumplimiento', value: 100, suffix: '%' },
  { label: 'Soporte 24/7', value: 24, suffix: '/7' },
]

const displayValues = ref(stats.map(() => 0))

const animateNumbers = () => {
  const duration = 2000 // 2 segundos
  const steps = 60
  const intervalTime = duration / steps

  stats.forEach((stat, index) => {
    let current = 0
    const increment = stat.value / steps
    
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        displayValues.value[index] = stat.value
        clearInterval(timer)
      } else {
        displayValues.value[index] = Math.ceil(current)
      }
    }, intervalTime)
  })
}

// Observador: Detecta cuando la sección entra en pantalla
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        animateNumbers()
      }
    })
  }, { threshold: 0.3 }) // Se activa cuando el 30% del componente es visible

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section ref="sectionRef" id="stats" class="relative py-12 lg:py-24 overflow-hidden bg-slate-900">
    
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-900 to-sky-700 animate-living-gradient z-0"></div>
    <div class="absolute inset-0 z-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-8">
        
        <div 
          v-for="(stat, index) in stats" 
          :key="index" 
          class="group relative p-4 lg:p-6 rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm text-center transition-transform duration-500 hover:-translate-y-1"
        >
          <div class="absolute inset-0 bg-sky-400/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <p class="relative text-3xl sm:text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 tracking-tighter mb-1 drop-shadow-sm">
            {{ displayValues[index] }}<span class="text-xl lg:text-4xl align-top text-sky-300">{{ stat.suffix }}</span>
          </p>

          <div class="h-0.5 w-6 bg-sky-500/50 mx-auto mb-2 lg:mb-3 group-hover:w-12 transition-all duration-500"></div>

          <p class="text-[10px] lg:text-sm font-bold text-blue-200/80 uppercase tracking-wider group-hover:text-white transition-colors">
            {{ stat.label }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-living-gradient {
  background-size: 400% 400%;
  animation: gradientFlow 15s ease infinite;
}
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>