<template>
     <div class="post">
        <div>
            <div><strong>Title: </strong>{{ postDeyerleri.title }}</div>
            <div><strong>Body: </strong>{{ postDeyerleri.body }}</div>
        </div>
        <div class="post__btn">
            <!-- 
                1) path: '/posts/:id'  - Duyme kliklendikde, marsrutda olan ID parametrine gonderilecek deyeri, POSTDEYERLERI obyektinin icinden cagiririq ve marsruta gonderirik.
                2) Diqqet edin ki ampersand simvollarindan istifade etmisik. 

                3) 'postDeyerleri' obyektine ID elave etmek ucun DATE.NOW() obyektinden istifade etmisik:  this.post.id = Date.now();

                Burda basimizin qarismamasi ucun qeyd edim ki, OPEN duymesini basdigimizda elde edeceyimiz deyerlerin IDENTIFIKATORLARI 1-den baslayir ve sira ile artir. Ancaq biz 
                ID ucun DATE.NOW() yazmisiq. Bu o demekdir ki, mentiqnen bele bir ID elde etmeli idik: 1712314543179.  Ancaq biz 1,2,3,4 ve.s elde edirik. Bunun sebebi hazirda 
                sehifede yuklu olan postlarin bizim terefimizden yox server terefinden test meqsedli elave edilmesidir. 

                Artiq ID, dinamik sekilde deyisir ve bu ID-nin komekliyi ile ferqli maxinasiyalar gerceklesdirmek olar. Mesel ucun backend-den post haqqinda daha etrafli informasiya 
                yukleye bilerik. 
             -->
            <my-button @click="$router.push(`/posts/${postDeyerleri.id}`)">Open</my-button> 
            <my-button @click="$emit('remove', postDeyerleri)">Delete</my-button> 
        </div>
    </div>
</template>

<script>
export default {
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
     .post__btn{
        display: flex;
     }
</style>