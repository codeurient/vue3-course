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
            3) DIV tag-i ile blok yaradiriq. Hemin bloku sehifenin sonunda siyahinin en altina qoyuruq. Brovserin Intersection Observer adinda xususi API-si vardir hansi ki, 
            onun komekliyi ile, bu blokun ne vaxt sehifenin sonunda peyda olacagini izleye bilerik. Yəni, veb sehifenin mueyyen bir hundurluyu var ve en sonda DIV tag-i movcuddur. 
            Bu hundurluyu asagi yuxari scroll ede bilirik ve en asagi scroll etdikde hemin blok peyda olacaq. Scroll en asagi catib hemin blok peyda olanda bir emeliyyat icra etmek 
            ucun callback funksiyadan istifade edeceyik. 

            Bu saytda hemin API haqqinda etrafli yazilmisdir: https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
        -->
        <div class="observe"></div>

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
        // 1) Bu funksiyani o vaxt cagirasiyiq ki, istifadeci sehifeni sona qeder scroll etsin. Sona catdiqda ise data-lar yuklensin. Data-larin yuklenmesi o vaxt bas veririk
        // ki, THIS.POST array-ina yenileri elave edilsin. Birden cox qayda var ki, bu qaydalardan istifade ederek, istifadecinin sehifeni sona qeder scroll edib etmediyini oyrenek.
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
                // 2) Serverden Response geldikden sonra elde etdiyimiz postlari POSTS array-ina gondermirik. Hemin postlari POSTS array-inin sonuna elave edirik.
                // Bunun ucun [] yeni array yaradiriq, sonra ise bu array-in icine elimizde olan postlari elave edirik: ( ...this.posts) sonra ise serverden gelen postlari 
                // elave edirik: (...response.data). Sonra ise bu array-yi yeresdiririk THIS.POSTS modelinin icine. 
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
        // 4) Komponent DOM-a elave edildikden sonra mounted() funksiyasinin icine hemin DIV blokunu izleyecek olan kodumuzu elave edirik.
        const options = {
            // 5) Burda root var idi ancaq biz onu sildik cunki root-un olmamasi avtomatik olaraq brovser penceresinin gorunen hissesinin tamamini nezere al demekdir. 
            rootMargin: "0px",
            threshold: 1.0,
        };
        // 6) callback funksiyasi bize lazim olan esas funksiyasdir. Hansi ki, bu funksiya hər dəfə o vaxt çağrılır ki, təyin edilmiş element baxış pəncərəsinə (viewport) daxil olsun 
        // yaxud baxış pəncərəsindən çıxsın. 
        const callback = function (entries, observer) {

        };
        // 7) IntersectionObserver (Kəsişmənin müşahidə edilməsi) klasi, JS-in daxili klasidir. 2 parametr qebul edir. 1ci parametr 2ci parametrden asilidir. 2ci parametr olan OPTIONS 
        // onu bildirir ki, baxış pəncərəsinə girdikmi yaxud baxış pəncərəsinden cixdiqmi. Baxış pəncərəsinə girdikde yaxud cixdiqda 1ci parametrde olan 'callback' her defe tekrar-tekrar 
        // cagrilacaqdir. Serhed olaraq ise brovser penceresinin tamamini nezerde tutmusuq. Cunki, ROOT xassesini bayaq sildik.  
        const observer = new IntersectionObserver(callback, options);
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