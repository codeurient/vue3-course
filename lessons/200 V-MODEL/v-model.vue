<template>

    <input type="text" v-model="name">

    <p> {{ name }} </p>

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
 * 
***/

export default {
    data() {
        return {
            name: '',
        }
    },
}
</script>


<style>

</style>