<script>
    import NavBar from './components/NavBar.vue';
    import SideBar from './components/SideBar.vue';
    import Foot from './components/Foot.vue';

    import ArticlePage from './views/ArticlePage.vue';
    import ContactsPage from "./views/ContactsPage.vue";
    import AboutUsPage from "./views/AboutUsPage.vue";

    import { RouterView } from 'vue-router';
    import axios from "axios";

    axios.defaults.baseURL = 'http://localhost:3005';


    export default {
        components: 
        {
            NavBar,
            SideBar,
            Foot,
            ArticlePage,
            ContactsPage,
            AboutUsPage,
            RouterView
        },

        data() 
        {
            return {
                active: 
                {
                    isActiveNavBar: false,
                    isActiveSideBar: false
                }
            }
        },
        methods: {

            /*
            ActiveBar(name) 
            {
                switch (name.options) 
                {
                    case 1:
                        this.active.isActiveNavBar = !this.active.isActiveNavBar;
                        break;
                
                    case 2:
                        this.active.isActiveSideBar = !this.active.isActiveSideBar;
                        break;
                }
            } */
        }
    }
</script>

<template>
  <div class="">
    <NavBar @ActiveBar="ActiveBar" :active="active"></NavBar>

    <div class="content">
        <SideBar class="item" @ActiveBar="ActiveBar" :active="active"></SideBar>

        <router-view id="router-view"></router-view>
      
    </div>

    <Foot></Foot>
  </div>
</template>

<style scoped>
.content
{
  display: flex;
}

#router-view 
{
    min-height: 100vh;
}

</style>
