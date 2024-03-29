<template>
    <div class="app">
        <form >
            <h4>Creating post</h4>
            <input :value="title" class="input" type="text" placeholder="Title of post" @input="title = $event.target.value">
            <input :value="body" class="input" type="text" placeholder="Body of post" @input="body = $event.target.value">
            <button class="btn" @click="createPost">Create post</button>
        </form>

        <div class="post" v-for="post in posts">
            <div><strong>Title: </strong>{{ post.title }}</div>
            <div><strong>Body: </strong>{{ post.body }}</div>
        </div>
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
            body: '',
        }
    },
    methods: {
        // PREVENT modifikatoru olmadan eyni neticeni elde etmek isteseydik onda, BUTTON duymesini basdiqda EVENT elde etmeli ve onun icinden 
        // preventDefault() fuksiyasini cagirmali idik.
        createPost(event) {
            event.preventDefault();
            
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost)
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
    .app{
        padding: 20px;
    }
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