import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from "@/components/HomeView.vue";

const routes = [
    { path: '/', component: HomeView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
