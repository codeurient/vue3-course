<template>
    <!-- 1)
        PostList icinde olan post-lar ucunde ayrica component yarada bilerik.
    
        PostList faylindan deyerleri PostItem faylina gondermek ucun yene PROPS -dan istifade edeceyik. 

        PostList faylina Numune faylindan ARRAY gelirdi. Bizde V-FOR direktivi ile hemin Arrayin icine daxil olaraq OBYEKT-leri elde edirdik.

    -->
     <div class="post">
        <div><strong>Title: </strong>{{ postDeyerleri.title }}</div>
        <div><strong>Body: </strong>{{ postDeyerleri.body }}</div>
    </div>
</template>

<script>
// 2) Deyerler PostList faylinin icinde OBYEKT formasinda oldugu ucun ve hemin fayldan PostItem faylina bu obyektleri gondereceyimizden dolayi
// PostItem faylinin PROPS-unun tipini OBJECT olaraq qeyd edirik.
export default {
    props: {
        // 3) Belelikle, Numune Ana element oldu PostItem ucun. PostList ana element oldu PostItem ucun.
        // Numune -> PostList -> PostItem
        postDeyerleri: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
    
</style>