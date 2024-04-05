import Main      from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import About     from "@/pages/About";    
import PostIdPage     from "@/pages/PostIdPage";    

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {   path: '/',          component: Main         },
    {   path: '/posts',     component: PostsPage    },
    {   path: '/about',     component: About        }, 
    // 1) Dinamik link yaradiriq. Burda yazdigimiz :id parametri her defe deyisecek olan deyerler qebul edecek. Her postun ozunu ID-si olacaq: http://localhost:8080/posts/1 
    // 2) Her defe OPEN duymesini basdiqda bir sehife (komponent) acilmalidiri. Hemin komponentin adini PostIdPage qoyaq.
    {   path: '/posts/:id', component: PostIdPage   }, 
    // 3) URL yerinde: http://localhost:8080/posts/1 
    // 3)              http://localhost:8080/posts/2 
    // 3)              http://localhost:8080/posts/3 ve.s yazdiqda butun linkler bizi eyni sehifeye yonlendirecek. PostIdPage komponenti icinde ID deyerini dinamik sekilde 
    // elde etmek ucun $ROUTE obyektinden istifade edeceyik.. Navbar komponentinde istifade etdiyimiz $ROUTER obyekti ile sehf salmaq olmaz bu obyekti. 
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;