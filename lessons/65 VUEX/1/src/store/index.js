// 1) VUEX olmadan tetbiqi istifade etdiyimizde, data-lari (melumatlari) PROPS-un komekliyi ile ANA komponentden ALT komponentlere 
// zencirvari otururuk. Meselen, en ust seviyyede yerlesen bir ANA komponentden en alt seviyyede yerlesen ALT komponentde melumat oturmek ucun 
// hemin en ALT komponente catana qeder diger ALT komponentlerden kecmek lazim gelir. 1->2->3->4->5->6->7->8 ve.s

import { createStore } from "vuex";
// 2) VUEX istifade etdikde data-lar (melumatlar) STORE denilen bir bazada toplanilir ve burdan bilavasite istenilen komponente arada hec bir
// vasite olmadan gonderile bilir. Butun komponentler GLOBAL BAZA-ya muraciet ederek ordan elde edir lazim olan datalari.

// 3) GLOBAL baza yaratmaq ucun 'CREATESTORE()' funksiyasindan istifade edilir. Parametr olaraq bu funksiya OBJECT {} qebul edir.
// Hemin bu obyektin STATE, GETTERS, MUTATIONS, ACRIONS ve.s saheleri movcuddur. 

export default createStore({
    // 4) STATE - hal, veziyyet demekdir. Bu xasse icinde bir yaxud birden cox ferqli xasseler ve hemin xasselerin icinde ise veb sehifede gosterilecek melumatlari eks etdiren data-lar ola biler. 
    // Istenilen komponent icinden hemin melumatlari elde ede bileik. VUEX mentiqi de ele o dur ki, hemin melumatlar tek bir yerde yigilsin ve tek bir bazadan cagrilsin. 
    state :{

    }, 
    // 5) STATE icinde olan data-lari cagiraraq onlar ile ferqli emeliyyatlar icra etmek ucun 'GETTERS' xassesinden istifade edilir. Bu xasse icinde funksiya yaradiriq. Bu emeliyyatlari hemin
    // funksiya ile heyata keciririk. Sonra GETTERS icinde emeliyyat icra eden funksiyani komponent icinde cagirmaq kifayetdir. Meselen, eger GETTER olmasa idi ne olardi? Onda STATE icinde olan 
    // melumatlar ile componentler icinde emeliyyatlar icra etmek ucun, her component icinde ayri-ayri funksiyalar yaradasiydiq. GETTERS icinde yazilan funksiyalar STATE de olan data-lari 
    // deyisdirmir ancaq hemin data-lari elde ederek onlari meselen: a) birlesdire biler,  b) filtirleye biler,   c) siralaya biler   ve.s
    getters: {

    },
    // 6) MUTATIONS icinde sinxron emeliyyatlar icra edilir ve asinxron emeliyyatlar icra etmek olmaz. MUTATIONS icinde yazilan funksiyalar STATE icindeki data-larin veziyyetini deyisdirmek ucun 
    // istifade edilir. Meselen STATE icinde 'count' adinda bir xasse var ve biz MUTATIONS icinde yazilan funksiya ile hemin 'COUNT'-un deyerini bir-bir artiririq. 
    mutations: {

    },
    // 7) ACTIONS-lardan asinxron emeliyyatlar icra etmek, server ile elaqe qurmaq, MUTATIONS-lari cagirmaq ucu istifade edilir. Bir basa ACTION icinden STATE deyerlerini deyismek meslehet deyildir. 
    // ACTIONS ile meselen serverden data-lari elde etdikden sonra MUTATIONS funksiyani cagiraraq STATE-in veziyyetini deyise bilerik. 
    actions: {

    },
    // 8) Bu 4 komponent VUEX-in esas nuvesidir. Birde MODULES deyilen sahe vardir. Bu ise ozu ozune ayice bir STORE-dur. Yəni tətbiqi daha kiçik hissələrə bölmək ucun istifade edilir ve her MODULES
    // icinde STATE, GETTERS, MUTATIONS, ACTIONS ve.s yaratmaq mumkundur. Meselen: a) Alış-veriş səbəti    b) Giris ve Qeydiyyat hissesi     c) Ag mod, qara mod     d) Form elementlerinin idaresi     
    // c) Xeritenin idaresi d) Xeberdarliq ve bildiris mesajlarinin gonderilmesi     ve.s kimi saytin ferqli-ferqli hisseleri hamisi birlikde bir STATE icinde yazila biler.
    // Ancaq her hisse ucun ayri-ayri MODULES-lar yaratmaq kodu daha rahat basa dusulen edir.
    modeules: {

    }

})