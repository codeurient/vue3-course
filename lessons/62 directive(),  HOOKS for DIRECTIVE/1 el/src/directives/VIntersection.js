// 1) direktivler standart obyektler kimi yaradilir hansi ki, xususi üsulla formalasdirilir.
// VUE js saytinda bu haqda daha etrafli qeyd edilmisdir:   https://v3.ru.vuejs.org/ru/guide/custom-directive.html

// Saytda qeyd edilmisdir ki, vue js-in V-MODEL, V-SHOW kimi daxili direktivlerine benzer, tekrar-tekrar istifade ede bileceyimiz oz xususi direktivlerimizide yarada bilerik.
// VUE js-in tekrar-tekrar istifade edilen esas mexanizmi komponentlerdir, ancaq DOM ile heyata kecirilen balaca emeliyyatlarda tekrar-tekrar istifade ede bileceyimiz direktivler yaratmaq olar.

// Her component, LIFECYCLE HOOKS merhelesinden kecdiyi kimi her istifadeci direktivinin de ozune mexsus LIFECYCLE HOOKS-u movcuddur. Mesel ucun funksiya MOUNTED().

// Istifadeci direktivinde olan MOUNTED() o vaxt cagrilir ki, hemin direktivin istifade edildiyi ANA komponentin montaj edilme prosesi tamamlansin. 
// Yəni, əgər bizim komponente bagli olan DIREKTIVIMIZ varsa, hemin ANA komponent DOM agacina elave edildikden sonra, hook (funksiyada demek olar) MOUNTED() avtomatik olaraq cagrilacaqdir.

// NOT: Montajlanma proesesinin tamamlanmasi o demekdir ki, ANA komponent DOM agacina elave edildi. 

export default {
// 2) Bu fayldan export edirik icinde MOUNTED() funksiyasi olan obyekti. 
    mounted(el) {
        // 3) Bu funksiya parametr olaraq bezi elementleri ozunde ehtiva edir. Gelin console penceresine hemin parametri yazdiraraq bu funksiyanin elde etdiyi elementleri gorek.
        // mounted() funksiyasinin parametr yerinde 'el' evezine istenilen parametr adı yazmaq olar. Biz qisaca element sozunun ilk iki herfini yazmisiq. Element yəni, elde edilen TAG.
        console.log(el);
    }
}
// 4) Bu VIntersection.js direktivini istifade ede bilmeyimiz ucun onu qeydiyyata salmaliyiq. 

// 5) Qlobal sekilde COMPONENT-lerin qeydiyyata alinmasini gormusuk indi ise DIRECTIV-ler nece qeydiyyata salinir ona oyrenek. MAIN.JS faylinda.