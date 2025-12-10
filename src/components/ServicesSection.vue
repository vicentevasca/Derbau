<script setup>
import { ArrowUpRight } from "lucide-vue-next";

const services = [
  {
    title: "Desarrollo y Gestión",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop", // Planos y casco
    link: "#detailed-services",
  },
  {
    title: "Construcción y Ejecución",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // Obra gruesa
    link: "#detailed-services",
  },
  {
    title: "Ingeniería y Especialidades",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop", // Industrial/HVAC
    link: "#detailed-services",
  },
];
</script>

<template>
  <section id="services" class="bg-white">
    <div class="grid lg:grid-cols-3 h-auto lg:h-[600px]">
      <a
        v-for="(service, index) in services"
        :key="index"
        :href="service.link"
        class="group relative w-full h-[250px] lg:h-full overflow-hidden cursor-pointer block"
      >
        <img
          :src="service.image"
          :alt="service.title"
          class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out scale-105 blur-[3px] grayscale-[50%] group-hover:scale-110 group-hover:blur-0 group-hover:grayscale-0"
        />

        <div
          class="absolute inset-0 bg-blue-950/70 transition-colors duration-500 group-hover:bg-blue-950/10 z-10"
        ></div>

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-20"
        ></div>

        <div
          class="absolute inset-0 flex flex-col items-center justify-center p-6 z-30 text-center"
        >
          <h3
            class="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider drop-shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2"
          >
            {{ service.title }}
          </h3>

          <div
            class="w-12 h-1 bg-sky-500 mt-4 transition-all duration-500 group-hover:w-24 group-hover:bg-white shadow-[0_0_10px_rgba(14,165,233,0.5)]"
          ></div>
        </div>
      </a>
    </div>
  </section>
</template>
