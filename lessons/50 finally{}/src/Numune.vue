<template>
    <div class="app">

        <h1>Page with posts</h1>

        <my-button @click="showDialog" style="margin: 15px 0;">Create post</my-button>     

        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>
        <post-list v-if="!isPostLoading" :posts="posts" @remove="removePost" />

        <div v-else>Loading...</div>
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
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
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
                // setTimeOut() test meqsedli gozletme yaratmaq ucun idi.. Yuklenme eger gec olarsa onda finally{} blokunda 
                // Loading... mesajini ekrana yazdir deye bilerik. Loading... sozu ekrana 1 saniye gozledikden sonra yox yuklenmenin agirligindan asili olaraq
                // data-lar yuklenen muddet erzinde yuklenene qeder ekranda Loading... sozunu goreceyik. 
                this.isPostLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            }catch(e){
                console.log('error');
            } finally{
                this.isPostLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }

    .app{
        padding: 20px;
    }
</style>