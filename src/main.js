import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createHead } from '@unhead/vue'

// 1. Importar Analytics
import VueGtag from "vue-gtag";

const app = createApp(App)
const head = createHead()

app.use(head)

// 2. Configurar Analytics
app.use(VueGtag, {
  config: { 
    id: "G-M8S6C0DTRP" // <--- REEMPLAZA ESTO CON TU ID REAL DE GOOGLE
  }
});

app.mount('#app')