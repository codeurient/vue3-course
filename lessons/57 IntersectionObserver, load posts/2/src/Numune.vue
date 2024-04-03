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

<!-- 
    1) Vue.js elementleri yaxud komponentleri cagiraraq JavaScript-də istifadə edə bilmeyimiz ucun hemin element yaxud komponentlere link verilir. Link vermek ucun "REF" atributundan 
    (acar sozunden) istifade edilir. Hal-hazirda DIV tag-ine link vermis sayiliriq. Bu div tag-inin REF atributu icinde yazilan OBSERVER sozu hemin tag-i hansi ad ile elde edeceyimizi bildirir.

    Bu tag-in REF atributuna onun ucun ad veririk ki, hemin adı OBSERVE() funksiyasi içində yazaraq callback funksiyasına bildirək ki, kəsişmə hansı DOM elementi ilə müşahidə ediləcək. Yəni, Baxış 
    pəncərəsinə girən yaxud çıxan TAG budur və bu tag-i gordükdə callback funksiyası çağrılsın. 

    REF ilə link verilən DOM elementi artıq Component içində çağıraraq istifadə edə bilərik. Həmin DOM elementi component içində çağırmaq üçün belə yazırıq:   this.$refs.observer

    ref atirubutu icinde yazilan 'observer' sozu istenilen soz ola biler. 
-->
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
                this.isPostLoading = true;
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
            } finally{
                this.isPostLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
        
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };

        // 6) Xeta almamaq ucun ise CALLBACK xaricinde THIS acar sozunu SELF adli bir deyiskene vererek istifade edirik. CALLLBACK xaricinde istifade etdiyimiz THIS acar sozu VUE komponentidir.
        // VUE komponenti icinde ise diger butun metodlar, modeller ve.s movcuddur. Hemin metodlara, modellere ve.s muraciet etmek ucun ise artiq SELF deyiskeninden istifade ede bilerik.
        const self = this;

        const callback = function (entries, observer) {
            // 3) Her defe gorus penceresinde girdikde ve cixdiqda callback funksiyasi cagrilacaq. Qayidan netice ise beledir:
            // a) 0 IntersectionObserverEntry {time: 200, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: TRUE, …}
            // b) 0 IntersectionObserverEntry {time: 200, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: FALSE, …}
            // Girdikde TRUE cixdiqda ise FALSE aliriq. Ancaq bize lazim olan hemin funksiyanin sadece bir defe o da gorus penceresine girdiyimizde cagrilmasidir. Gorus penceresine
            // girib cixdigimizi ise hemin 'isIntersecting' acar sozunun deyerinden teyin edirik. TRUE olarsa girdik FALSE olarsa cixdiq demekdir. 
            // console.log(entries);
            // 4) IF konstruktorundan istifade ederek şert qosuruq ki, sadece TRUE olarsa POSTlari elave et. Movcud postlara yenilerini elave etmek ucun ise yuxarida loadMorePosts()
            // funksiyasini yaratmisdiq. Indide istediyimize nail olmaq ucun hemin o funksiyani cagirmaq lazimdir.
            if(entries[0].isIntersecting){
                // 5) THIS acar sozu normalda diger funksiyalari, modelleri ve.s cagirmaq ucun istifade edilir. Ancaq JS-de, IntersectionObserver obyektinin CALLBACK funksiyasi icinde THIS 
                // acar sozunuden istifade etdikde NULL deyerini aliriq. Buna gorede THIS acar sozunu bir basa yazaraq istifade etdikde xeta alariq. 
                self.loadMorePosts();
            }
            

           
        };
        const observer = new IntersectionObserver(callback, options);
        // 2) Bir soznen observe() metodu, izlənməsi, müşahidə edilməsi üçün DOM elementi qeydiyyata alır. Qeydiyyata alinan DOM element gorus penceresine girdikde yaxud cixdiqda 
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