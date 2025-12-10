<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { value: '+10', label: 'Años de Experiencia' },
  { value: '150+', label: 'Proyectos Ejecutados' },
  { value: '100%', label: 'Cumplimiento Normativo' },
  { value: '24/7', label: 'Soporte en Obra' },
]
</script>

<template>
  <section class="bg-slate-900 py-16 border-y border-slate-800">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index" class="space-y-2">
          <p class="text-4xl lg:text-5xl font-black text-white tracking-tighter">
            {{ stat.value }}
          </p>
          <p class="text-sm font-medium text-blue-400 uppercase tracking-widest">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>