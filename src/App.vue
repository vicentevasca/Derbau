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
  title: 'Derbau | Ingeniería y Construcción Industrial en Santiago',
  meta: [
    {
      name: 'description',
      content: 'Empresa líder en construcción de oficinas, galpones industriales y cálculo estructural en Chile. Expertos en gestión de proyectos y cumplimiento normativo OGUC.'
    },
    {
      name: 'keywords',
      content: 'constructora santiago, ingeniería estructural, habilitación oficinas, construcción industrial, regularización obras, Derbau'
    },
    // Etiquetas Open Graph (Importantes para compartir en redes sociales como LinkedIn)
    {
      property: 'og:title',
      content: 'Derbau | Excelencia Técnica en Construcción y Gestión de Proyectos'
    },
    {
      property: 'og:description',
      content: 'Soluciones integrales en construcción y gestión de proyectos para el sector corporativo e industrial.'
    },
    {
      property: 'og:image',
      content: 'https://www.derbau.cl/img/og-image.jpg' // Reemplazar con URL de la imagen (de 1200x630px)
    },
    {
      name: 'robots',
      content: 'index, follow' // Indica a los buscadores que rastreen la página
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.derbau.cl' // El dominio real
    },
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
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