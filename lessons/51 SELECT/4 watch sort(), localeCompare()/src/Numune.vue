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
        // 4) newValue parametri secilen modelin deyeridir (title yaxud body ). Asagida this.selectedSort evezine newValue-da yazmaq olardi. 
        selectedSort(newValue) {
            console.log(newValue);
            // 1) siralamaq ucun SORT() metodundan istifade edeceyik. Bu metod callback funksiya qebul edir. Hemin funksiyanin 2 parametri var
            // bu parametrler bizim bir-biri ile muqayise edilecek post-larimizdir.
            this.posts.sort((post1, post2) => {
                // 2) post1 ve post2 her ikiside eyni obyektlerdir. 'selectedSort' xassesinin deyerinden (title yaxud body) asili olaraq POST obyektinden lazi molan melumati elde edeceyik.
                // Yəni, post['title'] olsa, onda basliq metnlerini post1['body'] olsa, onda mezmun metnlerini elde edeceyik. 
                // 3) title-llari title-llar ile muqayise edirik. body-leri body-ler ile muqayise edirik.
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
            });
        }
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
    .app__btns{ display: flex; justify-content: space-between; margin: 15px 0; }
</style>