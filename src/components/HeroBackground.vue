<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// --- CONFIGURACIÓN DE ONDAS (Canvas Nativo) ---
const canvasRef = ref(null)
let animationId = null
let time = 0

const drawWaves = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  
  // Ajustar tamaño al contenedor padre
  const parent = canvas.parentElement
  canvas.width = parent.offsetWidth
  canvas.height = parent.offsetHeight
  
  const width = canvas.width
  const height = canvas.height
  const centerY = height / 2

  ctx.clearRect(0, 0, width, height)

  // Configuración de las 3 líneas (Azules Técnicos)
  // Las hemos hecho un poco más finas para combinar con la hoja de cálculo
  const lines = [
    { color: 'rgba(14, 165, 233, 0.5)', amplitude: 25, frequency: 0.002, speed: 0.02, offset: 0 },   // Sky-500
    { color: 'rgba(30, 64, 175, 0.3)', amplitude: 35, frequency: 0.003, speed: 0.015, offset: 40 }, // Blue-800
    { color: 'rgba(56, 189, 248, 0.4)', amplitude: 20, frequency: 0.001, speed: 0.025, offset: -40 } // Sky-400
  ]

  lines.forEach(line => {
    ctx.beginPath()
    ctx.strokeStyle = line.color
    ctx.lineWidth = 2 // Línea fina y precisa
    
    for (let x = 0; x < width; x++) {
      // Fórmula de onda senoidal
      const y = centerY + line.offset + Math.sin(x * line.frequency + time * line.speed) * line.amplitude
      ctx.lineTo(x, y)
    }
    ctx.stroke()
  })

  time += 1
  animationId = requestAnimationFrame(drawWaves)
}

onMounted(() => {
  drawWaves()
  window.addEventListener('resize', drawWaves)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', drawWaves)
})
</script>

<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-slate-50">
    
    <div class="absolute inset-0 z-0 opacity-40 technical-grid"></div>
    
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full z-10"></canvas>
    
    <div class="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50 z-20"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50 z-20"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent z-20"></div> </div>
</template>

<style scoped>
/* Estilo de papel milimetrado / Ingeniería 
  Crea líneas verticales y horizontales de 1px cada 40px
*/
.technical-grid {
  background-size: 50px 50px;
  background-image:
    linear-gradient(to right, rgba(148, 163, 184, 1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 1) 1px, transparent 1px);
  /* Opcional: Añadir una sub-grilla más pequeña si quieres estilo milimétrico, 
     pero para web la de 40px es más limpia.
  */
}
</style>