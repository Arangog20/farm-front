import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes
import Home from '@/components/home.vue';
import HomeCreate from '@/components/homeCreate.vue';

// Define las rutas
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/homecreate', name: 'homeCreate', component: HomeCreate}
];

// Crea la instancia del router
const router = createRouter({
  history: createWebHistory(), // Usar el historial del navegador para la navegación
  routes
});

export default router;