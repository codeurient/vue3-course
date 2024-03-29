<template>
    <div class="app">
        <!-- 
            1) MyDialog faylinin icinde olan <slot></slot> tag-lerine, <post-form/> avtomatik elave edilecek.
            2) MyDialog faylini index.js icinde import etdiyimiz ucun Numune.vue icinde import etmeye ehtiyac yoxdur.
            3) Numune.vue faylinda MyDialog.vue import edildiyi ucun hemin bu MyDialog icinde olan props-u Numune faylinda istifade ede bilirik.
            4) SHOW props-una TRUE deyerini gonderirik.  
        -->
        <my-dialog :show="true"> 
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
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
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