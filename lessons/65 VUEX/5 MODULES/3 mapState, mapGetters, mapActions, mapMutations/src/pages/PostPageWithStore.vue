<template>
    <div>
        <h1>Page with posts</h1>
        <!-- 
            7) V-MODEL ile STATE-ler nece istifade edilir ? 'searchQuery' artiq STATE icinde oldugunda V-MODEL ile bir basa tesir gostere bilmerik. 

            Bunun ucun EVENT ve PROPS istifade etmeliyik. 'setSearchQuery' adinda MUTATION yaradiriq ve INPUT elementi @UPDATE olduqda hemin MUTATION
            STATE-in 'searchQuery' xassesinin deyerini yenileyecek. Bu elaqeni qurmaq ucun ise :model-value atributundan istifade etmisik. 
        -->
        <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Search..." v-focus ></my-input>

        <div class="app__btns">
            <my-button @click="showDialog" >Create post</my-button>
            <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"/> 
        </div>

        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>

        <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />

        <div v-else>Loading...</div>

        <div v-intersection="loadMorePosts" class="observe"></div>
    </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
// 1) Komponentler icinde her defe:  $store.getters.post,  $store.state.post.limit   ve.s yazmaq uzun ve yorucu oldugu ucun VUEX-da hemin bu state, actions,
// getters, mutations ve.s kimi saheleri daha tez ve qisa formada elde etmek ucun bezi funksiyalar yaradiblar. Hemin funksiyalar bunlardir:
// 2) IMPORT etdikden sonra hemin funksiyalari cagiraraq istifade ede bilerik. 
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return { 
            dialogVisible: false,
        }
    },
    methods: {
        // 3) MUTATIONS ve ACTIONS-lar METHODS obyektinin icinde yazilir. mapMutations ve mapActions funksiyalarinin icinde parametr olaraq obyekt qeyd edirik.
        // Ve hemin obyektin icinde ise, hansi MUTATIONS-lari ve hansi ACTIONS-lari hansi ad ile COMPONENT icinde istifade etmek lazimdir onu qeyd edirik.
        ...mapMutations({
            setPage: 'post/setPage',
            // 8)
            setSearchQuery: 'post/setSearchQuery',
            // 9)
            setSelectedSort: 'post/setSelectedSort',
            // 10)
            removePost: 'post/removePost',
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts:    'post/fetchPosts',
        }),
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
    },
    mounted() {
        this.fetchPosts();
    },
    computed :{
        // 4) 
       ...mapState({
            // 5) STATE-leride ön şəkilçilər olmadan çağırmaq lazımdır. Bunun ucun oxlu funksiya yaradiriq. Oxlu funksiyanin parametri olan 'STATE' VUEX-da olan
            // 'STATE' sahesini elde edir. Konkret hansi STATE oldugunu bildirmek ucun ise MODUL adını yazmaq lazımdır: STATE.POST
            // Sonra ise hemin POST adli modula aid olan STATE sahesinden bize lazim olan xasseleri elde edirik.
            posts:          state => state.post.posts,
            isPostLoading:  state => state.post.isPostLoading,
            selectedSort:   state => state.post.selectedSort,
            searchQuery:    state => state.post.searchQuery,
            page:           state => state.post.page,
            limit:          state => state.post.limit,
            totalPages:     state => state.post.totalPages,
            sortOptions:    state => state.post.sortOptions,
       }),
        // 6) STATE ve GETTERS-ler COMPUTED obyektinin icinde yazilir. mapState ve mapGetters funksiyalarinin icinde parametr olaraq obyekt qeyd edirik.
        // Ve hemin obyektin icinde ise, hansi STATE-leri ve hansi GETTERS-leri hansi ad ile COMPONENT icinde istifade etmek lazimdir onu qeyd edirik.
        // THIS acar sozu ilede hemin metod adlarina muraciet etmek olar. 
       ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
       })
    },
    watch: {

    }
}
</script> 

<style>
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