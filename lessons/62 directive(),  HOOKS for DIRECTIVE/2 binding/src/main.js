import { createApp } from 'vue';
import buBirTestdir from './Numune.vue';
import components from '@/components/UI';
import router from '@/router/router';
import VIntersection from "@/directives/VIntersection";

const app = createApp(buBirTestdir)

components.forEach( component => {
    app.component(component.name, component)
});

app.directive('intersection', VIntersection)

app.use(router).mount('#app');