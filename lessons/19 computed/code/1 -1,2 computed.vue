<template>
    <div>  {{ getIsimComputed }}  </div>
    <div>  {{ getIsimComputed }}  </div>
    <div>  {{ getIsimComputed }}  </div>

    <div>***********************************</div>

    <div>  {{ getIsimMethod() }}  </div>
    <div>  {{ getIsimMethod() }}  </div>
    <div>  {{ getIsimMethod() }}  </div>
</template>


<script>

/***
 * 
 * 3) computed - bu seçim methods seçimine benzesede aralarinda ferqler vardir.  methods ve computed arasındakı 
 * ferqleri sadalamaq olar ancaq yenede bu ferqi basa dusmek cox cetindir. Cunki, compyuted ile edilen her bir isi
 * methods ile methods ile edilen her biri isi computed ile etmek mumkundur. Ancaq bu ferqler arasinda ele birisi 
 * vardir ki, hemin ferq computed ve methods ferqini cox gozel basa dusmeyimize imkan yaradir. Bu cache-dir.
 * 
 * a) Cache melumatlarin muveqqeti olaraq yadda saxlanildigi yaddasdir. Asagidaki numunede data() metodunun 'isim' adli
 * xassenin deyerini hem COMPUTED ile hemde METHODS ile return etmisik. Yeni elde etmisik. COMPUTED bu elde edilen deyeri
 * 'CACHE' yaddasa salir ve her defe funksiyani cagirdiqda bu melumati CASHE yaddasdan goturerek istifade edir. METHODS ise 
 * her defe data() funksiyasindan bu 'isim' xassesinin deyerini tekrar-tekrar cagirir. 
 * 
 * Bunu subut etmek ucun COMPUTED ve METHODS icerisinde console penceresine bir seyler yazdirdiq. Console penceresine
 * baxsaq gorerik ki, yuxarida COMPUTED funksiyasini 3 defe cagirmagimiza baxmayaraq 1 defe console penceresine yazi yazir.
 * METHODS ise 3 defe. Bu da METHOD-un her defe yeniden cagrildigi menasina gelir. COMPUTED ise melumati bir defe yadda 
 * saxlayir ve artiq her defe CACHE-den goturur bu melumati. 
 * 
 * Ne vaxt ki, 'isim' xassesinin deyeri deyisecek onda COMPUTED teze deyeri elde ederek cache-i yenileyecek. 
 * 
 * OZET: Demeli METHDOS melumatlarin tekrar-tekrar cagrilmasi lazim gelen yerlerde istifade edilir. Bunun ucun adeten 
 * Method-lari EVENT-larla istifade edirler ki, her defe bir hadise bas verdikde yeniden cagrilsin. 
 * 
 * Computed ise sabit qalacaq melumatlari elde etmek istedikde istifade edilir ki, bu melumatlari ekrana yazdiraq ve hemin
 * melumat ekranda daimi olaraq qalsin. Ne vaxt ki, biz hemin melumati yenileyerik onda ekranda olan melumatda de yenilener.
 * Bele olduqda, Computed melumati cache-den goturduyunden proqramda bu melumati almaq ucun tekra-tekrar cagrilmaq mecburiyyetinde
 * qalmir ve daha suretli performans elde edirik.
 * 
 * Computed - hesablanmis demekdir. Computed-ler eslinde funksiya kimi yazilan xasselerdir. Bunun ucun cagrildiqlari zaman
 * onlerinde yumru morterize olmur. Vue js avtomatik olaraq hemin Computed xasseleri cagirir.
 * 
 * 4) watch
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
            isim : "Aradaki ferq"
        }
    },
    computed: {
        getIsimComputed(){
              console.log("Computed ile yazilan yazi");
              return this.isim;
        },
    },
    methods : {
        getIsimMethod(){
            console.log("Method ile yazilan yazi");
            return this.isim;
        }
    }
}
</script>


<style>

</style>