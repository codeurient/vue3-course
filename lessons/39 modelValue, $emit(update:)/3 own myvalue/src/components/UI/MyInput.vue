<template>
    <input :value="myvalue" @input="updateInput" class="input" type="text">
</template>
    
 <script>
 export default {
    name: 'my-input',

    props: {
        myvalue: [String, Number]
    },

    methods: {
        updateInput(event) {
            this.$emit('update:myvalue', event.target.value)
        }
    },
}
 </script>
 

 <style scoped>
    .input{
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }
</style>