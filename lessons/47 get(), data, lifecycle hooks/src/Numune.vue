<template>
    <div class="app">
        <h1>Page with posts</h1>
        <!-- 
            2) Duymeni basdiqda butun postlari elde edeceyik. Ancaq bize web sayta daxil oldugumuzda lazimdir bu postlar. 
            Bunun ucun LIFECYCLE HOOKS deyilen bir termin vardir hansi ki, bu haqqda 23 cu dersde etrafli melumat vermisdik. 

            Indi ise hemin etaplarin komekliyi ile istediyimiz neticeni elde edeceyik.
         -->
        <my-button @click="fetchPosts">Get posts</my-button>

        <my-button @click="showDialog" style="margin: 15px 0;">Create post</my-button>

        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>

        <post-list :posts="posts" @remove="removePost"/>
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";  

export default {
    components: {
        PostForm, PostList
    },

    data() {
        return {
            posts: [ 
                
            ],
            dialogVisible: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog(){
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                // 1) Bize gelen deyerler OBJECT-dir ve bu obyektin icinde DATA adli xasse vardir hansi ki, bu xassenin deyeri Arraydir. Hemin Array-in icinde de 
                // Obyektler vardir. Bu obyekrleri elde etmek ucun bele yaziriq: response.data.
                // Elde etdiyimiz deyerleri 'posts' array-inin icine qoyuruq.
                this.posts = response.data;
            }catch(e){
                console.log('error');
            }
        }
    },
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }

    .app{
        padding: 20px;
    }
</style>