import { createRouter, createWebHashHistory } from "vue-router";
import PostDesc from "./components/PostDesc.vue";
import AllPosts from "./components/AllPosts.vue";
import home from "./components/home.vue";
import Contact from "./components/ContactForm.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import AboutUs from "./components/AboutUs.vue";
import Catagory from "./components/Catagory-list.vue";
import Blog from "./components/Blog.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', name: 'Home', component: home, alias: '/' },
        { path: '/postdesc/:id', name: 'PostDesc', component: PostDesc , props: true},
        { path: '/postdesc/all', name: 'AllPosts', component: AllPosts , props: true},
        { path: '/Catagory', name: 'Category', component: Catagory , props: true},
        { path: '/contact', name: 'Contact', component: Contact},
        { path: '/PrivacyPolicy', name: 'PrivacyPolicy', component: PrivacyPolicy},
        { path: '/AboutUs', name: 'AboutUs', component: AboutUs},
        { path: '/Blog', name: 'Blog', component: Blog},
    
    ]
})