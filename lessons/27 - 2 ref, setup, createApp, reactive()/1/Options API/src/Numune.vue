<template>
    <div class="app">
        {{  str  }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                str: 'Hello World!'
            }
        }
    }
</script>

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>