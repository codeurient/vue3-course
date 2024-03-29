<template>
    <div>
         <h3>List of users</h3>
         <post-item class="post" v-for="post in posts"  :postDeyerleri="post" />
    </div>
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