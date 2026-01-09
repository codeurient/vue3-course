export default {
    // 1) 'EL' parametri deyer olaraq DIV tag-ini qebul edir.

    // 2) 1ci parametr olan 'EL' parametrinden ferqli olaraq MOUNTED() funksiyasi 2ci parametr olaraq OBJECT qebul ede bilir.
    // Mesel ucun bele yazacaq olariqsa:   <div v-intersection class="observe"></div>  
    // Onda 'BINDING' parametri sadece bos OBJECT qaytarir.

    // 3) Eger 'V-INTERSECTION' direktivine beraberlik (=) simvolu elave ederek bele yazariqsa: 
    //! a) <div v-intersection="'Hello World'"          class="observe"></div>      - 'binding' object-inin VALUE xassesi hemin stringi elde edecek 
    //! b) <div v-intersection="{name: 'Hello World'}"  class="observe"></div>      - 'binding' object-inin VALUE xassesi hemin obyekti elde edecek 
    //! c) <div v-intersection="loadMorePosts"          class="observe"></div>      - 'binding' object-inin VALUE xassesi hemin funksiyani elde edecek 

    // Bu o demekdir ki, 'VIntersection' direktivinin icinde bu string, object yaxud funksiyani istifade ede bilerik. 


    mounted(el, binding) {
        console.log(el, binding);
    }
}