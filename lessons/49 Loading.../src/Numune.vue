<template>
    <div class="app">
        <h1>Page with posts</h1>
        <my-button @click="showDialog" style="margin: 15px 0;">Create post</my-button>        
        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>
        <!-- 5) isPostLoading xassesinin deyeri FALSE olduqda V-IF isleyecek ve ekrana data-lar yazdirilacaq -->
        <post-list v-if="!isPostLoading" :posts="posts" @remove="removePost" />
        <!-- 4) isPostLoading xassesinin deyeri TRUE olduqda V-ELSE isleyecek ve ekrana Loading... mesaji yazdirilacaq -->
        <div v-else>Loading...</div>
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";  
export default {
    components: {
        PostForm, PostList},
    data() {
        return {
            posts: [],
            dialogVisible: false,
            // 3) Xasse yaradaraq default olaraq FALSE deyeri veririk. 
            isPostLoading: false,
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
                // 5) DATA-lar yuklenenedek 'isPostLoading' xassesine TRUE deyeri veririk. Deyer TRUE olduqda V-ELSE isleyecek 
                this.isPostLoading = true;
                // 1) Data-lar sehifeye daxil olduqda aninda yuklenme gedir. Yuklenmeni gormek ucun dinamik gozletme yarada bilerik. Bunun ucun sorgumuzu setTimeout() metodumuza yerlesdiririk.
                setTimeout( async ()=>{
                // 2) Indi sayta daxil olduqda 1 saniye gozledikden sonra DATA-lar yuklenecek. Indi ele edek ki, istifadeci yukleme getdiyini basa dusmesi ucun data-lar yuklenene qeder
                // ekrana YUKLENIR deye mesaj yazdiraq.
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;
                    // 6) DATA-lar yuklendikden sonra ise  'isPostLoading' xassesine FALSE deyeri veririk. Deyer FALSE olduqda V-IF isleyecek. 
                    this.isPostLoading = false;
               }, 1000)
            }catch(e){
                console.log('error');
            } 
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }

    .app{
        padding: 20px;
    }
</style>