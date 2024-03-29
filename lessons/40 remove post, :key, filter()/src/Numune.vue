<template>
    <div class="app">
        <post-form @create="createPost"/>
        <!-- 
            1) PostList komponentinden $EMIT edilen @remove EVENT-ini cagiraraq duyme basildiqda 'removePost' adli ozumuzun yaratdigi funksiya işləsin deyirik.
            2) Bu removePost funksiyasinin (psot) parametri avtomatik olaraq kliklenen postu (obyekt) elde edir.
         -->
        <post-list :posts="posts" @remove="removePost"/>
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
    components: {
        PostForm, PostList
    },

    data() {
        return {
            posts: [
                { id: 1,    title: 'JavaScript ',   body: 'JavaScript is a strong language'             },
                { id: 2,    title: 'Python ',       body: 'Python is a high-level, general-purpose'     },
                { id: 3,    title: 'PHP ',          body: 'PHP is a general-purpose scripting language' },
            ],
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            // filter() metodu butun deyerleri elde edir ve 'p' parametrine verir. 'p' parametrinin icinde hal hazirda 'posts' arrayinin butun deyerleri var.
            // Bu deyerler obyektlerdir. Noqte ile obyekte muraciet ederek 'id' xassesi ile deyerleri cagiririq. Bu deyerleri Duyme kliklendikde elde etdiyimiz
            // post-un 'id' deyerleri ile muqayise edirik. Meselen ucun 1ci post-a klikledik deyek. Elde edeceyimiz 'id' 1-dir. Muqayise asagidaki sekilde olacaq.
            // 1 !== 1 - false
            // 2 !== 1 - true
            // 3 !== 1 - true
            // Hansi deyerlerde True elde edirikse filter() metodu hemin deyerleri bize geri ARRAY olaraq qaytaracaq. 
            this.posts = this.posts.filter(p => p.id !== post.id);
        }
    },
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }

    .app{
        padding: 20px;
    }
</style>