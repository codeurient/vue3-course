<template>
    <!-- 
        1) @click EVENT-i ile duyme kliklendikde 'hideDialog' funksiyasini cagirirq.
     -->
    <div class="dialog" v-if="show" @click=hideDialog>
        <div class="dialog__content">
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
            // 2) Iki terefli elaqe yaradaraq bu funksiyanin komekliyi ile ALT komponentden ANA komponentde EVENT $EMIT edirik. 
            // Proqram hardan bilir ki, MyDialog.vue faylini, Numune.vue faylina $emit etmek lazimdir? 
            // Yaxud nece olur ki, yuxarida @click EVENT-i herekete kecdikde hideDialog() funksiyasi cagrilacaq ve bu funksiya icinde olan $EMIT funksiyasi 
            // show PROPS-unu UPDATE EVENT-i ile yeniledikden sonra hemin YENILENEN deyeri Numune.vue faylina gondermek lazimdir ? 

            // my-dialog komponenti Numune komponentinde IMPORT edilibdir. $emit funksiyasi icinde UPDATE event-i SHOW adini gorur ve bilirki bu adda
            // olan neyise yenilemek lazimdir. Hemin SHOW adini da biz v-model:show deye Numune komponentinde yazaraq qarsi tereflerin bir-birini tanimasini saglamisiq.  

            // Bu SHOW PROPS-da default olaraq false qeyd edilmisdir ki, sehifeye daxil olduqda MODAL pencere qapali olsun. Hemin default deyer props ile ANA komponentden 
            // ALT komponente true geldikde deyisir. Numune komponentinde <my-button @click="showDialog" > var ve duyme kliklendikde PROPS hemin deyeri alaraq default olan 
            // deyeri true-ya cevirir buna gore de modal pencere gorsenir. 
            // Bu cur qarsiliqli bir-birine TRUE & FALSE gonderme isini heyata kecire bilmek ucun V-MODEL direktivinden istifade etmisik. 

            // 1ci olaraq bu hideDialog() olmasa <my-button @click="showDialog" >  yenede isleyecek. İslemesi ucun sadece V-MODEL ile elaqe qurmaq kifayetdir.
            // 2ci olaraq div tag-i kliklendikde hideDialog() -> $EMIT -> UPDATE event-i ile SHOW xassesinin deyerini FALSE etmekdir. Yəni, div tag-i kliklenir 
            // Numune komponentinde olan  <my-dialog v-model:show="true"> olur. 

            // V-MOLDE iki komponent arasinda elaqe yaradaraq Numune komponentinde olan duyme kliklendikde SHOW-a TRUE deyeri gondermek ucun istifade edildi.   Gonderilen deyeri PROPS ile aldiq.
            // V-MODEL iki komponent arasinda elaqe yaradaraq MyDialog komponentinde olan div tag-i kliklendikde SHOW-a FALSE deyeri gondermek ucun istifade edildi. GELEN deyeri $EMIT ile gonderdik.
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