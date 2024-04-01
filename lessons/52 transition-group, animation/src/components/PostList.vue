<template>
    <div v-if="posts.length > 0">
         <h3>List of posts</h3>
         <!-- 1) Vue js-de V-FOR istifade etdikde, animasiyalar yaratmaq ucun 'transition-group' komponentinden istifade edilir. 
         Yaradilan qrupu adlandirmaq lazimdir bunun ucun ise 'name' atributundan faydalana bilerik. Hemin adtirubt adindan istifade
        ederek CSS stilleri yazmaq lazimdir. Bu css stilleri VUE saytinda movcuddur. Ordan goture bilerik.  --> 
         <transition-group name="user-list">
            <post-item class="post" v-for="post in posts"  :postDeyerleri="post"  :key="post.id" @remove="$emit('remove', post)"/>
         </transition-group>
    </div>
    <h2 v-else style="color: red;">
        List of posts is empty
    </h2>
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
 /* 2) Bu css stili ucun yazilan selector adi statik olaraq bele idi: list-item, list-enter-active ve.s. Hemin selector adinin evveline
 'name' atributuna verilen adi elave etmek lazimdir. VUE css stillerini isteye uygun deyisdirmek mumkundur. 
 https://v3.ru.vuejs.org/guide/transitions-list.html  */

.user-list-item{
    display: inline-block;
    margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active{
    transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to{
    opacity: 0;
    transform: translateX(120px);
}
/* Siyahini siraladiqda da animasiya tetbiq etmek mumkundur */
.user-list-move {
  transition: transform 0.4s ease;
}
 </style>