import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css' // Importa tu archivo de estilos globales


createApp(App).use(router).mount('#app')