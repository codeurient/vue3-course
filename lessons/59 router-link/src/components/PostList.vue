<template>
    <div v-if="posts.length > 0">
         <h3>List of posts</h3>
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
.user-list-move {
  transition: transform 0.4s ease;
}
 </style>