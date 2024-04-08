<template>
    <div>
        <h1>Page with posts</h1>
        <my-input v-model="searchQuery" placeholder="Search..." v-focus ></my-input>
        <div class="app__btns">
            <my-button @click="showDialog" >Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/> 
        </div>
        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>
        <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
        <div v-else>Loading...</div>
        <div v-intersection="loadMorePosts" class="observe"></div>
    </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";  
export default {
    components: { PostForm, PostList },
    data() {  return {  /* 1) Burda olan kodlari STATE sahesine yerlesdirdik  */ }  },

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
        // 3) Burada olan fetchPost() ve loadMorePosts() funksiyalarini ACTION sahesine yerlesdirdik. 
    },
    mounted() {  /* this.fetchPosts(); */  },

    computed :{  /* 2) Burda olan kodlari GETTERS sahesine yerlesdirdik. */  },
    
    watch: { }
}
</script> 

<style>
    .app__btns{ display: flex; justify-content: space-between; margin: 15px 0; }
    .page__wrapper {
        display: flex;
        margin-top: 15px;
    }
    .page{
        border: 1px solid black;
        padding: 10px;
    }
    .current-page {
        border: 2px solid teal;
    }
    .observe {
        height: 30px;
        background: green;
    }
</style>