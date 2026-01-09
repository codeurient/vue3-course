<template>
    <div class="app">
        <h1>Page with posts</h1>
             
        <div class="app__btns">
            <my-button @click="showDialog" >Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/> 
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
            // 1) select icinden çeşidləmənin aparılacağı option-ni seçə və buna uyğun olaraq postlar olan array-i sıralaya bilerik. Bunun ucun WATCH xassesinden istifade edeceyik. 
            // Bu xassei haqqinda 20ci dersden artiq bilirik. VUE js modelinde deyisiklik bas verdikde hemin xasse icinde olan funksiya avtomatik cagrilir. Meselen: SELECT tag-i
            // ile OPTION secmek deyisiklik etmek menasina gelir. Bu deyisiklik edildiyinde WATCH xassei islyecek ve bu xasse de yerlesen funksiya icinde, postlar olan array-i sıralamasi 
            // ucun kodlar yazacagiq. 
            // Eyni neticeni elde etmek ucun Computed funksiya yaratmaq olardi. Ancaq compyuted funksiyalar ile gorulen isler keş yaddasa elave 
            // edilir. Watch funksiyalar ile gorulen isler keş yaddasa elave edilmir ve her defe yenidən çağrılır. 
            // Computed funksiyalar dedikde normal ozumuzun hemise yaratdigi terzden funksiyalar nezerde tutulur. Keş yaddasa elave edilir dedikde ise yəni, bir defe OPTION secirik 
            // ARRAY-da olan deyerler siralanir ikinci defe basqa OPTION secdikde hecne baş vermir, cunki funksiyanin gorduyu iş keşlənmiş olur.
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
    watch :{
        // 2) Deyisikliyi izləyə bilmək üçün WATCH ile yaradilan funksiya adı ve model adı eyni olmalidir. Yəni, WACTH funksiyasi o vaxt
        // isleyir ki, selectedSort modeli deyişsin.
        selectedSort(newValue) {
            console.log(newValue);
        }
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .app{ padding: 20px; }
    .app__btns{ display: flex; justify-content: space-between; margin: 15px 0; }
</style>