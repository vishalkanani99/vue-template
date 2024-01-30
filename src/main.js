import { createApp } from 'vue'
import '@/assets/css/main.css'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(routes)
app.mount('#app')
