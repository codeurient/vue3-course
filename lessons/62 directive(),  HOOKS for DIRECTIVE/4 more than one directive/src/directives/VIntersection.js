export default {
    mounted(el, binding) {
        
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting){
                binding.value();  
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },

    // 1) main.js faylinda 'name' xassesinde yazdigimiz deyeri elde ederek hemin ad ile qeydiyyata saliriq direktivi
    name: 'intersection'
}