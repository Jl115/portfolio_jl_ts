/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'


//* COMPONENTS

import PanelMenu from 'primevue/panelmenu';
import Badge from 'primevue/badge';
import Ripple from 'primevue/ripple';
import Menubar from 'primevue/menubar';
import BreadCrumb from 'primevue/breadcrumb';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Dock from 'primevue/dock';
import MegaMenu from 'primevue/megamenu';
import Tooltip from 'primevue/tooltip';


import App from './App.vue'
import router from './router'

const app = createApp(App)


app.component('PanelMenu', PanelMenu);
app.component('Badge', Badge);
app.component('MegaMenu', MegaMenu);
app.component('Breadcrumb', BreadCrumb);
app.component('InputText', InputText);
app.component('Avatar', Avatar);
app.component('Dock', Dock);


app.directive('ripple', Ripple);
app.directive('tooltip', Tooltip);


app.use(createPinia())
app.use(router)




app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
      }
    }
  }
});
app.mount('#app')
