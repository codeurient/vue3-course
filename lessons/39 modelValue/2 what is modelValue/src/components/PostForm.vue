<template>
    <form @submit.prevent>
        <h4>Creating post</h4>
        <!-- 
            'modelValue' nedir ? 

            v-model ve :modelValue her ikiside ANA ve ALT komponentler arasinda melumatlarin mubadilesi ucun istifade edilir. v-model daha sade ve rahatdir.
            Ancaq INPUT tag-ini ayri bir komponent kimi UI qovluguna elave etdiyimizden aradaki elaqeni ayirmis olduq. Yəni INPUT tag-i evvel bu PostForum faylinda idi
            ve girilen deyerler V-MODEL ile avtomatik olaraq qebul edilir sonra ise POST obyektine gonderilirdi. 

            Indi ise INPUT tag-i ALT komponent olaraq UI qovlugundadir. Hemin ALT komponentde PROPS yazaraq ANA komponenten gonderilen deyerleri 'modelValue' xassesine elave edirik.

            Bu fayl icinde yazilan V-MODEL avtomatik olaraq ANA komponenti ALT komponentin 'modelValue' xassesi ile elaqelendirir. Input tag-ine daxil edilen deyerleri V-MODEL 
            komekliyi ile avtomatik olaraq 'MyInput' (ALT komponent) faylinda olan PROPS-un 'modelValue' xassesine gonderilir. 

            Sonra ise PROPS-da olan hemin 'modelValue' xassesi INPUT tag-inin :VALUE direktivine oturulur.  Belelik de :VALUE direktivinin DEYERI 'modelValue' xassesi ile teyin  
            edilmis olur.

            Nedir bu :VALUE direktivi ? :VALUE, JS kodlari ile yazilmis INPUT tag-inin VALUE atributunu teyin eden direktiv adlanir. Bu atribut INPUT tag-inin baslangicda ki, deyerini
            teyin edir. Yeni meselen veb sehifeye daxil olduqda INPUT tag-ine ozumuz bir deyer yaziriq. Bu deyer evvelceden yazili olsun deye VALUE atributundan istifade ede bilerik.

            Hal-hazirda etdiyimiz de VALUE atributuna yazilan deyeri elde etmek sayilir. 
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