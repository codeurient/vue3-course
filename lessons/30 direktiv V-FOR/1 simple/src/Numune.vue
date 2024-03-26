<template>
    <!--
        3 dene post yerlesdiririk. Ancaq her post tekrarlanir. Tekrarlanmani aradan qaldirmaq ucun V-FOR direktivinden istifade edeceyik. 
    
        Melumatlar normalda Verilenler bazasindan gelir bizim heleki bir verilenler bazamiz olmadigi ucun ozumuz bu DATA-lari yaradacagiq.
    -->
    <div class="post">
        <div><strong>Title:</strong>Post about JavsScript</div>
        <div><strong>Description:</strong>JavaScript is a strong language</div>
    </div>

    <div class="post">
        <div><strong>Title:</strong>Post about JavsScript</div>
        <div><strong>Description:</strong>JavaScript is a strong language</div>
    </div>

    <div class="post">
        <div><strong>Title:</strong>Post about JavsScript</div>
        <div><strong>Description:</strong>JavaScript is a strong language</div>
    </div>
</template>

<script>



export default {
 
}
</script> 

<!-- <style scoped></style> o demekdir ki, bu style tag-leri icinde yazilan CSS kodlari ancaq bu fayl ucun kecerli olacaqdir. -->
<style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>