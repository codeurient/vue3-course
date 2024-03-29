<!-- 
    Bizim kodumuzda 2 ferqli komponent movcuddur hansi ki, onlar 35-ci derse qeder birlikde istifade olunublar. 
    Vue js-in mentiqi ise her komponenti ayri-ayri fayllara bolmek ve ferqli sehifelerde yeniden cagiraraq istifade etmekdir.

    1ci komponent postlarin elave edilmesi ucun olan FORM. 

    2ci komponent elave edilen postlarin ozleri. 

    Bu komponentleri ayirmaq ucun 'SRC' qovlugu icinde 'COMPONENTS' adinda qovluq yaradiriq. Hemin qovlugun icinde ise 2 dene fayl: PostForm.vue, PostList.vue.
 -->

<template>
    <!-- Burda olan HTML tag-lerimizi diger fayllarin icinde qoyduq. Asagida CSS kodlarimiz var idi ve hemin tag-lere mexsus CSS-leride onlarin yanina yazdiq. -->
    <div class="app">
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: [
                { id: 1,    title: 'JavaScript ',   body: 'JavaScript is a strong language'             },
                { id: 2,    title: 'Python ',       body: 'Python is a high-level, general-purpose'     },
                { id: 3,    title: 'PHP ',          body: 'PHP is a general-purpose scripting language' },
            ],
            title: '',
            body: ''
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost)
            this.title = '';
            this.body = '';
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


