<template>
    <div>
        <!-- 
            1) $ROUTE obyektinin komekliyi ile marsrut haqqinda melumatlar elde ede bilerik. Hemcinin parametrleride. Bunun ucun 'PARAMS' xassesinden istifade etmeliyik. 
            Bu xasse marsrutda movcud olan :ID kimi parametrleri cagirmaq ve onlarin deyerlerini elde etmek ucun istifade edilir: http://localhost:8080/posts/2
         -->
        <h1>This is a page with ID: {{ $route.params.id }}</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>