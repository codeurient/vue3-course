<!-- AltKomponent.vue -->
<template>
    <div>
        <h2>Ben Alt Bileşenim!</h2>
        <p>{{ mesaj }}</p>
    </div>
</template>


  
  <script>

    export default {
        props: {
            // Props bölməsində göstərilən String mesaj xüsusiyyətinin 
            // tipini, yəni AltKomponent-ə xaricdən ötürülən məlumatın 
            // tipinin STRİNG olduğunu təyin edir.
            mesaj: String
        }
    }

  </script>
  