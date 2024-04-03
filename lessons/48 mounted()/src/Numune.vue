<template>
    <div class="app">
        <h1>Page with posts</h1>
            <!-- Her komponentin hookileri ve xususi funksiyalari vardir hansi ki, bunlar proqramin mueyyen merhelelerinde, etaplarinda işləməyə başlayırlar.
            Mesel ucun: beforeCreate. 
            1) beforeCreate: bu funksiya komponent yaranmamisdan evvel çağrılır. 
            2) created:      bu funksiya komponent yarandiqdan sonra ancaq DOM agacina monte edilmemisden evvel çağrılır. Monte yəni, mantajlamaq.
            3) beforeMount:  bu funksiya komponent                         DOM agacina monte edilmemisden evvel çağrılır. Monte yəni, mantajlamaq.

            created ve beforeMount bir-birine benzedi ele deyil mi ? Aralarindaki ferq asagidakilardır:
            a) created     funksiyasinda komponent başlanğıc mərhələsini yeni yaranma merhelesini kecdi ancaq hem DOM agacina hemede ANA komponente qosulma imkani yoxdur.
            b) beforeMount funksiyasinda komponent başlanğıc mərhələsini yeni yaranma merhelesini kecdi ve DOM agacina qosulma imkani var ancaq heleki elave edilmeyib.

            4) mounted      bu funksiya komponent DOM-a uğurla elave edildikden sonra çağırılır. Artiq bu merhelede DOM agaci ile islemek mumkundur. Yəni, yeni elementler
                            yeni stiller elave ede yaxud sile bilerik. İstifadəçilər komponentlə qarşılıqlı əlaqədə ola, məlumatlar daxil edə, düymələri klikləyə və digər 
                            hərəkətləri yerinə yetirə bilərlər. Xarici menbelerden, serverlerden data-lar yukleye bilerik. 

            Komponent DOM agacina montaj (mounted) edildikden sonra, hansisa melumatlar yenilene, deyise biler. Melumatlar yenilenende, deyisende komponent yeniden render 
            edilecek. Renderinq ne demekdir ? Renderinq, melumatlarin deyismesi zamani web sehifenin ve ya komponentin vizual gorunusunun yenilenmesi, yeniden formalasmasi demekdir.

            Komponent renderinq edildiyinde bu deyisiklikleri izleye bilmeyimiz ucun elave 2 hook movcuddur. a) beforeUpdate    b) updated
            5) beforeUpdate  bu funksiya komponent yenilenmeden ve bu yenilenmeler DOM agacina elave edilmeden evvel çağrılır.
            6) updated       bu funksiya komponent yenilendikden ve bu yenilenmeler DOM agacina elave edildikden sonra çağrılır.


            7) beforeUnmount bu funksiya komponent DOM agacindan silinene qeder çağrılır.
            8) unmounted     bu funksiya komponent DOM agacindan silindikden sonra çağrılır.

            Qisaca komponent 4 merheleden kecir: Yaradilmasi, Montajlanmasi, Yenilenmesi, Dagidilmasi.

            Burda heleki en esas ve bize lazim olacaq funksiya MOUNTED funksiyasidir. -->
        <my-button @click="showDialog" style="margin: 15px 0;">Create post</my-button>
        <my-dialog v-model:show="dialogVisible">  <post-form @create="createPost"/>   </my-dialog>
        <post-list :posts="posts" @remove="removePost"/>
    </div>
</template>
<script>
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";  
export default {
    components: {
        PostForm, PostList
    },

    data() {
        return {
            posts: [ 
                
            ],
            dialogVisible: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog(){
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            }catch(e){
                console.log('error');
            }
        }
    },
    mounted() {
        // Bu hook, komponent DOM-a elave edildikden sonra isleyecek ve fetchPosts() funksiyasini cagiracaq.
        this.fetchPosts();
    }
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }

    .app{
        padding: 20px;
    }
</style>