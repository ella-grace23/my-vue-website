import { createApp } from 'vue'
import App from './App.vue'
// Import global stylesheet
import './styles/global.css'
// TODO: Import HeaderComponent and FooterComponent
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
const app = createApp(App)
app.component('HeaderComponent', HeaderComponent)
app.component('FooterComponent', FooterComponent)
app.mount('#app') 