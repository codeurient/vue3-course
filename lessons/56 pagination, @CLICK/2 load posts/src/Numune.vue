<template>
    <div class="app">
        <h1>Page with posts</h1>

        <my-input v-model="searchQuery" placeholder="Search..."></my-input>

        <div class="app__btns">

            <my-button @click="showDialog" >Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/> 
        </div>

        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>

        <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />

        <div v-else>Loading...</div>

        <div class="page__wrapper">
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber" 
                class="page" 
                :class="{'current-page' : page === pageNumber}" 
                @click="changePage(pageNumber)">
                {{ pageNumber }}
            </div>
        </div>
        
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
        changePage(pageNumber) {
            this.page = pageNumber;
            // 1) Indi novbe geldi her 'PAGE' deyisdikde hemin sehifeye uygun POST-larin yuklenmesine. Bunun ucun changePage() funksiyasinin icinde fetchPosts() funksiyasini
            // cagirmaq lazimdir.

            // 2) 100 dene post varsa ve her sehife ucun 10 post gorsensin demisikse onda demeli 10 dene de 'page' movcuddur. Bu 'page' modelinin deyeri her deyisdikde,
            // asagida yaratmis oldugumuz fetchPosts() funksiyasinin icindeki LINK-e mentiqnen bele yazmis oluruq:
            // https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=2&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=3&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=4&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=5&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=6&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=7&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=8&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=9&_limit=10
            // https://jsonplaceholder.typicode.com/posts?_page=10&_limit=10
            // changePage() funksiyasinin icinde fetchPosts() funksiyasini cagirmaqda meqsed odur ki, 'PAGE' modelinin deyeri deyisdikde her defe onunla birlikde deyisen bu
            // linkleride fetchPosts() funksiyasi istifade ederek yeniden cagiraq ki, yeni linke sahib olan sehifeni yukleyerek deyisiklikleri gore bilek. 
            this.fetchPosts();
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
        }
    },
    mounted() {
        this.fetchPosts();
    },
    computed :{
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery.toLowerCase()))
        }
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
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
</style>