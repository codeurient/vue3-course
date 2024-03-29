<template>
    <form @submit.prevent>
        <h4>Creating post</h4>
        <!-- 
            VUE 3 versiyasinda v-model direktivini bu cur yazmaq yerine: v-model="post.title"
            iki noqte ile de yaza bilerdik. v-model iki noqte ve hansi atribut ile elaqelendirmek isteyirikse hemin atributun adini ayrica qeyd ede bilerik. 
            Meselen, hal-hazirda INPUT tag-inin VALUE atributu ile elaqelendirmek istediyimiz ucun bele yaziriq: v-model:value="post.title"

            Eger bir basa atribut adi yazsaq onda 'modelValue' yazmaga ehtiyac yoxdur. 

            Ve hemin atribut adi formalnidir yeni elaqe yaratmaq ucun istediyimiz adi yaza bilerik. myvalue kimi. 
         -->
        <my-input v-model:myvalue="post.title" type="text" placeholder="Title of post" />
        <my-input v-model:myvalue="post.body" type="text" placeholder="Body of post" />
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