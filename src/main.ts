import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(
	createRouter({
		history: createWebHistory(),
		routes: [
			{ path: '/', component: () => import('./views/Home.vue') },
			{ path: '/catalog', component: () => import('./views/Catalog.vue') },
		],
	})
)
app.mount('#app')
