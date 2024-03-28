<template>
    <div>
         <h3>List of users</h3>
         <!-- 
            POST deyiskenini :postDeyerleri PROPS-una gonderirik. 
            Bu :postDeyerleri adı PostItem faylinda yaratdigimiz PROPS-un adidir. 

            PostList ana elementdir PostItem alt elementdir. Ana elementden Alt elementde OBJECT gonderirik. 
         -->
         <post-item v-for="post in posts"  :postDeyerleri="post" />
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
     .post{
         padding: 15px;
         border: 2px solid teal;
         margin-top: 15px;
     }
 </style>