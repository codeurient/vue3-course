<template>
    <div class="dialog" v-if="show" @click=hideDialog>
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// 2) 'toogleMixins' faylini istifade ede bilmeyimiz ucun Hemin fayli ilk once Import etmeliyik. Basda yazdigimiz 'toogleMixins' istediyimiz ad ola biler.
// Import etdikden sonra bu ad ile istifade edeceyimizi bildirmek ucundur hemin 'toogleMixins' yazisi... 
import toogleMixins from '@/mixins/toogleMixins';

    export default {
        name: 'my-dialog',
        // 1) tekrarlana bilecek hisseni burdan goturerek MIXINS icine yerlesdirdik. Sonra ise mixins-i 'MyDialog' yaxud eger basqa hardasa istifade edeceyikse 
        // hemin fayllarin icinde cagira bilerik.
        mixins: [toogleMixins]
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