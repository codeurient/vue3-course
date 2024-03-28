import { createApp } from 'vue';
import buBirTestdir from './Numune.vue';

import components from '@/components/UI';
// 1) neticeni gormek ucun konsol penceresine components yazdiraraq baxa bilerik. Netice olaraq Array elde edirik ve bu Array
// icinde ise Obyektler vardr. Her Obyekt bir komponentdir.
console.log(components);    

const app = createApp(buBirTestdir)


// 2) components, Array-dir. Bu array-in icinde UI qovlugunda olan butun komponentler var. foreach() metodu ile hemin 
// komponentleri tek-tek elde edirik. foreach() metodu ile Array-i dovr etdikde hemin Array icinde olan Obyektleri tek-tek 
// elde edirik. Bu obyektlerin 'name' adinda xassesi movcuddur. Hemin xassenin deyeri ise KOMPONENTIN adidir.
components.forEach( component => {
// 3) 'component.name' yazaraq komponent adini elde edirik sonra ise VUE js-in component() adinda funksiyasindan istifade ederek
// elde etdiyimiz komponent adini qeydiyyata saliriq. 
// 4) Normalda komponentleri qeydiyyata salmaq ucun onlari import etmek ve bele yazmaq lazimdir:  components: { MyButton }
// Buna LOCAL sekilde komponentlerin qeydiyyata salinmasi deyiler.
// 5) component() funksiyasindan ise komponentleri GLOBAL sekilde qeydiyyata salmaq ucun istifade edilir.
// 6) GLOBAL sekilde qeydiyyata salinan komponentleri artiq import etmeye ehtiyac yoxdur.
// 7) 1ci parametr komponentin adi
//    2ci parametr hemin komponent adinin yerlesmis oldugu component obyektidir. 
// Loru dilde desek component obyektinin icinden component.name-i cagiraraq component() funksiyasi ile qeydiyyata saliriq.
    app.component(component.name, component)
});


app.mount('#app');