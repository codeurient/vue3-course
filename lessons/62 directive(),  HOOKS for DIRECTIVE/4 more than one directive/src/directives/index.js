// 1)  Istifadeci direktivleri birden cox ola bileceyi icin her direktivi ayri-ayri qeydiyyata salmaq yorucu olacaqdir.
// Bunun ucun komponentler ile etdiyimizi direktivler ile edirik. 


import VIntersection from "@/directives/VIntersection";
// 2) index.js adinda fayl yaradaraq, bu fayldan icinde butun direktivleri ehtiva eden ARRAY-i export edirik. 
export default [

    VIntersection,

];


// 3) Sonra kecid edirik 'MAIN.JS' faylina ve FOREACH() ile butun direktivleri qeydiyyata saliriq. Evvel tek-tek etmisdik 
// indi ise hamisini avtomatik olaraq foreach() ile edirik. 