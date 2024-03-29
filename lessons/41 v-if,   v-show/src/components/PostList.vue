<template>
    <!-- 
        Butun postlar silindikden sonra ekrana xeberdarliq mesaji yazdirmaq istesek nece edeceyik ? Bunun ucun IF ile sert qosa bilerik. Eger post yoxdursa 
        ekrana mesaj yazdir deyeceyik. VUE js-de bunun ucun bele bir direktiv vardir: V-IF

        V-IF istifade etdiyimiz zaman H2 tag-i DOM agacinda eks olunmur ve yalniz postlar tam silindikden sonra ekrana teyin edilen mesaj yazdirilir.

        Ancaq ele lazim ola biler ki, h2 tag-i DOM agacinda evvelcen eks olunsun ve yeni eyni sekilde  postlar tam silindikden sonra ekrana teyin edilen mesaj 
        yazdirilsin. Onda, V-SHOW istifade etmek lazimdir. 
    -->
    <div v-if="posts.length > 0">
         <h3>List of posts</h3>
         <post-item class="post" v-for="post in posts"  :postDeyerleri="post"  :key="post.id" @remove="$emit('remove', post)"/>
    </div>
    <h2 v-else style="color: red;">
        List of posts is empty
    </h2>

    <!-- 
        <div v-show="posts.length > 0">
            <h3>List of posts</h3>
            <post-item class="post" v-for="post in posts"  :postDeyerleri="post"  :key="post.id" @remove="$emit('remove', post)"/>
        </div>
        <h2 v-show="posts.length === 0" style="color: red;">
            List of posts is empty
        </h2> 
    -->
 </template>
    
 <script>
 
 import PostItem from "@/components/PostItem";
 
 export default {
     components: { PostItem },
 
     props: {
         posts: {
             type: Array,
             required: true,
         }
     },
 }
 </script>
 
 <style scoped>

 </style>