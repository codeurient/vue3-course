<template>
    <form @submit.prevent>
        <h4>Creating post</h4>
        <input :value="title" class="input" type="text" placeholder="Title of post" @input="title = $event.target.value">
        <input :value="body" class="input" type="text" placeholder="Body of post" @input="body = $event.target.value">
        <button class="btn" @click="createPost">Create post</button>
    </form>
</template>

<script>
export default {
    
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