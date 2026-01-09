<template>
    <div class="app">
        <h1>Page with posts</h1>
             
        <div class="app__btns">
            <my-button @click="showDialog" >Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/> 
        </div>

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
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'By title'},
                {value: 'body',  name: 'By body'}
            ]
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
    },
    watch :{
        // Bu numunede olan 'selectedSort' model-i sade bir misaldir ve sadece true ile false qaytarir. Eger WACTH sistemini obyekt ucun tetbiq etseydik 
        // onda daha ferqli bir formada yazmali olacaqdiq. Meselen: PostForm komponentinde buna bir misal yaza bilerik.
        selectedSort(newValue) {
            console.log(newValue);
        }
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
    .app__btns{ display: flex; justify-content: space-between; margin: 15px 0; }
</style>