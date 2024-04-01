<template>
    <div class="app">
<!-- 
    Post-lari dinamik sekilde elave edek. Bunun ucun INPUT tag-lerimiz var ve onlardan deyerleri elde etmeyi bacarmaliyiq. Ve duymeye EVENT teyin etmeliyik ki, basdiqda hemin deyerleri bize gondersin.
    Bunun ucun IKI terefli elaqe qurmaq lazimdir. Istifadeci INPUT-a deyer girdikde hemin deyerler avtomatik olaraq bizim modelimize gonderilmelidir. Deyer VALUE demekdir ve JS derslerinden de bilirik ki,
    deyerleri hemin VALUE atributunun icinden elde edirik. 

    Atributa daxil edilen deyeri elde etmek ucun V-BIND direktivinden istifade edeceyik. Bu direktiv V-MODEL ile demek olarki eyni isi gorur. Ancaq:
    1) V-MODEL - sadece form tag-inin elementleri ile istifade edilir. Bu direktiv atributlara yox bir basa tag-in icinde yazilir.
    2) V-BIND  - html tag-lerinin istenilen atributu ucun istifade edile biler. Model icinde DEYISKENLERE girilen deyerler ATRIBUTLARA ve ATRIBUTA girilen deyerler DEYISKENLERE oturulur. Belelikle 2 terefli elaqe yaranmis olur.
-->
        <form>
            <h4>Creating post</h4>
            <input :value="title">
            <input v-bind:value="body" class="input" type="text" placeholder="Body of post">
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