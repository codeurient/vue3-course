<!-- AnaKomponent.vue -->

<!-- 

! ANA komponentden ALT komponente melumatlari PROPS ile gonderdik.

! ALT komponentden ANA komponente melumatlari nece gondere bilerik ? 

! $EMIT bir funksiyadir ve adeten EVENT-lar (hadise) herekete kecdiyinde, ALT komponentden UST 
! komponentde melumat oturmek ucun istifade edilir.

-->
<template>
    <div>
        <!-- 
            5. @ededlerinCemi bir EVENT-dir ve $EMIT vasitesi ile  'AltKomponent' icinden 
            gonderilmisdir. Bu event ozu ile getirdiyi melumatlari gelenToplam() metoduna
            arqument kimi gonderir. Hemin melumati asagida yeni, gelenToplam() metodunu 
            yaratdigimiz yerde qebul ederek, 'umumiCem' adli deyiskenin icine otururuk.
         -->
        <Toplama @ededlerinCemi="gelenToplam($event)" :sayi1="s1"  :sayi2="s2" />

        <!-- 6. En sonda ise hemin deyiskeni icinde olan deyerimizi ekrana yazdiririq. -->
        <h2> {{  umumiCem  }} </h2>
    </div>
</template>

<script>

import Toplama from './subComponents/AltKomponent.vue';


export default {
    data() {
        return {
            s1: 100,
            s2: 250,
            umumiCem: 0,
        }
    } ,
    methods: {
        gelenToplam(cem) {
            this.umumiCem = cem
        }
    },

    components: {
        Toplama
    }
}
</script>