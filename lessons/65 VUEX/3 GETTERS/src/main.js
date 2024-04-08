import { createApp } from 'vue';
import buBirTestdir from './Numune.vue';
import components from '@/components/UI';
import router from '@/router/router';
import directives from "@/directives";
import store from '@/store';

const app = createApp(buBirTestdir)

components.forEach( component => {
    app.component(component.name, component)
});


directives.forEach( directive => {
    console.log(directives);
    app.directive(directive.name, directive)
});

app.use(router).use(store).mount('#app');