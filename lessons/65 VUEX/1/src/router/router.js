import Main              from "@/pages/Main";
import PostsPage         from "@/pages/PostsPage";
import About             from "@/pages/About";    
import PostIdPage        from "@/pages/PostIdPage";    
import PostPageWithStore from "@/pages/PostPageWithStore";    // 1) PostPageWithStore.vue faylini Import etdik 

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {   path: '/',          component: Main                },
    {   path: '/posts',     component: PostsPage           },
    {   path: '/about',     component: About               }, 
    {   path: '/posts/:id', component: PostIdPage          }, 
    {   path: '/store',     component: PostPageWithStore   },   // 2) PostPageWithStore.vue fayli ucun marsrut yaratdiq
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;