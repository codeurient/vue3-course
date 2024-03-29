<!-- AltKomponent.vue -->
<template>
    <div>
        <p>Sayi 1: {{ sayi1 }}</p>
        <p>Sayi 2: {{ sayi2 }}</p>
    </div>
</template>


  
  <script>

    export default {
        // 1. PROPS-u array kimi gondermek mumkundur ancaq meslehet deyildir.
        // props: ['sayi1', 'sayi2']


        // 2. Asagidaki kimi yazilan qayda daha meslehetlidir. Cunki gelen PROPS adini ve
        // onun tipini daha aydin sekilde gormek mumkundur.
        // props: { mesaj: String }


        // 3. Daha da genis ve etrafli yazmaq istesez bele ede bilersiniz:
        props: { 
            sayi1 : { 
                // Tipinin Number oldugunu deyirik
                type: Number,
                // required default olaraq FALSE-dur
                required: false,
                // default - Eger AnaKomponent icinde props istifade edilmez ise yaxud deyer verilmez ise onda 
                // default olaraq istifade edilecek deyerin ne olacagini bildirir.
                default: 150
               
            }, 
            sayi2 : { 
                type: Number,
                // required eger TRUE olarsa bu hemin props-un mutleq istifade edilmesi gerekdiyini bildirir.
                // Ancaq bezi hallarda props-u istifade etmesek bele, xeberdarliq mesaji vermiye biler.
                required: true
            }, 
        },
    }

  </script>
  