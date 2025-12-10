<script setup>
import { Ruler, Hammer, Building2 } from 'lucide-vue-next'

const services = [
  {
    icon: Building2,
    title: 'Desarrollo y Gestión',
    desc: 'Diseño arquitectónico integral, gestión eficiente de obras y tramitaciones municipales completas.'
  },
  {
    icon: Hammer,
    title: 'Construcción y Ejecución',
    desc: 'Edificaciones de alto estándar, habilitaciones de oficinas, remodelaciones comerciales y ampliaciones.'
  },
  {
    icon: Ruler,
    title: 'Ingeniería y Especialidades',
    desc: 'Cálculo estructural preciso, instalaciones sanitarias, eléctricas y climatización profesional.'
  }
]
</script>

<template>
  <section id="services" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Soluciones Integrales</h2>
        <div class="h-1 w-20 bg-sky-500 mx-auto"></div>
        <p class="mt-6 text-slate-600">
          Abordamos cada etapa del proceso constructivo con un enfoque en la innovación y el cumplimiento normativo riguroso.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(service, idx) in services" :key="idx" 
             class="group p-8 bg-white border border-slate-100 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-900/5 transition-all duration-300 rounded-sm">
          <div class="w-14 h-14 bg-blue-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
            <component :is="service.icon" class="w-7 h-7 text-blue-900 group-hover:text-white transition-colors" />
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">{{ service.title }}</h3>
          <p class="text-slate-500 leading-relaxed text-sm">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>