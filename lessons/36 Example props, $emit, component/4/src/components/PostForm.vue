<template>
    <form @submit.prevent>
        <h4>Creating post</h4>
        <input v-model="post.title" class="input" type="text" placeholder="Title of post" >
        <input v-model="post.body" class="input" type="text" placeholder="Body of post" >
        <button class="btn" @click="createPost">Create post</button>
    </form>
</template>

<script>
export default {
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
    .btn{
        margin-top: 15px;
        align-self: flex-end;
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
        cursor: pointer;
    }
    .btn:hover{
        background-color: teal;
        color: #fff;
    }
</style>