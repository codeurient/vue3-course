<template>
    <div class="app">
        <div v-for=" item in computedArr"> 
            {{  item  }}
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                str: [5, 7, 3, 9, 6, 8, 14, 13, 4, 7, 2]
            }
        },
        computed: {
            computedArr() {
                return this.str.filter(item => item % 2 === 0);
            }
        }
    }
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>