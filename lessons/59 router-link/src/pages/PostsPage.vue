<template>
    <div>
        <h1>Page with posts</h1>

        <my-input v-model="searchQuery" placeholder="Search..."></my-input>

        <div class="app__btns">
            <my-button @click="showDialog" >Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/> 
        </div>

        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>

        <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />

        <div v-else>Loading...</div>

        <div ref="observer" class="observe"></div>
    </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
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
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
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
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                         _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil( response.headers['x-total-count'] / this.limit );
                this.posts = response.data;
            }catch(e){
                console.log('error');
            } finally{
                this.isPostLoading = false;
            }
        },
        async loadMorePosts() {
            try{
                this.page += 1;

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                         _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil( response.headers['x-total-count'] / this.limit );
                this.posts = [...this.posts, ...response.data];
            }catch(e){
                console.log('error');
            } 
        }
    },
    mounted() {
        this.fetchPosts();

        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.page < this.totalPages){
                this.loadMorePosts();  
            }
        };
        
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },


    computed :{
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
    }
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