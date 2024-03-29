<template>
    <!-- (show === true) yazmaq ile qisaca (show) yazmaq eynidir. -->
    <div class="dialog" v-if="show">
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',

        // Bu PROPS modal pencerenin gorsenib gorsenmeyeceyini teyin etmek ucun istifade edilir. Eger True olarsa goreceyik False olarsa yox.
        props: {
           show : {
                type: Boolean,
                default: false,
           }
        }
    }

</script>

<style scoped>
    .dialog{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }
    .dialog__content{
        margin: auto;
        background: white;
        border-radius: 12px;
        min-height: 50px;
        min-width: 300px;
        padding: 20px;
    }
</style>