import Main      from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import About     from "@/pages/About";    // 1) About sehifesini import edirik      

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {   path: '/',        component: Main         },
    {   path: '/posts',   component: PostsPage    },
    {   path: '/about',   component: About        },  // 2) About sehifesini yaratdiq ve marsrut verdik.
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;