<template>
    <div v-if="posts.length > 0">
         <h3>List of posts</h3>
         <post-item class="post" v-for="post in posts"  :postDeyerleri="post"  :key="post.id" @remove="$emit('remove', post)"/>
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

 </style>