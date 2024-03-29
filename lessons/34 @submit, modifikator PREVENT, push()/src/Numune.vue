<template>
    <div class="app">
        <!-- 
            Her yeni post elave etmek ucun BUTTON duymesini basdiqda deyerler submit oldugu ucun sehifede yenilenme bas verir. Buna gorede gonderdiyimiz deyerler yoxa cixir. Bu brauserin standart ozunu 
            aparma seklidir. Brovserin bu ozelliyini qapatmaq ucun, preventDefault funksiyasini cagirmaq lazimdir. 
            
            Vue js-de hemin funksiyani istifade etmek ucun @SUBMIT event-ina PREVENT modifikatorunu elave edirik.   Modifikatorlar DOM EVENT-larinin davranışlarini dəyişdirmək üçün istifadə olunur.
            Meselen: click, keyup, submit ve.s bunlar DOM EVENT-laridir. PREVENT, ENTER ve.s ise event modifikatorlaridir. 
        -->
        <form @submit.prevent>
            <h4>Creating post</h4>
            <input :value="title" class="input" type="text" placeholder="Title of post" @input="title = $event.target.value">
            <input :value="body" class="input" type="text" placeholder="Body of post" @input="body = $event.target.value">
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
        // Duymeni basdiqda 'newPost' adinda obyekt yaradilir. Bu obyektin 3 xassesi var. 
        // a) 1ci xasseye (id) identifikator olaraq tarix veririk.
        // b) 2ci xasseye (title) INPUT taginden DATA() icindeki TITLE xassesine gonderilen deyeri veririk.
        // c) 3ci xasseye (body)  INPUT taginden DATA() icindeki BODY  xassesine gonderilen deyeri veririk.
        createPost() {
            const newPost = {
                // Bu deyerleri elde etdikden sonra, onlari DATA() icindeki POSTS array-ina yerlesdirmeliyik. Bunun ucun PUSH() metodundan istifade edeceyik.
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            // POSTS array-ini cagiririq ve newPost obyektini onun icine PUSH edirik. 
            this.posts.push(newPost)
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