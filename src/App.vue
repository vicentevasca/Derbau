<script setup>
// USAMOS LA LIBRERÍA ESTABLE
import { useHead } from '@vueuse/head'
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import DetailedServices from './components/DetailedServices.vue'
import ProjectGallery from './components/ProjectGallery.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'

useHead({
  title: 'Derbau | Ingeniería y Construcción',
  meta: [
    { name: 'description', content: 'Expertos en construcción industrial y corporativa.' }
  ]
})
</script>

<template>
  <div class="font-sans antialiased bg-white relative">
    <TheNavbar />
    
    <main>
      <HeroSection />
      
      <StatsSection /> 
      
      <ServicesSection />
      <DetailedServices />
      
      <ProjectGallery />
      
      <ContactSection />
    </main>

    <TheFooter />
    
    <FloatingWhatsApp />
  </div>
</template>