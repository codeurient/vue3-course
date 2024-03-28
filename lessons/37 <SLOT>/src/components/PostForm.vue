<template>
    <form @submit.prevent>
        <h4>Creating post</h4>
        <input v-model="post.title" class="input" type="text" placeholder="Title of post" >
        <input v-model="post.body" class="input" type="text" placeholder="Body of post" >
        <!-- 1) DUYME de ferqli sahelerde tez-tez istifade edildiyine gore, onun ucunde ayrica COMPONENT yarada bilerik. -->
        <my-button style="align-self: flex-end; margin-top: 15px;" @click="createPost">Create post</my-button> <!-- 4) Qeydiyyatli komponenti cagirirq.-->
    </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue"; // 2) Component-i IMPORT edirik. 

export default {
    components:{    
        MyButton    // 3) Import edilen komponenti qeydiyyata aliriq.
    },

    data() {
        return {
            post : {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title : '',
                body : ''
            }
        }
    },
}
</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
    }
    .input{
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }
</style>