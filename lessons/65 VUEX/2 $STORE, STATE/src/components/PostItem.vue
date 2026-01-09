<template>
     <div class="post">
        <div>
            <!-- 1)  Hec bir PROPS yazmadan bir bazadan diger istenilen bazaya melumati oturmus olduq.  -->
            <div>{{ postDeyerleri.id }} likes = {{ $store.state.likes }}</div>
            <div><strong>Title: </strong>{{ postDeyerleri.title }}</div>
            <div><strong>Body: </strong>{{ postDeyerleri.body }}</div>
        </div>
        <div class="post__btn">
            <my-button @click="$router.push(`/posts/${postDeyerleri.id}`)">Open</my-button> 
            <my-button @click="$emit('remove', postDeyerleri)">Delete</my-button> 
        </div>
    </div>
</template>

<script>
export default {
    props: {
        postDeyerleri: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
    .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
     }
     .post__btn{
        display: flex;
     }
</style>