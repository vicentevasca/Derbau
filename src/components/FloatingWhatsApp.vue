<script setup>
import { MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <a 
    href="https://wa.me/56931352832?text=Hola%20Derbau,%20quisiera%20cotizar%20un%20proyecto."
    target="_blank"
    class="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
  >
    <span class="bg-white text-slate-800 text-xs font-bold py-2 px-4 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 border border-slate-100 hidden md:block">
      ¿Cotizar ahora?
    </span>
    
    <div class="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-900/20 hover:bg-green-500 hover:scale-110 transition-all duration-300">
      <MessageCircle class="w-7 h-7 fill-current" />
    </div>
  </a>
</template>