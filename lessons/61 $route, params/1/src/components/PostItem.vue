<template>
     <div class="post">
        <div>
            <div><strong>Title: </strong>{{ postDeyerleri.title }}</div>
            <div><strong>Body: </strong>{{ postDeyerleri.body }}</div>
        </div>
        <div class="post__btn">
            <!-- 
                1) Her post ucun unikal olan dinamik link yaratmaliyiq. 
             -->
            <my-button>Open</my-button> 
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