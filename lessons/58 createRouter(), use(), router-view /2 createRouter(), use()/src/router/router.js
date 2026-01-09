import Main from "@/pages/Main";
// 5) metodlari import etmeyi unutmaq olmaz.
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        // 1) Main adli ilk ve esas sehifemizi tesvir edecek fayli yaratdiqdan sonra 'path' marşrutu üçün hemin komponenti elave edirik.
        // URL yerinde ilk yol '/' bizi Main.vue faylina gondermelidir.
        component: Main
    },
]

// 2) Hal-hazirda bizim, marşrutları içində ehtiva edən ARRAY-ımız var. Bu marşrutları canlandırmaq üçün 'createRouter()' funksiyasindan istifade 
// edeceyik.  Bu funksiya parametr olaraq {} obyekt qebul edir. Hemin obyektin icinde ise bezi seçimlər (opsiyalar) movcuddur. Bu opsiyalara vermek lazimdir:
// a) marsrutlari ehtiva eden ARRAY-i.
// b) web hisotry

// 3) Nedir bu WEB HISTORY ? Istifadeciler web sehifeler arasinda kecidler etdikde, browserin hemin marsrutlari, URL-de bas veren bu deyisiklikleri yadda saxlmasidir.
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

// 4) Indi bu ROUTER-u export edirik ve export edilen router-u mutleq 'MAIN.JS' faylinda IMPORT ederek use() metodu ile qeydiyyata almaq lazimdir.
// export default router dedikde export edilen faylin adi yox 3cu bolmede olan ROUTER kanstantidir. 
export default router;