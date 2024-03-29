<template>
    <div class="dialog" v-if="show" @click=hideDialog>
        <!-- 
            1) Iki nomreli qovluqda bu problemi qaldirmadim ki burda ayrica gosterecem. Duymeni klikledikde MODAL pencere acilirdi
            div tag-ini klikledikde qapanirdi. Ancaq Mezmun olan hisse bu div tag-inin icinde oldugu ucun hemin mezmun hissenide klikledikde modal pencere
            qapanirdi. Bunun olmamasi ucun Mezmun hissenin div tag-ine @click.stop demek kifayetdir. Yeni hemin mezmun hissenin kliklenmesi ozelliyini dayandir.
        -->
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',

        props: {
           show : {
                type: Boolean,
                default: false,
           }
        }, 
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            }
        },
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