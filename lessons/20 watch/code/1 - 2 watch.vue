<template>
    <p>{{ isActive }}</p>
    <button @click="isActive = !isActive">Toggle Active</button>
</template>

<script>

/***
 * 
 * 4) watch bolmesinde yaratdigimiz funksiyalar icinde hemmise 2 parametr yazmaq lazimdir. Istifade etmesek
 * bele bunu yazmaq meslehetdir. Yazmasaq da kod isleyecek ancaq yazmaq meslehetdir. Biz 2 parametrin ikisinide 
 * yaziriq ancaq lazim olan parametri istifade edirik. Eger ikiside lazim olarsa onda ikisinide istifade edirik.
 * 
 * Bu parametrler avtomatik olaraq kohne ve teze deyerleri yeni deyim bas vermeden evvel olan ve deyisim bas 
 * verdikden sonra olan deyerleri elde edir. Hemin elde etdiyimiz deyerlere esasen ferqli emeliyyatlar icra ede bilerik.
 * 
 * Asagida 'isActive' xassesine 'false' deyerini verdik. isActive xassesi FALSE -dursa ve hemin xassenin onune ! nida 
 * simvolu qoyduqda TRUE elde edirik. Cunki ! nida da FALSE-dur ve 2 FALSE birlesdikde 1 TRUE verir.
 * 
 * Yuxarida duymeni basdiqda isActive xassesine FALSE veririk. TRUE olur, sonra TRUE-ya yene false veririk FALSE olur.
 * 
 * Ve 'wacth' icerisinde yaratdigimiz isActive() funksiyasinin parametrleri bu deyisen deyerleri avtomatikq qebul edir.
 * Hemin deyerleri sadece ekrana yazdirirq. 
 * 
 * Sonraki numune de artiq deyisen deyerler esasinda nece emeliyyat icra ede bilerik onu gosterecem.
 * 
 * 5) props
 * 6) created
 * 7) mounted
 * 8) updated
 * 9) destroyed
 * 
***/

export default {
    data() {
        return {
            isActive: false
        }
    },
    watch: {
        isActive(newValue, oldValue) {
            console.log(`Teze deyer: ${newValue},  \nKohne deyer: ${oldValue}`);
        }
    },
}
</script>


<style>

</style>