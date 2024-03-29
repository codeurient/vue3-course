<template>
    <!-- 
        2) Hemin 'modelValue' xassesini :VALUE direktivine yazaraq INPUT tag-inin baslangic DEYERINI teyin etmis oluruq. 

        3) @input EVENT ne demekdir ? Yəni, INPUT tag-ine bir seyler yazildiqda HEREKETE kec demek ucun istifade edilen EVENT-dir. 
        Biz INPUT-a yazi yazdiqda @input EVENT-i herekete kecerek 'updateInput' funksiyasini cagirir. 
     -->
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
    
 <script>
 export default {
    name: 'my-input',

    // 1) ANA komponent olan PostForum faylindan gonderilen deyeri PROPS ile elde edir ve modelValue xassesine veririk. 
    props: {
        modelValue: [String, Number]
    },

    methods: {
        // 4) Bu funksiya INPUT tag-i icinde islemeye basladigi ucun 'event' parametri hemin tag-e aid kodlari ozunde ehtiva edecek. target, value ve.s kimi.
        // 5) target hemin tag-in ozunu cagirmaq ucun istifade edilir. Yəni, 'event' obyektdir, bu obyekt icinde 'target' xassesi var ve 'event.target' yazdiqda INPUT tag-ini elde edirik:
        // <input data-v-79333573 data-v-20c887b4 class="input" type="text" placeholder="Title of post">
        updateInput(event) {
            // 6) $EMIT funksiyasi MyInput ALT komponentinde bas veren deyisiklikleri PostForm ANA komponentine gondermek ucundur.
            // 7) Normalda $EMIT funksiyasinin 1ci parametrinde ozumuzden EVENT adi qurasdirirdiq ki, hemin EVENT-i ANA komponentin icinde yazaraq ALT komponentden deyer elde edek.
            // 8) Ancaq burda ferqli yazmisiq: 'update:modelValue' - ikitərəfli məlumat mubadilesinde istifadə edilən xüsusi sintaksisdir. 
            // 9) ANA komponentde ALT komponent üçün V-MODEL istifadə etdiyimiz zaman Vue.js, bir-biri ile elaqelendirilen melumatlari yenilemek ucun avtomatik olaraq "update:modelValue" 
            // EVENT-ini yaradir. Yəni, bu EVENT avtomatik olara VUE.js terefinden yaradilina EVENT-dir. 
            
            // 10) 'update:modelValue': bu SİNTAKSİS yəni bu yazı forması o menaya gelir ki, İNPUT tag-ine daxil edilen deyer UPDATE edilsin ve UPDATE edilen deyer ANA komponente 
            // 'modelValue' vasitesi ile gonderilsin. ANA komponent ile ALT komponent arasinda elaqe ise V-MODEL ve modelValue vasitesi ile yaradilmisidir.

            // Qısaca: V-MODEL bu modelValue-dur ve modelValue bu V-MODEL-dir. 
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
 </script>
 

 <style scoped>
    .input{
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }
</style>