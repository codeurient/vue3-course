<template>
    <div>
        <div>{{ like }}</div>
    </div>
</template>


<script>

/***
 * 
 * Bu obyekt {} icinde yazilan vue komponent seçimləri asagidakilardir:
 * 
 * 1) data - komponent daxilində istifadə olunacaq məlumatları müəyyənləşdirir. 
 * Bu məlumatlari komponentin HTML və ya komponentin metodları daxilində istifade etmek olar.
 * HTML icinde melumatlari elde etmek ucun {{ }} iki qat bezekli morterizeden istifade edilir. Buna interpolyasiya deyirler.
 * Metodlarin icinde melumatlari elde etmek ucun ise 'this' acar sozunden istifade edilir/
 * 
 * 2) methods
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
    }
}

</script>


<style>

</style>