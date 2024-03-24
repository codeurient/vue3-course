<!-- AnatKomponent.vue -->
<template>
    <div>
        <h1>{{ like }}</h1>
        <!--
            ! Burani en sonda oxu....
            AnatKomponent oz icinde AltKomponent-i yerlesdirir ve 'mesaj' props-unu 'Salam!' deyeri ile gondererek
            AltKomponent-e melumat ötürür. 
        -->
        <UsaqKomponent mesaj="Salam!" />
    </div>
</template>

<script>
/***
 * !! ILK BURANI OXUMAQ LAZIM 
 * 5) props - Vue.js-də bir komponente, kənardan (basqa bir komponentden) data (melumatlar) gondermek üçün props 
 * xassəsindən istifadə edilir. Yeni, komponentler arasinda bir-birine melumat oturulmesinde istifade edilen 
 * xasseye PROPS xassesi deyilir. 
 * 
 * PROPS adeten ANA komponentden ALT komponente melumat oturmek ucun istifade edilir. 
 * 
 * Ancaq bunun ekside ( ALT komponentden ANA komponente de ) mumkundur. Sadece meslehet gorulmur. Bunun 
 * ucun sonraki derslerde kececeyimiz $EMIT qaydasindan istifade edeceyik. 
 * 
 * HTML atributlari 'case-insensitive'-dirler ['inˈsensətiv]. Yəni, boyuk herfe kicik herf ferqi yoxdur. Boyukde 
 * yazilsa eynidir kicikde yazilsa eynidir.
 * 
***/

// AltKomponent.vue faylini istifade ede bilmek ucun hemin fayli ilk once 'UsaqKomponent' adi ile import edirik.
// Niye UsaqKomponent yazdiq ? Cunki gostermek ucun ki, hemin fayli oz adi ile import etmek vacib deyildir. Ferqli ad qoymaq olar. 
import UsaqKomponent from './subComponents/AltKomponent.vue';

export default {
    data() {
        return {
            like: 0
        }
    } ,
    // components,  VUE komponentlerini import etdikden sonra AnaKomponent-in icinde istifade etmeye imkan saglayan obyektdir.
    // components obyekti icinde birden cox alt komponent teyin etmek mumkundur. 
    components: {
        // Bu obyekt icinde teyin edilen ve şablonda istifade edilen AD import edilen AD ile eyni olmalidir. 
        // Ve komponent adlari Şablonda TAG adları kimi yazılmalıdır.  <UsaqKomponent mesaj="Merhaba!" />
        UsaqKomponent
    }
}
</script>


<style>

</style>