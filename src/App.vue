<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue' 
import ServicesSection from './components/ServicesSection.vue'
import DetailedServices from './components/DetailedServices.vue'
import ProjectGallery from './components/ProjectGallery.vue' 
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue' 
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