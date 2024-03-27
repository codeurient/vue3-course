<template>
    <div class="app">
        <!--  
            1) @create EVENT-i ile PostForm faylindan $EMIT edilen createPost() adli funksiyani burda yeniden eyni ad ile yazaraq yaradiriq.
        -->
        <post-form @create="createPost"/>
        <post-list :posts="posts" />
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
            // 4) POSTS arrayinda daxil edilen obyektler PROPS vasitesi ile ( <post-list :posts="posts" /> ) gonderilir PostList faylina.
            posts: [
                { id: 1,    title: 'JavaScript ',   body: 'JavaScript is a strong language'             },
                { id: 2,    title: 'Python ',       body: 'Python is a high-level, general-purpose'     },
                { id: 3,    title: 'PHP ',          body: 'PHP is a general-purpose scripting language' },
            ],
        }
    },
    methods: {
        // 2) Bu funksiyanin POST parametri avtomatik olara PostForm faylinda $EMIT edilen deyerleri elde edir.
        createPost(post) {
            // 3)  Hemin POST parametrini PUSH() metodu ile DATA() obyektinin POSTS arrayina gonderirik.
            this.posts.push(post);
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


