//! 1)
// Mixins ile Component eyni isi gorur. Her ikside eyni datalara, metodlar, compyuted, watch ve.s funksialara sahibdirler. 
// Sekil 1 de oldugu kimi.

// Mixins nedir ? Mixins terminini basa dusmek ucun bu derse qeder kecmis oldugumuz diger tekrarlanmanin aradan qaldirimasi 
// ucun etmis oldugmuz hereketlere baxaq. 

// a). VUE sablonlarinin tekrarlanmasinin aradan qaldirilmasi. Yəni, sablonun sablon icinde tekrarlnasmi.
// Meselen, 'HEADER' hisseni ayri bir fayla qoyaraq diger sehifelerde istifade ederek tekrarlamani aradan qaldiririq.

// b). Soblondaki elementlere tetbiq edilen scriptlerin tekrarlnmasi.
// Meselen, 2 ferqli sehifede input tag-i var. Bu sehifeye daxil olduqda avtomatik input tag-inde fokuslanmaq isteyirik.
// Her faylda her tag ucun eyni kodu iki defe tekrar-tekrar yazmaqdansa hemin xususiyyeti emele getiren kodu ayri bir fayla qoyaraq 
// bu ferqli sehifelerde bir kod istifade ede bilerik. Buna direktiv dedik.

// c). Scriptlere tetbiq edilen scriptlerin tekrarlnamasi. 
// Meselen, True ve False olduqda emeliyyat icra edecek kodumuz var deyek. Buna misal kimi Modal pencereni gostermek olar.
// Modal pencerenin acilmasi ucun kod yazmisiq. Her iki kod tam bir-birine benzemir ancaq kodlarin bir hissesi eynidir deye dusunek.
// True olduqda acilsin False olduqda baglansin. Hemin eyni olan hisseni ayri bir fayla qoyuruq ve iki ferqli modal pencereni
// emele getiren kodlara eyni olan yeri inteqrasiya edirik. Buna da VUE js-de 'MIXINS' deyirler.

//!  2)
// 'mixins' adina qovluq ve icinde 'toogleMixins.js' faylini yaradiriq. Bu fayldan tekrarlanacaq hisseni ehtiva eden obyekti export edirik
export default {
    props: {
        show : {
             type: Boolean,
             default: false,
        }
    }, 

    data() {

    },

    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },

    mounted() {

    },
    // ve.s
}