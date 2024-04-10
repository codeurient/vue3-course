<template>
    <div class="app">
        <div> {{  str  }}</div>

        <a href="#" style="padding: 20px 10px; background-color: darkcyan;" @click.prevent="sayHello" > Say hello! </a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                str: 'Hello World!'
            };
        },
        methods: {
            sayHello() {
                document.write('Hello bro!');
            }
        }
    };
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>