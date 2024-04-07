import { createApp } from 'vue';
import buBirTestdir from './Numune.vue';
import components from '@/components/UI';
import router from '@/router/router';
// 1) Direktivleri IMPORT edirik.
import directives from "@/directives";

const app = createApp(buBirTestdir)

components.forEach( component => {
    app.component(component.name, component)
});


// 2) Sonra ise FOREACH() metodu ile butun direktivleri qeydiyyata saliriq. Evvel tek-tek etmisdik indi ise hamisini avtomatik olaraq foreach() ile edirik. 
// DIRECTIVES qovlugundan IMPORT edilen VINTERSECTION.JS ve diger fayllari qeydiyyata almazdan evvel, hemin fayllarin icinde 'NAME' xassesine deyer olaraq bir ad vermek lazimdir. 
// Mesel ucun: name: 'intersection'..... Qeydiyyata saldigimiz ad artiq DIRECTIVE adı olacaq ve component icinde bele yazaraq istifade ede bilerik: V-INTERSECTION
directives.forEach( directive => {
    app.directive(directive.name, directive)
});


app.use(router).mount('#app');


// 3) Son olaraq 'VIntersection' direktivine kecid edirik ve obyektin icinde 'name' xassesi yaradaraq 'intersection' adli deyer veririk.