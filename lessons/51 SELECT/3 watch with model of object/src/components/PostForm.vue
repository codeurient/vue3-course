<template>
    <form @submit.prevent>
        <h4>Creating post</h4>
        <my-input v-model="post.title" type="text" placeholder="Title of post" />
        <my-input v-model="post.body" type="text" placeholder="Body of post" />
        <my-button style="align-self: flex-end; margin-top: 15px;" @click="createPost">Create post</my-button>
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
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title : '',
                body : ''
            }
        }
    },
    // 1) Yuxarida POST adinda obyekt olan modelimiz vardir. Hemin modelin 2 sahesi movcuddur. Bu sahelere deyer daxil etdikde netice olaraq CONSOLE penceresine yazdirilan hecne gormeyeceyik.
    // watch : { post(newVal) { console.log(newVal); } } // Bu o demekdir ki, WATCH işləmir. Bəs necə etmək lazımdır ki, hər dəyişikliyi əldə edə bilək?

    // 2) Eger OBYEKT daxilinde bas veren her deyisikliyi WACTH ile gormek isteyirikse onda DƏRİN MÜŞAHİDƏ adlanan qaydanı tətbiq etmək lazımdır. Dərin müşahidə dedikdə nəzərdə tutulan şey
    // obeyktlerin daxilində olan digər xassələr, obyektler, array-lar ve.s kimi elementlerin HANDLE və DEEP ilə müşahidə edilərək baş verən dəyişikliklərin əldə edilməsidir.
    watch: {
        post: {
            handler(newVal) {
                console.log(newVal);
            },
            deep: true
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
    }

</style>