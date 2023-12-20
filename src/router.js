import { createRouter, createWebHistory } from "vue-router";
import ArticlePage from './views/ArticlePage.vue';
import MainPage from "./views/MainPage.vue";
import ContactsPage from "./views/ContactsPage.vue";
import AboutUsPage from "./views/AboutUsPage.vue";

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
        {
            name: 'Contacts',
            path: '/contacts',
            component: ContactsPage
        },
        {
            name: 'AboutUs',
            path: '/aboutus',
            component: AboutUsPage
        },
    ]
});

