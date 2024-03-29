<template>
    <button class="btn" >
        <slot></slot>
    </button>
</template>
    
 <script>
 export default {
    // Burda gorduyunuz 'name' xassesi istenilen ad ola biler. name evezine ne istesez yaza bilersiz. Meselen: tepe, alma, bostan ve.s
    // Yəni, oz istediyimiz adi yaziriq. Neye lazimdir bu (name: 'my-button') ? Ona gore ki, bu 'name' adi ile EXPORT edilen MY-BUTTON 
    // komponenti 'main.js' faylinin icinde IMPORT edildikden sonra component() funksiyasi ile qeydiyyata salinir.
    name: 'my-button',
}
 </script>
 

 <style scoped>
    .btn{
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