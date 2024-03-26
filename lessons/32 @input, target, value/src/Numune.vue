<template>
    <div class="app">
<!-- 
    Model-de edilen deyisiklik INPUT-a gelir, Ancaq INPUT-da edilen deyisiklik MODEL-e gelmir. Bunun sebebi biz INPUT tag-i icinde bas veren deyisikliyi izlemirik. 

    INPUT tag-inde bas veren deyisikliyi izlemek ucun @input EVENT-indan istifade etmeliyik. İstifadəçi INPUT tag-ine deyer daxil etdikdə @input EVENT-i işə salınır.
    @input EVENT-inin icinde funksiyamizi cagirirq. Eger istifadeci INPUT tag-ine deyer yazarsa hemin bu funksiya isleyecek.

    V-BIND evezine qisaca :VALUE yazmaq da olar. 
-->
        <form>
            <h4>Creating post</h4>
            <input :value="title" class="input" type="text" placeholder="Title of post" @input="inputTitle">
            <input :value="body" class="input" type="text" placeholder="Body of post">
            <button class="btn" @click="createPost">Create post</button>
        </form>

        <div class="post" v-for="post in posts">
            <div><strong>Title: </strong>{{ post.title }}</div>
            <div><strong>Body: </strong>{{ post.body }}</div>
        </div>
    </div>
</template>

<script>



export default {
    data() {
        return {
            posts: [
                { id: 1,    title: 'JavaScript ',   body: 'JavaScript is a strong language'             },
                { id: 2,    title: 'Python ',       body: 'Python is a high-level, general-purpose'     },
                { id: 3,    title: 'PHP ',          body: 'PHP is a general-purpose scripting language' },
            ],
            title: '',
            body: '',
        }
    },
    methods: {
        // INPUT tag-ine deyer daxil etdikde EVENT aliriq. VUE js-de hemin EVENT icinde TARGET adinda xasse var. Bu TARGET input tag-inin ozudur.
        // Yəni, TARGET xassesini INPUT tag-ine muraciet etmek ucun istifade edirik. Sonra ise VALUE yazaraq hemin tag-in icinden DEYERINI aliriq.
        inputTitle(event) {
            // Elde etdiyimiz deyeri DATA() icinde olan TITLE xassesine gonderirik.
            this.title = event.target.value;
        }
    },
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
    .app{
        padding: 20px;
    }
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