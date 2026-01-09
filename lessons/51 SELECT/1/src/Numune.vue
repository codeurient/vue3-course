<template>
    <div class="app">

        <h1>Page with posts</h1>
             
        <div class="app__btns">
            <my-button @click="showDialog" >Create post</my-button>
            <!-- 1) v-model direktivi ile qarsiliqli elaqe quraraq, ALT komponent olan MySelect-den $EMIT edilen deyeri alacaq 'selectedSort' modelini yaradiriq. -->
            <my-select v-model="selectedSort" :options="sortOptions"/> 
            <!-- 
                4) sortOptions array-ini :options direkivi ile props edirik MySelect komponentine. Burda olan : iki cut noqte V-BIND direktividir hansi ki, komponentler arasi elaqe
                yaratmaqda istifade edilir.  : cut noqteden sonra PROPS-un adini qeyd etmeliyik. Hemin ad ALT komponentde olan OPTIONS-dur. Ozetleyisi olsaq: V-BIND ile komponentler
                arasinda elaqe yaradaraq, sortOptions array-ini ANA komponentden ALT komponentin OPTIONS props-una gonderirik.
            -->
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
            // 2) ALT komponent olan MySelect-den ANA komponent olan Numune faylina $EMIT edilecek modeli yaradiriq.
            selectedSort: '',
            // 3) ANA komponent olan Numune faylindan ALT komponent olan MySelect faylina PROPS edilecek Array-i yaradiriq.
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
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
    .app__btns{ display: flex; justify-content: space-between; margin: 15px 0; }
</style>