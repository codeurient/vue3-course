<template>
    <div class="app">
        {{  str  }}
    </div>
</template>

<script>
    export default {
        // 1. Options API: komponentlerin data, computed, methods, watch ve.s kimi xasselerden istifade ederek yaradilmasinin yoludur. 
        // Bu xasselerin her birini, komponenti formalasdiran ayri-ayri parcalar kimi dusunmek olar. Meselen DATA komponentin vizualinda eks olunacaq
        // kodlari ehtiva edir. COMPUTED xassesi DATA-lardan gelen melumatlari deyisdirmek ucun istifade edilen biler. METHODS xassesi EVENT-lar ile 
        // isleyen funksiyalari ehtiva edir ve.s

        // 2. Composition API: komponentlerin yaradilmasi ucun istifade edilen alternativ yoldur. Options API-den ferqli olaraq, Composition API ile 
        // yaradilan komponentler object icinde olmur. Komponentleri funksiya kimi yaratmaq mumkundur. 

        // Composition API, Options API ve.s kimi tetbigin yaradilmasinda istifade edilen qaydalar haqqinda daha etrafli melumati bu linkden elde etmek olar: https://vuejs.org/api/

        // 3) setup() funksiyasi, obyekt qaytirir. Bu obyekt daxilinde deyiskenler, funksiyalar ve.s yazilir hansi ki, komponent daxilinde istifade edilecek interfesi formalasdirmaq ucun istifade 
        // edilir.
        setup() {
            // 4) Deyiskenleri komponent daxilinde istifade ede bilmek ucun RETURN acar sozu ile hemin deyiskeni qaytarmaq lazimdir. 
            const str = 'Hello World!';

            // 5) Bezekli moterize birden cox deyeri return ede bilmek ucucundur.
            return {str};
        }
    }
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>