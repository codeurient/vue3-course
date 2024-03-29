<template>
     <div class="post">
        <div>
            <div><strong>Title: </strong>{{ postDeyerleri.title }}</div>
            <div><strong>Body: </strong>{{ postDeyerleri.body }}</div>
        </div>
        <div class="post__btn">
            <!-- 1) DUYME de ferqli sahelerde tez-tez istifade edildiyine gore, onun ucunde ayrica COMPONENT yarada bilerik. -->
            <my-button>Delete</my-button> <!-- 4) Qeydiyyatli komponenti cagirirq.-->
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";    // 2) Component-i IMPORT edirik.

export default {
    components:{    
        MyButton    // 3) Import edilen komponenti qeydiyyata aliriq.
    },

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