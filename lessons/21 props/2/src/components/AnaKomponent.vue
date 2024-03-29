<!-- AnaKomponent.vue -->
<template>
    <div>
        <!-- 
            Deyeri bir basa burda yaxud data() obyektinin icinde deyiskene vere bilerik 
        
            Eger : props onunde 2 noqte istifade edersek bu 'sayi1' adli props-a dinamik deyer 
            vereceyimiz menasina gelir. Yeni, 'sayi1' props-u Toplama komponentine dinamik olaraq  
            baglanilir ve onun deyeri kenarda gelir demekdir. 

            Eger kenardan deyer gelmeyecekse onda : istifade etmeye gerek yoxdur.

            : bu 2 noqte v-bind sozunun qisaltmasidir. Data (melumat) baglama ifadeisidir.
            
            'sayi1' props-unun deyerinin 's1' adlı deyiskenden geldiyini bildirir.
        -->
        <Toplama :sayi1="s1"  :sayi2="250" />

        <!-- : istifade etmedikde s1 sadece bir string-dir -->
        <Toplama sayi1="s1"  sayi2="250" />
    </div>
</template>

<script>

import Toplama from './subComponents/AltKomponent.vue';


export default {
    data() {
        return {
            // Deyeri deyiskene vererek komponent icinde cagiraraq istifade ede bielrik.
            // Yuxarida qeyd etdiyimiz kimi ...
            s1: 100
        }
    } ,

    components: {
        Toplama
    }
}
</script>