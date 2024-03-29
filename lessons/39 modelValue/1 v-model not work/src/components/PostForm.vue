<template>
    <form @submit.prevent>
        <h4>Creating post</h4>
        <!-- 
            Normalda INPUT tag-ine daxil etdiyimiz deyerler POST obyektinin (title ve body) xasselerine deyer olaraq gonderilirdi. Ancaq INPUT 
            tag-ini ayrica bir komponent kimi istifade etmek istediyimizden onu UI faylina elave etdik. Artiq bu xasseler hemin deyerleri almir.

            V-MODEL avtomatik olaraq tehlil edirdi istifadecilerin girdikleri deyerleri. Yalniz, hal-hazirda yazdigimiz formaya gore bu mumkun deyil.

            Hemin problemi aradan qaldirmaq ucun 'V-MODEL' evezine 'modelValue' istifade etmeliyik.
         -->
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
}
</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
    }

</style>