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
            <!-- 
                1) Novbe geldi indi 'page'-in dinamik deyisdirilmesine. Div tag-i kliklendikde 'changePage' funksiyasi cagrilacaq. 10 dene ayri-ayri div tag-i vardir.
                @click EVENT-i hal-hazirda kliklenen div taginin nomresini qaytarir. 10 Dene div tag-i var ve her div tag-inin oz nomresi var. Bu nomreni arqument kimi 
                gonderirik asagida yaratdigimiz changePage() funksiyasina ve deyeri PAGE modelinin icine yazdiririq.

                2) 'current-page' klas adi her div tag-ine ayri-ayri elave edilir. pageNumber icide butun ededler var: pageNumber = 1,2,3,4,5,6,7,8,9,10
                page 1 ulduqda hemin 1 ededi 1ci div tag-i ucun true qaytarir. 1ci div tag-ine 'current-page' klas adi elave edilir. Digerlerinde bu klas adi olmur.
                page 2 ulduqda hemin 2 ededi 2ci div tag-i ucun true qaytarir. 2ci div tag-ine 'current-page' klas adi elave edilir. Digerlerinde bu klas adi olmur. ve.s
            -->
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
        // Her kliklenen DIV tag-inin deyerini 'page' modeline veririk.
        changePage(pageNumber) {
            this.page = pageNumber;
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