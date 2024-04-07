import { createApp } from 'vue';
import buBirTestdir from './Numune.vue';
import components from '@/components/UI';
import router from '@/router/router';
// 1) Qlobal sekilde COMPONENT-lerin qeydiyyata alinmasini gormusuk indi ise DIRECTIV-ler nece qeydiyyata salinir onu oyrenek..
// 2) Qeydiyyata salmaq ucun ilk once 'VIntersection.js' faylini Import etmeliyik. 
import VIntersection from "@/directives/VIntersection";

const app = createApp(buBirTestdir)

components.forEach( component => {
    app.component(component.name, component)
});

// 3) COMPONENT-lerin qeydiyyata alinmasi ucun component() funksiyasindan istifade edirik, DIRECTIV-lerin qeydiyyata alinmasi ucun ise directive() funksiyasindan.
// 4) Bu funksiyanin icinde 2 parametr yaziriq. Directiv-i, VUE şablonunda istifade etdiyimiz zaman hemin 1ci parametrde yazdigimiz ad ile çağırırıq...
// 5) Meselen, eger qeydiyyata aldigimizda 1ci parametrde 'intersection' yazariqsa onda VUE şablonunda hemin direktivi bele cagirirqi:  v-intersection
// 6) 1ci parametrde istediyimiz ad yazmaq olar. Artiq istenilen COMPONENT icinde bu DIRECTIV-i istifade ede bilerik. 
app.directive('intersection', VIntersection)

app.use(router).mount('#app');



// 7) Artiq 'PostsPage.vue' faylina gederek bu tag ucun hemin direktivi tetbiq ede bilerik:    <div ref="observer" class="observe"></div>

// 8) Direktivi tetbiq etmeyimiz ucun bele yazmaq lazimdir:         <div v-intersection class="observe"></div>