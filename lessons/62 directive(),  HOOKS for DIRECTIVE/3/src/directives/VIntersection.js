export default {
    mounted(el, binding) {
        
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            // 3) '&& this.page < this.totalPages'  bu kodlarida 'BINDING' ile bilavasite elde etmek olar. 
            if(entries[0].isIntersecting){
                // 2) this.loadMorePosts()  evezine ise  'v-intersection'  direktivi ile gonderdiyimiz 'loadMorePosts' funksiyasini qebul eden 'BINDING' parametrini ve hemin 
                // funksiyani elde etmeyimize komeklik gosteren 'VALUE' xassesini istifade edirik. Cunki direktiv ile gonderdiyimiz bu funksiya 'BINDING' obyektinin 'VALUE' xassesine 
                // avtomatik olaraq yerlesdirilir.
                binding.value();  
            }
        };
        
        const observer = new IntersectionObserver(callback, options);
        // 1) 'this.$refs.observer'  evezine artiq  'el'  parametrini yaziriq.
        observer.observe(el);

    }
}



// 4) Artiq bu kodlari sadece 'PostsPage' komponentinde yox, istediyimiz komponent icinde tekrar-tekrar istifade ede bilerik. 