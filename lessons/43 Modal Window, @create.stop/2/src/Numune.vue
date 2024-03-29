<template>
    <div class="app">
        <h1>Page with posts</h1>
        <my-button @click="showDialog" >Create post</my-button>
        <!-- 
            3. Duymeni klikledikde SHOW props-una true deyerini gonderirik ve MODAL pencere acilir. 
        -->
        <my-dialog v-model:show="dialogVisible"> 
            <post-form @create="createPost"/> 
        </my-dialog>
        <post-list :posts="posts" @remove="removePost"/>
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
    components: {
        PostForm, PostList
    },

    data() {
        return {
            posts: [
                { id: 1,    title: 'JavaScript ',   body: 'JavaScript is a strong language'             },
                { id: 2,    title: 'Python ',       body: 'Python is a high-level, general-purpose'     },
                { id: 3,    title: 'PHP ',          body: 'PHP is a general-purpose scripting language' },
            ],
            // 1. Xasse yaradiriq ve deyer olaraq false veririk. Bu xasseni yuxarida <my-dialog v-model:show="dialogVisible">  cagiririq. 
            // 2. Eger bir basa <my-dialog v-model:show="false"> yazsaydiq onda xeta alacaqdiq. 
            dialogVisible: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog(){
            this.dialogVisible = true;
        }
    },
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }

    .app{
        padding: 20px;
    }
</style>