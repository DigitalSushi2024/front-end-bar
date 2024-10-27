import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "@/styles/global.css";  // Import global styles here

createApp(App).use(router).mount('#app');
