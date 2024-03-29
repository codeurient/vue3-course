<template>
    <div class="app">
        <!-- 3. Qeydiyyata aldiqdan sonra ise TAG adi kimi bu komponentleri cagira bilerik. -->
        <post-form />
        <!-- 4. Birinci :POSTS sozu PostList.vue icinde yazdigimiz PROPS obyektinin Xassesidir. Yəni, hemin xasseye Numune.vue faylindan POSTS gonderirik. -->
        <post-list :posts="posts" />
    </div>
</template>
<script>

// 1. Goruntulenen sehifemiz Numune.vue faylidir. Bu sehifede, PostForum ve PostList fayllarini gostermek ucun ilk novbede onlari IMPORT etmeliyik
import PostForm from "./components/PostForm.vue";
import PostList from "@/components/PostList.vue";


export default {
    // 2. IMPORT etdikden sonra bu fayllari QEYDIYYATA almaliyiq
    components: {
        PostForm, PostList
    },
    
    data() {
        return {
            // 5. Bu gonderilen POSTS array-ini PostList.vue faylinin icinde PROPS ile elde edirik.
            posts: [
                { id: 1,    title: 'JavaScript ',   body: 'JavaScript is a strong language'             },
                { id: 2,    title: 'Python ',       body: 'Python is a high-level, general-purpose'     },
                { id: 3,    title: 'PHP ',          body: 'PHP is a general-purpose scripting language' },
            ],
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


