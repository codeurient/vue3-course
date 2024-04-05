import { createApp } from 'vue';
import buBirTestdir from './Numune.vue';

import components from '@/components/UI';


// 1) import edirik 'router' konstantini from yəni router.js faylindan. 
import router from './router/router';

const app = createApp(buBirTestdir)

components.forEach( component => {
    app.component(component.name, component)
});

// 2) use() metodundan xarici menbelerden plaginleri, kitabxanalari cagirmaq ucun istifade edilir. Hal-hazirda biz import edilen 'router' konstantini
// use() metodu ile qeydiyyata aliriq. 
app.use(router).mount('#app');


// 3) Artiq web sehifede URL yerinde bu adresi yazdiqda: http://localhost:8080/   MAIN.VUE faylina yonleneceyik. Ancaq ilk once use() ile qeydiyyata aldigimiz
// bu marsrutlari Numune.vue faylina gondermek lazimdir. Bunun ucun Numune.vue faylinin icinde (<router-view></router-view>) komponentini yazmaq lazimdir.

// 4) Demeli mentiqnen bele edirik:       import buBirTestdir from './Numune.vue'    ->    const app = createApp(buBirTestdir)    ->    app.use(router)    ->    mount('#app')

// Numune.vue faylini 'buBirTestdir' adi altinda import et, sonra CREATEAPP() metodu ile qeydiyyata al, sonra USE() metodu ile 'Numune' faylina ferqli marsrutlarda olan ferqli sehifeleri gonder, 
// sonra ise Numune faylini montaj et public/index.html faylina. 