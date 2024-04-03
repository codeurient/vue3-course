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

        <div ref="observer" class="observe"></div>

        <!-- <div class="page__wrapper">
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber" 
                class="page" 
                :class="{'current-page' : page === pageNumber}" 
                @click="changePage(pageNumber)">
                {{ pageNumber }}
            </div>
        </div> -->
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
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        // },
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
                // 5) Her defe veb sehifeni asagi SCROLL etdikde yeni postlarin yuklenmesi ucun yeni sehifeye kecid etmek lazimdir. Bunun ucun de PAGE modelinin deyerini bir-bir artirmaliyiq.
                // 100 dene post varsa eger 10cu sehifeye catdiqda bu 100cu post menasina gelir ve page = 11 olduqda hemin 11ci sehifede post olmadigi ucun yenileri yuklenmir. Burada 
                // demisik ki, loadMorePosts() funksiyasi her defe cagrildiginda PAGE modelinin deyeri bir-bir artsin.
                console.log(this.page);
                console.log(this.totalPages);
                this.page += 1;

                // 3) Ve bu koduda hemcinin:  this.isPostLoading = true;
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
            } // 2) Her defe Yeni postlar ARRAY-a elave etdikde LOADING... mesajini yazdirmaga ehtiyac yoxdur. Bunun ucun bu kodu silirik:  finally{ this.isPostLoading = false; }
        }
    },
    mounted() {
        this.fetchPosts();

        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        // 1) SELF deyiskenine THIS acar sozunu vermeden daha qisa sekilde loadMorePosts() funksiyasini cagirmaq ucun OXLU funksiyadan istifade ede bilerik.
        // 6) if(entries[0].isIntersecting && this.page < this.totalPages) - bele yazmasaq PAGE modelinin deyeri her defe POST yuklenmese bele arta-arta gede biler. 
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.page < this.totalPages){
                this.loadMorePosts();  
            }
        };
        
        const observer = new IntersectionObserver(callback, options);
        // 4) Bir soznen observe() metodu, izlənməsi, müşahidə edilməsi üçün DOM elementini qeydiyyata alır. Qeydiyyata alinan DOM element gorus penceresine girdikde yaxud cixdiqda 
        // IntersectionObserver obyektinin callback funksiyasi her defe cagrilacaq.
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
        // page() {
        //     this.fetchPosts();
        // }
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
    .observe {
        height: 30px;
        background: green;
    }
</style>