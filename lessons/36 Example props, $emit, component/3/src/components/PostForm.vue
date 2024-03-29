<template>
    <form @submit.prevent> <!-- SUBMIT edildikden sonra sehifenin yenilenmesini qapatmaq ucun @SUBMIT event-ina PREVENT modifikatorunu elave edirik. -->
        <h4>Creating post</h4>
        <!-- 1)
            HTML ve VUE arasinda qarsiliqli elaqe yaratmaq ucun ( :value="post.title" ve @input="post.title = $event.target.value" ) bu kodlardan istifade 
            etmek hem uzun hem yorucu hemde bas qarisdiricidir. 

            Bunun ucunde V-MODEL direktivinden faydalanaraq eyni neticeni elde etmek olar. 

            Artiq INPUT tag-ine yazdigimiz deyerleri elde ede bilirik. Geriye qaldi bu deyerleri Numune.vue faylinin icinde olan DATA() metodunun POSTS
            array-ina elave etmek.
         -->
        <input v-model="post.title" class="input" type="text" placeholder="Title of post" >
        <input v-model="post.body" class="input" type="text" placeholder="Body of post" >
        <!-- 
            2)
            ANA elementden ALT elemente birseyler gondermek ucun PROPS qaydasindan istifade etmeliyik demisdik. Bunu artiq etmisik. 
            ALT elementden ANA elemente birseyler gondermek ucun $EMIT qaydasindan istifade etmeliyik demisik. Indi bunu edek.

            INPUT tag-lerindeki deyerleri ne vaxt gondermek isteyirik ? BUTTON duymesine basdiqda. Duymeni basmaq bir hereket oldugu ucun bu duymeye
            @CLICK adli EVENT elave etmeliyik. Sonra ise @CLICK hadisesinin icinde hemin duyme basildiqda cagrilacaq FUNKSIYA-nin adini yaziriq. Meselen: createPost
        -->
         <button class="btn" @click="createPost">Create post</button>
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
            // 3) createPost() funksiyasi DATA() obyektinin POST xassesine: ID elave edir ve deyer olaraq hal-hazirki tarixi verir.
            this.post.id = Date.now();
            // 4) this acar sozu ile VUE js-in daxili $EMIT() funksiyasini cagiririq. 1ci parametr PostForm faylindan gonderilen deyerlerin Numune faylinda 
            // hansi ad ile elde edileceyini gosteren funksiya adidir. Yeni Bu parametri biz Numune faylinda funksiya adi kimi istifade edeceyik ki, hemin funksiya ile
            // Numune faylina gelen deyerleri DATA() obyektinin POSTS xassesine yerlesdirek. 

            // 2ci parametr ise hansi deyerler Numune faylina gonderilecekse hemin deyerleri ehtiva eden yxuarida ki, DATA() obyektinin POST xassesidir.
            this.$emit('create', this.post)
            this.post = {
                title : '', // 5) Bu hisse ise createPost() funksiyasi melumatlari gonderdikden onra DATA() obyektinin POST xassesinden deyerleri silmek ucundur. 
                body : ''   // POST xassesi V-MODEL direktivinin komekliyi sayesinde INPUT tag-i ile elaqelendirildiyinden avtomatik burda silinen deyer INPUT tag-inden de silinecek.
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