<template>
    <div>
        <h1>Welcome to my web</h1>
        <!-- 
            1) Indi nece bir sehifeden diger sehifeye kecid etmek olar onu oyrenek. LINK kimi isleyecek elementleri yaratmaq ucun <a> tag-inden yox
            <router-link> komponentinden istifade edeceyik. Bu komponent icinde 'TO' propsundan istifade ederek link vermek istediyimiz sehifenin adini 
            qeyd edirik.

            Hal-hazirda diger sehifelere bizi yonlendiren linkler 'Main' ana sehifede yerlesir. Ancaq yaxsi olarki bu linkleri ayrica bir fayl icine
            qoyaraq istifade edek.
        -->
        <router-link to="/posts"> Posts </router-link>
        <router-link to="/about"> About </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>