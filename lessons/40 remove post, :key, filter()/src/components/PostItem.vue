<template>
     <div class="post">
        <div>
            <div><strong>Title: </strong>{{ postDeyerleri.title }}</div>
            <div><strong>Body: </strong>{{ postDeyerleri.body }}</div>
        </div>
        <div class="post__btn">
            <!-- 
                1) Ele etmek lazimdir ki, DELETE duymesini basdiqda Numune.vue faylinda olan ARRAY icinden post silinsin. Bunun ucun $EMIT fnksiyasindan istifade edeceyik.

                2) $EMIT funksiyasi ALT komponentden ANA komponente meluamt gondermek ucun istifade edilir. Ilk once @click adinda EVENT yaradiriq ki, duymeni klikledikde
                $emit funksiyasi cagrilsin. Bu funksiyanin 2ci parametrinde niye props yazdiq ? 
                
                3) Cunki, PostItem komponentinin bir basa Numune komponentine cixisi yoxdur. Ancaq PostList komponentine var. PostItem -> PostList -> Numune

                PostItem ile PostList komponentleri arasinda ki, elaqe 'postDeyerleri' PROPS-u ile qurulmusdur. Bunun ucun 'remove' adli EVENT-i bu cur PostList 
                komponentine $EMIT etdik. postDeyerleri adli PROPS-umuz bizim kliklenen hal-hazirki postumuzdur. 

                4) PostList icinde de $EMIT funksiyasindan istifade ederek Numune komponentine gedeceyik. PostList komponenti icinde bu PostItem komponentinde ggonderilen
                remove EVENT-ini istifade ederek yeniden remove adli EVENT-i Numune komponentine gondereceyik: @remove = $emit('remove', post)
             -->
            <my-button @click="$emit('remove', postDeyerleri)">Delete</my-button> 
        </div>
    </div>
</template>

<script>
export default {
    // Bu props PostList ANA komponentinden melumatlar elde etmek ucundur
    props: {
        postDeyerleri: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
    .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
     }
</style>