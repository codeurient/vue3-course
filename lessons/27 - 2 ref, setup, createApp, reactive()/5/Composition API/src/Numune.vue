<template>
    <div class="app">
        <div v-for=" item in computedArr"> 
            {{  item  }}
        </div>
        
    </div>
</template>

<script>
    import { ref, reactive, computed } from "vue";

    export default {
        setup() {

            const str = reactive( [5, 7, 3, 9, 6, 8, 14, 13, 4, 7, 2] );

            // 1) computed() metodlar verilenlere gore emeliyyatlar icra etmek ucun istifade edilir.  
            const computedArr = computed(() => { 
                return str.filter(item => item%2 === 0) 
            }) 

            return {str, computedArr};
        }   
    }
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>