<template>
  <footer class="bg-black text-slate-500 py-12 border-t border-slate-900 font-mono text-xs">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      
      <div class="text-center md:text-left">
        <span class="text-white font-bold text-sm tracking-tighter uppercase">Derbau<span class="text-sky-500">.</span></span>
        <p class="mt-2">Ingeniería y Construcción SPA</p>
      </div>

      <div class="flex gap-6">
        <a href="#" class="hover:text-white transition-colors">Privacidad</a>
        <a href="#" class="hover:text-white transition-colors">Términos</a>
        <a href="https://linkedin.com" target="_blank" class="hover:text-sky-400 transition-colors">LinkedIn</a>
      </div>

      <div class="text-center md:text-right">
        <p>&copy; {{ new Date().getFullYear() }}. Todos los derechos reservados.</p>
        <p class="mt-1 opacity-50">Santiago, Chile.</p>
      </div>
      
    </div>
  </footer>
</template>