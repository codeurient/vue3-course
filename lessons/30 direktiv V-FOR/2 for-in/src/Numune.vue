<template>
   <!-- 
        JS derslerinde ARRAY icinden deyerleri almaq ucun FOR-IN dongusunden istifade edirik demisdik. 
    
        Elde etdiyimiz deyerler Obyektleridir. Obyektlerin deyerlerini ise elde etmek ucun Noqte ve xassenin adini yaziriq. Noqte yəni muraciet edirik. 
    -->
    <div class="post" v-for="post in posts">
        <div><strong>Title: </strong>{{ post.title }}</div>
        <div><strong>Body: </strong>{{ post.body }}</div>
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
            ]
        }
    },
}
</script> 

<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>