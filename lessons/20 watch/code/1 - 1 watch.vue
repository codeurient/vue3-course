<template>
    <p>Mesaj: {{ say }}</p>
    <button @click="say++">Artir</button>
</template>

<script>

/***
 * 
 * 4) watch - bu sozun menasi izlemek demekdir. Adindan da melum oldugu kimi bir seyleri izlemek ucun istifade edilir.
 * Bes neyi izleyir ? Ve izledikden sonra ne edir ? 
 * 
 * Watch, vue js-de bas veren melumat deyisikliyini izleyen ve hemin deyisiklik bas verdikde avtomatik funksiyani
 * cagiraraq ferqli emrler icra etmek ucun istifade edilen qaydadir.
 * 
 * Nedir bu melumat deyisikliyi dedikde nezerde tutdugumuz ? 
 * a) input sahesine yazi daxil etmek. Bu saheye elave edilen her bir simvol deyisiklik demekdir.
 * b) duymeni basaraq birseyleri aktivlesdirmek yaxud deaktivlesdirmek deyisiklikdir.
 * c) duyme yaradaraq hemin duyme basildiqda say artirmaq yaxud azaltmaq deyisiklikdir.
 * d) ve.s
 * 
 * Asagida 'data' bolmesinde 'say' adli xasse (variable, deyisken bele de demek olar) yaradaraq 0 (sifir) deyerini
 * teyin etdik ona. 
 * 
 * 'watch' bolmesinde ise bu deyiskeni eyni ad ile cagirmaq lazimdir. Sade bir kod yazmisiq. Duymeni basaraq
 * say artimi etdikde 'watch' bolmesinde olan eyni adli hemin say() funksiyasi cagrilaraq ve console metni yazir.
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
            say: 0
        }
    },
    watch: {
        say() {
            console.log('Say artir')
        }
  }
}
</script>


<style>

</style>