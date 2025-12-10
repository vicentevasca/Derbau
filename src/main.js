import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// USAMOS LA LIBRERÍA ESTABLE
import { createHead } from '@vueuse/head'

// ANALYTICS COMPATIBLE
import VueGtag from 'vue-gtag-next'

const app = createApp(App)
const head = createHead()

app.use(head)

app.use(VueGtag, {
  property: {
    id: "G-M8S6C0DTRP" // Tu ID de Google aquí
  }
})

app.mount('#app')