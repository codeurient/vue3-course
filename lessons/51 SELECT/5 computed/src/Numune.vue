<template>
    <div class="app">
        <h1>Page with posts</h1>
        <div class="app__btns">
            <my-button @click="showDialog" >Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/> 
        </div>
        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>
        <!-- 
            6) 'sortedPosts' funksiyasi yeni ARRAY return edir ve bu yeni array-i evvel oldugu kimi gonderirik :posts props-una. 

            Evvel bele yazmisdiq:
            <post-list v-if="!isPostLoading" :posts="posts" @remove="removePost" />
         -->
        <post-list v-if="!isPostLoading" :posts="sortedPosts" @remove="removePost" />

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
    // 1) computed ile eyni neticeni nece elde ede bilerdik  ?
    computed :{
        // 2) Ilk once istediyimiz adda funksiya yarada bilerik. Burada kvadrat moterize icinde yazdigimiz 'spread operator'-dur. Yəni, yeni array yaratmaq
        // ucun istifade edilir. Siralama zamani kohne arrayi deyismeden yeni array yaratmaq ucun istifade edilir. this.posts kohne arraydir. Spread operator
        // yeni array yaradir ve kohne arrayin deyerlerini bu yeni array-a yerlesdirir.
        // 5) spread operator this.posts array-inin icine daxil olaraq butun elementleri tek-tek elde etmek ucundur. Tek tek elde edilen elementler ise []
        // yeni array icine yerlesdirilir. 
        sortedPosts() {
            // 7) Burda gorduyumuz SUAL isaresi nedir ? Buna (Optional Chaining Operator) deyirler. Könüllü Zəncirləmə Operatoru. Adı mentiqsiz olsada
            // menasi odur ki, Eger 'selectedSort' xassesinin deyeri yoxdursa onda olmuyan bir şey üzərində əməliyyat icra etmək istəsək belə xəta mesajı
            // almariq. Onun evezine UNDEFINED mesaji elde ederik. 
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));

            // 3) Bu cur de yazmaq olardi. Bele yazdiqda ise movcud array uzerinde deyisklik edilecekdir.
            // return this.posts.sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));

            // 4) Belede yazdiqda yeni ARRAY yaratmis oluruq. Ancaq 'this.posts' bir array oldugu ucun, array icine array qoymus oluruq ve 
            // muraciet etdikde [0] sifirinci indekse muraciet ederek hemin array-in icine girmek lazimdir.
            // return [this.posts][0].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        }
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
    .app__btns{ display: flex; justify-content: space-between; margin: 15px 0; }
</style>