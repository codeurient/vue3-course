<template>
    <form @submit.prevent>
        <h4>Creating post</h4>
        <!-- 
            :value="post.title" bu kod ve @input="post.title = $event.target.value" bu kod birlikde istifade edildikde VUE ve HTML arasinda iki terefli
            qarsiliqli elaqe yaradilmis olur. 

            :value="post.title" bu kod onun ucun lazimdir ki, VUE terefde edilen deyisiklik HTML terefinde oz eksini tapsin. Yəni, INPUT tag-inin
            value atributuna POST obyektinin TITLE xassesinde girilen DEYERI veririk.

            @input="post.title = $event.target.value" bu kod onu bildirir ki, HTML terefde INPUT tag-ine daxil etdiyimz deyer VUE teref olan POST obyektinin
            TITLE xassesine gonderilsin. @input EVENT-i bu tag-e daxil edilen ($event.target.value) deyeri gonderir (post.title) POST obyektinin title xassesine.
         -->
        <input :value="post.title" class="input" type="text" placeholder="Title of post" @input="post.title = $event.target.value">
        <input :value="post.body" class="input" type="text" placeholder="Body of post" @input="post.body = $event.target.value">
        <!-- heleki @click event-ini silirik -->
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