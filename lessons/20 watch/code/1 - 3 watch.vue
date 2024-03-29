<template>
    <input type="text" v-model="ad">
    <p> {{ xetalar[0] }} </p>
</template>

<script>

/***
 * 
 * V-MODEL  -  direktivi Vue.js-də məlumatların ikitərəfli bir-birine bağlanmasını təmin edən xüsusi direktivdir. 
 * Bu, tez-tez forma elementlərinin 'input' sahələrini idarə etmək üçün istifadə olunur. Meselen, <input> teqi ilə 
 * istifadə edildikdə, V-MODEL form elementinin dəyərini, komponent icinde yazdigimiz data tipine (hal-hazirda 'name') 
 * gondermek üçün istifadə olunur. Vue.js avtomatik olaraq məlumat modelini yeniləyir yaxud əksinə; Məlumat modeli 
 * dəyişdikdə, giriş sahəsi də yenilənir.
 * 
 * 4) watch - V-MODEL direktivi deyisikliyi 'ad' xassesine gonderir. WATCH ise hemin xassesenin deyerini avtomatik 
 * elde edir ve bizde 'if' ile bu deyisiklikler bas verdikde emrler icra edirik.
 * 
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
            ad: '',
            xetalar: [],
        }
    },
    watch: {
        ad(newValue) {
            this.xetalar = []
            
            if(newValue === ''){
                this.xetalar.push('Ad ve Soyad sahesi bos qoyula bilmez');
                // bos 'return' yazmaq yeni kodu dayandir demekdir. Eger kodu dayandirmasaq hem bu STRING hem asagida olan
                // STRING push() edilecekdir.
                return;
            }
            if(newValue.length < 6 || newValue.length > 25) {
                this.xetalar.push('Minimum 6, maksimum 24 simvol daxil ede bilersiniz');  
                return;
            }
        }
    },
}
</script>


<style>

</style>