<template>
    <div class="post" v-for="post in posts">
        <div><strong>Title: </strong>{{ post.title }}</div>
        <div><strong>Body: </strong>{{ post.body }}</div>
    </div>
</template>

<script>
export default {
    props: {
        // posts - bu bizim Numune.vue faylindan gonderdiyimiz ARRAY-dir. 

        // Numune.vue faylinin icinde  <post-list /> adinda component yaratmisiq.

        // Hemin POSTS array-i da yerlesir DATA() obyektinde Numune.vue faylinin icinde. 

        // Bu DATA() obyektinin icinde yerlesen POSTS array-ini  <post-list :posts="posts"/> komponentinin icine qoyduqda hemin POSTS avtomatik olaraq bu fayla gelir.

        // Yuxarida V-FOR -dan istifade ederek array-in icinde ayri-ayri elde etdiyimiz obyektleri cagiraraq deyerleri ekrana yazdirirq.
        posts: {
            type: Array,
            required: true
        }
    },
}
</script>












































<style scoped>
    .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>