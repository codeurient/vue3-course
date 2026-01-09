<template>
    <div class="app">
        <div> {{  str  }}</div><br><br>
        
        <a href="#" style="padding: 20px 10px; background-color: darkcyan;" @click.prevent="changeStr" > Change! </a>
    </div>
</template>

<script>
    import { ref, reactive } from "vue";

    export default {
        setup() {

            // 1) Array-in ozunude elde etmek ucun VALUE acar sozunu yazmaliyiq.
            // const str = ref( [5, 7, 3, 9, 6] );
            // const changeStr = function() { 
            //     document.write( str.value[0] )
            // }
            // return {str, changeStr};


            // 2) VALUE olmadan array yaxud object deyerlerini elde etmek isteyirikse onda REACTIVE() metodunu import ederek istifade etmeliyik. 
            const str = reactive( [5, 7, 3, 9, 6] );
            const changeStr = function() { 
                document.write( str[0] )
            }
            return {str, changeStr};



        }   
    }
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>