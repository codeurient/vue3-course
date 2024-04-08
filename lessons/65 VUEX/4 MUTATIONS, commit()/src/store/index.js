import { createStore } from "vuex";

export default createStore({
    state :{
        likes: 2
    }, 
    getters: {
        doubleLikes(state) {
            return state.likes * 2;
        }
    },
    // 1) Komponentlerde EVENT yaradaraq MUTATIONS funksiyalarini cagirirq.
    mutations: {
        incrementLikes(state) {
            state.likes += 1;
        },
        decrementLikes(state) {
            state.likes -= 1;
        },
    },
    actions: {

    },
    modeules: {

    }
})