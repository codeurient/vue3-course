<template>
    <select :value="modelValue" @change="changeOption"> 
        <option disabled value="">Choose option</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',

        props: {
            modelValue : {
                type: String,
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(event) {  
                this.$emit('update:modelValue', event.target.value); 
            }
        }
    }
</script>

<style scoped>

</style>



















<!-- ANA komponentden gelen deyerler Modelde yigilir. Bizde
        :value direktivinden istifade ederek option tag-inin deyeri ile modelin deyeri arasinda elaqe yaradiriq. Option tagi secildikde onun value 
        atributunda olan deyer Model ucun secilmis olacaq --> 