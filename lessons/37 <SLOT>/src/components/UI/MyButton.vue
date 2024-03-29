<template>
    <button class="btn" >
        <!-- 
            1) Eger SLOT olmasa, diger fayllarin icinde BUTTON componentini cagirdiqda ona verdiyimiz ad ekrana eks olunmaz. 
            Yəni, baxmiyaraq ki, burda ad yazmisiq yenede onu gormerik: <my-button>Delete</my-button>

            SLOT ise hemin componente daxil edilen ADI avtomatik olaraq kenar menbeden oz icine cekir. 

            SLOT-u gordukde avtomatik basa dusmek lazimdir ki, onun icinde hansisa kenar menbeden mezmun daxil edilir.
        -->
        <slot></slot>
    </button>
</template>
    
 <script>
 export default {

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