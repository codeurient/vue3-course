import { createApp } from 'vue';
import buBirTestdir from './Numune.vue';

import components from '@/components/UI';

const app = createApp(buBirTestdir)

components.forEach( component => {
    app.component(component.name, component)
});


app.mount('#app');