<!-- AltKomponent.vue -->
<template>
    <div>
        <p>Sayi 1: {{ sayi1 }}</p>
        <p>Sayi 2: {{ sayi2 }}</p>
    </div>

    <!-- 1. duymeni basdiqda 'anaKomponenteGonder' adli metodumuz isleyecekdir. -->
    <button @click="anaKomponenteGonder">
        Elde etdiyimiz ededleri cemle ve ust komponente geri gonder
    </button>
</template>


  
  <script>

    export default {
        props: { 
            sayi1 : Number,
            sayi2 : Number
        },

        methods: {
            anaKomponenteGonder() {
                // 2. Bu metodumuzun icinde $EMIT funksiyamiza iki parametr vermisik. 

                // 3. Birinci parametr gonderilen melumati, 'AnaKomponent' icinde hansi ad ile qebul
                // edeceyikse hemin EVENT-in adidir. Ikinci parametr ise bu EVENT ile gonderilen melumatlardir.

                // 4. (this.sayi1 + this.sayi2)-nin cemi, avtomatik olaraq 'ededlerinCemi' adli EVENT ile gonderilir.
                // 'AnaKomponent' icinde hemin melumatlari elde etmek ucun ise basqa bir metod yaziriq. Bu metodun
                // $event arqumenti hemin melumatlari avtomatik olaraq qebul edir ve bu metodu yaratdigimiz yerdeki
                // parametrine oturur.
                this.$emit('ededlerinCemi', this.sayi1 + this.sayi2)
            }
        },
    }

  </script>
  