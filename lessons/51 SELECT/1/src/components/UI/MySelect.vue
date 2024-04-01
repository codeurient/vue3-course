<template>
    <!-- 1) v-model ile iki terefli elaqe yaradiriq sonra props ile ANA komponentden data gonderirik ALT komponente -->
    <select :value="modelValue" @change="changeOption"> <!-- 6) select ile secim etdikde 'changeOption' funksiyasi cagrilir -->
        <option disabled value="">Choose option</option>
        <!-- 4) PROPS ile ANA koomponentden gonderilen deyerleri burda, :value direktivi ile value atributuna veririk. -->
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',

        props: {
            // 2) Birinci props olaraq Title yaxud Body aliriq. Secimimizi Title-a goremi Body-ye goremi etmeyimiz ucun.
            modelValue : {
                type: String,
            },
            // 3) Ikinci props olaraq ise ANA komponentden Options ucun deyerler gonderirik. Dusen menuden sececeyimiz deyerler.
            options: {
                type: Array,
                // 5) Bos ARRAY-lar elde etmek ucun oxlu funksiyadan istifade etmek mesheletdir.
                default: () => []
            }
        },

        methods: {
            // 7) changeOption funksiyasinin EVENT parametri SELECT tag-ini elde edir. 
            changeOption(event) {  
                // 8) Bizde Bu tag-in icine girerek OPTION tag-ini cagirir sonra VALUE kodu ile hemin OPTION tag-inin deyerini elde ederek $EMIT ile ANA komponente gonderirik. 
                this.$emit('update:modelValue', event.target.value); 
                // 9) Gedirik Numune faylina ve <my-select v-model="selectedSort" /> yazaraq iki teref arasinda qarsiliqli elaqeni yaradiriq.
            }
        }
    }
</script>

<style scoped>

</style>



















<!-- ANA komponentden gelen deyerler Modelde yigilir. Bizde
        :value direktivinden istifade ederek option tag-inin deyeri ile modelin deyeri arasinda elaqe yaradiriq. Option tagi secildikde onun value 
        atributunda olan deyer Model ucun secilmis olacaq --> 