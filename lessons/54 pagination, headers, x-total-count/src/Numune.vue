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
            <!-- Vue js-de olan V-FOR - IN JavaScript de olan FOR - IN ile eyni deyildir. VUE js-de v-for in yazdiqda burda olan 'totalPages'
            deyeri qeder tekrarlansin menasina gelir. -->
            <div v-for="page in totalPages" :key="page" class="page">{{ page }}</div>
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
            // 1) Pagination yaratmaq ucun ilk once 2 dene model elave edirik. 1cisi sehifenin nomresi olacaq, 2cisi bir sehifede olan post sayı.
            page: 1,
            limit: 10,
            // 3) Cemi nece sehife olacagini ehitava edecek olan 'totalPages' adli modeli yaradiriq.
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
                // 2) link yerinde evvel əlnən girdiyimiz Query parametrini (?_limit=10) silerek, AXIOS-un 3cu parametri olan PARAMS obyektinin _PAGE ilə _LİMİT adlı  
                // xasselerine Modelden aldigimiz deyerleri yeniden elave edirik. Bu deyerler avtomatik olaraq linkimizin sonuna elave edilecekdir.
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                         _page: this.page,
                        _limit: this.limit
                    }
                });
                // 4) Bir sehifede cemi ne qeder post oldugunu oyrenmek ucun Inspect penceresini acaraq Network bolmesine kecit etmeliyik. Sonra ise linki secerek Header hisseden
                // postlarin umumi sayisini oyrene bilerik. Bu say 'x-total-count' adli deyiskenin icinde qeyd edilmisdir. NOT: ele bola bilerki bezi browserlerde Network-a girdikde
                // xeta mesaji gosterilsin yaxud umumiyyetle hecne gosterilmesin. Belelikle 100 / 10 = 10 edir. 
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