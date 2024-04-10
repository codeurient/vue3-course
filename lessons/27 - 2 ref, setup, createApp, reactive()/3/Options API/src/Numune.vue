<template>
    <div class="app">
        <div> {{  str  }}</div><br><br>
        
        <a href="#" style="padding: 20px 10px; background-color: darkcyan;" @click.prevent="changeStr" > Change! </a>
    </div>
</template>

<script>
    import { ref } from "vue";

    export default {
        data() {
            return {
                str: 'Hello World!'
            };
        },
        methods: {
            changeStr() {
                this.str = 'New String';
            }
        }
    };

</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>