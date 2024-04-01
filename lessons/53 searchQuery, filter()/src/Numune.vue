<template>
    <div class="app">
        <h1>Page with posts</h1>
        <!-- 1) Axtaris sistemi yaradiriq. INPUT tag-ini cagiraraq V-MODEL direktivi ile iki terefli elaqe yaradiriq. Model adi olaraq 'searchQuery' yaziriq.
        Ozumuzden yaziriq hemin adı.  -->
        <my-input v-model="searchQuery" placeholder="Search..."></my-input>

        <div class="app__btns">
            <my-button @click="showDialog" >Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/> 
        </div>
        
        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>
        <!-- 7) artiq post-list komponentine sortedAndSearchedPosts() funksiyasini veririk. -->
        <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />

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
            // 2) searchQuery modelimizi elave edirik. Input tag-ine daxil edilen deyerler bu modele yazdirilir.
            searchQuery: '',
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
    computed :{
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        // 3) Sıralanmış ARRAY-ya gore necə axtarış ede bilerik ? Bunun ucun yeni yaratdigimiz computed xassenindeki funksiyada evvel yaratdigimiz funksiyani istifade ede bilerik.
        sortedAndSearchedPosts() {
            // 4) return this.sortedPosts deyerek ilk once siralanmis deyerleri elde edirik. sortedPosts() funksiyasi ARRAY qaytardigi ucun filter() metodundan istifade edeceyik.  
            // 5) this.posts ARRAY-dir. filter() metodu bu arrayin icinden her deyeri ayri-ayri alaraq POST parametrine yerlesdirir. Ayri-ayri olan her deyer obyektdir. Bunu gormek ucun
            // bele yaza bilersiz: return this.sortedPosts.filter(post => console.log(post))
            // 6) post.title yazaraq basliq metnleri elde edirik. includes() metodu ise movcudlugu yoxlayir. Bu metoda arqument kimi 'searchQuery' modelini veririk. Yəni, input tag-ine 
            // daxil edilen deyer 'post.title' icinde movcuddurmu kimi sorgu yaratmaq ucun?! 
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))

            // 8) Evvel sortedPosts computed adini yazmisdiq ki funksiya return etsin neticeni. Indi ise bu adi pozduq ve yeni computed olan sortedAndSearchedPosts funksiyasini yazdiq.
            // Nece olur ki bes 'sortedPosts' funksiyasi yenede title ve body-ye gore siralama ede bilir? Cunki 'sortedAndSearchedPosts' funksiyasi ilk once 'sortedPosts' funksiyasini return edir:
            // (return this.sortedPosts). Sonra ise filter() metodu ile SIRALANAN postlari filtirleyirik. 
        }
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
    .app__btns{ display: flex; justify-content: space-between; margin: 15px 0; }
</style>