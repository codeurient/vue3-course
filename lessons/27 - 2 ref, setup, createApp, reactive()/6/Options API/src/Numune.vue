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
                str: 'Hello bro'
            }
        },
        methods: {
            changeStr() {
                this.str = 'Hello World';
            }
        },
        watch: {
            str() {
                document.write('Was changed!');
            }
        }
    }

</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>