<template>
    <div class="app">
        <div> {{  str  }}</div>

        <a href="#" style="padding: 20px 10px; background-color: darkcyan;" @click.prevent="sayHello" > Say hello! </a>
    </div>
</template>

<script>
    export default {
        setup() {
            const str = 'Hello World!';

            // Funksiyalar normal js funksiyalari kimi yaradilir ve yene islemesi ucun mutleq return etmek lazimdir.
            const sayHello = function() {
                document.write('Hello bro!');
            }

            return {str, sayHello};
        }
    }
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>