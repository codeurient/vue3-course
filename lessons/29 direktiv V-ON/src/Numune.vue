<template>
    <div>
        <div>
            <!-- 
                Duymelerin islemesi ucun atribut elave etmek lazimdir. 
                Bu atributlara VUE js-de DIREKTIV-ler deyirler. Yəni, TƏLİMATLAR.

                v-on direktivini yazdiqda sonra telimatin ne oldugunu bildirmek lazimdir. Bunun ucun hemin direktivin onune EVENT elave etmeliyik.
                CLICK event-ini elave edirik. Yeni duyme basildiqda funksiya cagrilsin. 

                EVENT -lari qisa yazmaq istesek eger onda v-on evezine @ simvolundan istifade ede bilerik. 

                @click="addLike"

                
                vue.js devtools - chrome-da qurasdirmagimiz gerek tetbiqin adidir. Xetalari daha rahat tapmaq ucun istifade edilir.
            -->
            <button v-on:click="addLike">Like</button>
            <button v-on:click="addDislike">Dislike</button>
        </div>
        <div>How many likes: <strong>{{ like }}</strong></div>
        <div>How many dislikes:<strong>{{ dislike }}</strong></div>
    </div>
</template>

<script>



export default {
    data() {
        return {
            like: 0,
            dislike: 0,
        }
    },
    methods: {
        addLike() {
            this.like += 1;
        },
        addDislike() {
            this.dislike -= 1;
        },
    }, 
}
</script> 


<style>

</style>