<template>
    <div class="app">
        <h1>Page with posts</h1>
        <!--  1)  Muveqqeti olaraq bir duyme yaradiriq ki, klikledikde, @click event-i ile fetchPosts() adli funksiyamizi cagiraq  -->
        <my-button @click="fetchPosts">Get posts</my-button>
        
        <my-button @click="showDialog" style="margin: 15px 0;">Create post</my-button>
        <my-dialog v-model:show="dialogVisible"> 
            <post-form @create="createPost"/> 
        </my-dialog>
        <post-list :posts="posts" @remove="removePost"/>
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";  // Kitabxanani import edirik.

export default {
    components: {
        PostForm, PostList
    },

    data() {
        return {
            posts: [
                { id: 1,    title: 'JavaScript ',   body: 'JavaScript is a strong language'             },
                { id: 2,    title: 'Python ',       body: 'Python is a high-level, general-purpose'     },
                { id: 3,    title: 'PHP ',          body: 'PHP is a general-purpose scripting language' },
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
        // 2) Bu funksiya bize adidir. Yeni Vue js-in deyil. Bu funksiyadan fake bir serevere REQUEST (sorgu) gondermek ve RESPONSE (cavab) almaq ucun istifade edirik.
        async fetchPosts() {
            // 3) Kodlarimizi try-catch blokunda yaziriq ki, birden xeta bas verse hemin xeta haqqinda etrafli melumat ala bilek.
            try{
                // 4) response adinda deyisken yaradaraq elde etdiyimiz sorgunun neticesini bu deyiskene yerlesdiririk
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                // 5) neticenin gelib gelmediyini yoxlamaq ucun console bu deyiskeni yazdiririq.
                console.log(response);
            }catch(e){
                console.log('error');
            }
            // Daha etrafli: Bizim data elde edeceyimiz oz serverimiz olmadigi ucun, fakse server kimi istifade edeceyimiz saytdan data cekirik.
            // Bunun ucun istifade etdiyimiz saytin adi beledir: jsonplaceholder.typicode.com
            // Default olaraq 100 dene melumat verdiyi ucun hemin sayt, bizde QUERY parametrinden istifade ederek 10 dene limit teyin edirik: _limit=10
            // Serverden gelen melumatlari ise elde etmek ucun GET() metodundan yararlaniriq. 
            // REQUEST gondermek ucun AXIOS kitabxanasindan istifade edeceyik. Bunun ucun hemin kitabxanani yuklemek ve import etmek lazimdir: sudo npm -i axios
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