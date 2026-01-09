<template>
    <div class="app">
        <div> {{  str  }}</div><br><br>
        
        <a href="#" style="padding: 20px 10px; background-color: darkcyan;" @click.prevent="changeStr" > Change! </a>
    </div>
</template>

<script>
    // 4)
    import { ref } from "vue";

    export default {
        setup() {
            // 1) Composition API-de yazilan funksiyalar reaktiv olmadiqlari ucun Options API-de oldugu kimi, THIS acar sozu ile cagirdiqlari 
            // deyiskenin deyerini deyise bilmirler. 
                // const str = 'Hello World!';
                // const changeStr = function() { this.str = 'New String'; }
                // return {str, changeStr};


            // 2) Bunun ucun REF() metodundan istifade etmek lazimdir. ref() link yaratmaq ucun istifade edilir.
                const str = ref( 'Hello World!' );
            // 3) 'VALUE' ref() obyektinin xassesidir. Deyerleri elde etmek ucun istifade edilir.
                const changeStr = function() { 
                    str.value = 'New String'; 
                }

                return {str, changeStr};
        }   
    }
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>