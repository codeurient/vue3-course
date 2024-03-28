<template>
     <div class="post">
        <div>
            <div><strong>Title: </strong>{{ postDeyerleri.title }}</div>
            <div><strong>Body: </strong>{{ postDeyerleri.body }}</div>
        </div>
        <div class="post__btn">
            <!-- MyButton -->
            <my-button>Delete</my-button> 
        </div>
    </div>
</template>

<script>
// MyButton komponentini IMPORT etmisdik burda ancaq silerek main.js faylinda global sekilde qeydiyyata saldiq.
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
</style>