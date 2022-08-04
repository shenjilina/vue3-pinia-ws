import { createApp } from 'vue'
import store from './store/index';
import './style.css'
import App from './App.vue'

createApp(App).use(store).mount('#app')
