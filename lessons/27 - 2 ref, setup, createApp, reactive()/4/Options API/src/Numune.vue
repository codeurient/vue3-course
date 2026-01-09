<template>
    <div class="app">
        <div> {{  str  }}</div><br><br>
        
        <a href="#" style="padding: 20px 10px; background-color: darkcyan;" @click.prevent="changeStr" > Change! </a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                str: [5, 7, 3, 9, 6]
            };
        },
        methods: {
            changeStr() {
                document.write(this.str[0]);
            }
        }
    };
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>