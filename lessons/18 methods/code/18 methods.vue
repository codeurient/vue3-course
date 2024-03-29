<template>
    <div>
        <div>{{ like }}</div>
        <button @click="increment">Artir</button>
    </div>
</template>


<script>

/***
 * 
 * 
 * 1) data
 * 
 * 2) methods - HTML icinde metodlardan istifadə etmək üçün adeten EVENT-lardan (hadisə) faydalaniriq. 
 * Əgər biz düyməyə basıldıqda artım metodunu çağırmaq istəsək, <button> elementinin daxilində @click 
 * direktivindən (event-da deyirler) istifadə edə bilərik.
 * 
 * 3) computed
 * 4) watch
 * 5) props
 * 6) created
 * 7) mounted
 * 8) updated
 * 9) destroyed
 * 
***/

export default {
    data() {
        return {
            like: 0
        }
    },
    methods: {
        increment() {
            this.like++;
        },
    },
}

</script>


<style>

</style>