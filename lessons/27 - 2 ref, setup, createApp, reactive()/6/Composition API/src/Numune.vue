<template>
    <div class="app">
        <div> {{  str  }}</div><br><br>
        
        <a href="#" style="padding: 20px 10px; background-color: darkcyan;" @click.prevent="changeStr" > Change! </a>
    </div>
</template>

<script>
    import { ref, watch } from "vue";

    export default {
        setup() {

            const str = ref( 'Hello bro' );

            const changeStr = function() { 
                str.value = "Hello World";
            }

            // Watch metodu, eger data-da her hansisa bir deyisiklik bas vererse onda avtomatik isleyecek olan funksiyasdir. 1ci parametr yerinde
            // hansi data-ni izleyirikse onu qeyd edirik. 2ci parametr yerinde ise deyisiklik bas verdikde cagrilacaq funksiyani yaziriq.
            watch(str, function(){
                document.write("Was changed!");
            })

            return {str, changeStr};
        }   
    }
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>