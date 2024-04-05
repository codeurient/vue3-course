<template>
    <!-- 1) Naviqasiya hissesini yaradiriq. -->
    <div class="navbar">
        <!-- 
            3) DIV tag-inede EVENT vere bilerik kliklendikde marsrut teyin etmek ucun.
            
            Bu LINK-ler statikdir. Statik o demekdir ki, butun sehifeler ucun eyni isi gorur yəni, bir yere yonlendirir bizi. Ancaq LINK vardir hansi ki,
            spesifikdir. Spesifik o demekdir meselen, postlar vardir ve her postun ozune mexsus linki vardir. 
         -->
        <div @click="$router.push('/')" style="cursor: pointer;">VUE 3 course</div>
        <div class="navbar__btns">
            <!-- 
                2) Nece ede bilerik ki, duymeni basdiqda sehifler arasi kecidler ede bilek ? Bunu ucun duymeni link etmek lazimdir.
                Budun komponentlerde '$router' adinda OBYEKT vardir. Bu obyektin onunla birlikde istifade edilecek coxlu metodlari vardir.
                Hemin metodlarda bize lazim olaninin adi PUSH() metodudur. Bu metod marsruta yolu gonderir. 
            -->
            <my-button @click="$router.push('/posts')" style="margin-left: 20px;">Posts</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px;">About</my-button>
            <!-- 
                <router-link style="border: 2px solid teal; padding: 10px 20px; margin-left: 20px; text-decoration: none; color: teal;" to="/posts"> Posts </router-link>
                <router-link style="border: 2px solid teal; padding: 10px 20px; margin-left: 20px; text-decoration: none; color: teal;" to="/about"> About </router-link> 
            -->
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar{
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .navbar__btns{ margin-left: auto;}
</style>