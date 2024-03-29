<template>
    <div>
         <h3>List of users</h3>
         <!-- 
            1) for kimi donguden istifade etdikde VUE js-de mutleq unikal acarlar elave etmek lazimdir.

            Buna gore her obyekt ucun :key direktivini yazmaliyiq. 
            
            Unikal acarlar VUE js-in DOM-u effektiv sekilde yenilemesini heyata kecirmekde istifade edilir.

            Yəni, her element ucun unikal acar teyin edildikde VUE js her elementi ayri ayri daha yaxsi taniya bilir. 
            
            Meselen eger eyni acardan 2 dene olsa idi onda, VUE js elave hansi acarin hansi elemente aid oldugunu teyin etmeli idi ve bu elave iş olacagindan ve hemin 
            elave iş proqramin suretini zeyifledeceyinden bele bir sistem dusunubler.

            2) PostItem komponentinden gelen @remove EVENT-i $EMIT funksiyasini işə salır. $EMIT fuksiyasinin 2ci parametrinde yene her kliklenen post-u ayri-ayri Numune
            komponentine gonderirik. Bu postlar ayr-ayri obyektler kimi gonderilir. 
         -->
         <post-item class="post" v-for="post in posts"  :postDeyerleri="post"  :key="post.id" @remove="$emit('remove', post)"/>
    </div>
 </template>
    
 <script>
 
 import PostItem from "@/components/PostItem";
 
 export default {
     components: { PostItem },
 
    // Bu props Numune.vue ANA komponentinden melumatlar elde etmek ucundur.
     props: {
         posts: {
             type: Array,
             required: true,
         }
     },
 }
 </script>
 
 <style scoped>

 </style>