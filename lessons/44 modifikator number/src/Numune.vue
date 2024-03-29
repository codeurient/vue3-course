<template>
    <div class="app">
        <h1>Page with posts</h1>
        <!-- 
            number modifikatoru olmasa input tag-ine girilen deyer number olsa bele string kimi dirnaqciqlar icinde yazdirilir
            Eger number modifikatorundan istifade etsek onda input tag-ine girilen deyerler dirnaqciqlar olmadan elave edilecek.
         -->
        <input type="text" v-model.number="araBosluqlariniYoxEtmek">

        <my-button @click="showDialog" style="margin: 15px 0;">Create post</my-button>

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
            dialogVisible: false,
            // araBosluqlariniYoxEtmek 
            araBosluqlariniYoxEtmek: '',
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