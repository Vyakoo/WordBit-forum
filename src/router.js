import { createRouter, createWebHistory } from "vue-router";
import ArticlePage from './views/ArticlePage.vue';
import MainPage from "./views/MainPage.vue";

export default createRouter ({
    
    history: createWebHistory(),

    routes: [
        {
            name: '/',
            path: '/',
            component: ArticlePage
        },
        {
            name: 'Main',
            path: '/main',
            component: MainPage
        },
    ]
});

