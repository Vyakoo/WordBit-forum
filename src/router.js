import { createRouter, createWebHistory } from "vue-router";
import PageArticle from './views/PageArticle.vue';

export default createRouter ({
    
    history: createWebHistory(),

    routes: [
        {
            name: '/',
            path: '/',
            component: PageArticle
        },
    
    ]
});

