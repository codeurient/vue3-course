import { createApp } from 'vue';
import buBirTestdir from './Numune.vue';

import components from '@/components/UI';

import router from './router/router';

const app = createApp(buBirTestdir)

components.forEach( component => {
    app.component(component.name, component)
});

app.use(router).mount('#app');