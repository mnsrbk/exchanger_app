import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import AppButton from './components/Base/AppButton.vue'

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('AppButton', AppButton)

app.mount("#app");
