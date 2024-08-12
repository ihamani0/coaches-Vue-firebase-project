
import { createApp } from 'vue'


import store from './store/index.js'
import App from './App.vue'
import router from './router/index.js'

//base components
import BaseCard from './components/ui/Card.vue'
import BaseBadge from './components/ui/Badge.vue'
import BaseButton from './components/ui/Button.vue'
import BaseDialog from './components/ui/Dialog.vue'
import Spinner from "./components/ui/Spinner.vue";

import './assets/tailwind.css'

const app = createApp(App)

app.component('base-card' , BaseCard);
app.component('base-badge' , BaseBadge);
app.component('base-button' , BaseButton);
app.component('base-dialog' , BaseDialog);
app.component('base-spinner' , Spinner);


app.use(router)
app.use(store)

app.mount('#app')
