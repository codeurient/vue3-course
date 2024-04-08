import { createStore } from "vuex";

export default createStore({
    state :{
        likes: 2
    }, 
    getters: {
        // 1) Funksiya yaradiriq ki, bu funksiya ile STATE sahesinde olan LIKES xassesinin deyerini deyisdirek. 
        doubleLikes(state) {
            // 2) Bu funksiyaya parametr olaraq istenilen adı vermek olar. Hemin parametr avtomatik olaraq STATE obyektini qebul edir.
            // Sonra bu parametr ile hemin STATE icinde olan istenilen xasseni elde ede bilerik. 
            return state.likes * 2;
        }
    },
    mutations: {

    },
    actions: {

    },
    modeules: {

    }
})