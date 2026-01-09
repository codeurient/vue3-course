import { createStore } from "vuex";
// 2) postModule faylini IMPORT edirik
import { postModule } from "@/store/postModule";

export default createStore({
    // 1) Tebiqi parcalara ayiraraq her ayri parcani MODULES ile istifade edeceyik. Bunun ucun tetbiqin bir hissesini ehtiva edecek olan ilk faylimizi (postModule.js)
    // yaradaraq STATE, ACTIONS ve.s butun kodlarimizi hemin faylda yazasiyiq. Sonra ise hemin fayli bu 'index.js' faylinda olan MODULES icinde qeydiyyata alaraq
    // istifade edeceyik.  
    modules: {
        // 3) 'postModule' faylini IMPORT etdikden sonra 'POST' adı altında qeydiyyata aliriq. Komponentler icinde 'POST' adindan istifade ederek 'postModule'
        // faylinin icindeki kodlarimizi (state, actions, mutations ve.s) istifade ede bilerik. 
        // Meselen: {{ $store.state.post.limit }}
        post: postModule
    }
})