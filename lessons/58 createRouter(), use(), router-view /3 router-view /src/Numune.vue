<template>
    <!-- 1) Bu klas adina tetbiq edilen css stilleri butun sehifeler ucun eyni oldugu ucun toxunmadiq. -->
    <div class="app">
        <!-- 
            2)  <router-view>       - cari marşruta uyğun gələn komponentləri göstərmək üçün istifadə olunan komponentdir.
         -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
</style>