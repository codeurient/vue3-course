<template>
    <div>
        <h1>Page with posts</h1>

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
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
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
        showDialog(){
            this.dialogVisible = true;
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed :{
       ...mapState({
            posts:          state => state.post.posts,
            isPostLoading:  state => state.post.isPostLoading,
            selectedSort:   state => state.post.selectedSort,
            searchQuery:    state => state.post.searchQuery,
            page:           state => state.post.page,
            limit:          state => state.post.limit,
            totalPages:     state => state.post.totalPages,
            sortOptions:    state => state.post.sortOptions,
       }),
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