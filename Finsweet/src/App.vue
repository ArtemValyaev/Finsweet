<script setup>

import myheader from './components/header.vue';
import footerbody from './components/footerbody.vue';


 


</script>

<template>
    <div class="root">
        <header>
            <myheader></myheader>
            
        </header>
        
        <keep-alive><router-view :post="post" :cards="cards"></router-view></keep-alive>

        <footer>
            <footerbody></footerbody>
        </footer>
        
       
    </div>
</template>

<script>
    export default{
        name: 'home',
        data(){
            return{
                post: {
                    post1: {
                        id: 1,
                        img: '/public/images/posts-img/post1.png',
                        catagory: 'Startup',
                        author: "John Deo",
                        date: "Apr 11, 2022",
                        text: "8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.",
                        title: "8 Figma design systems that you can download for free today.",
                        path: "/postdesc",
                    },

                    post2: {
                        id: 2,
                        img: '/public/images/posts-img/post2.png',
                        catagory: 'Business',
                        author: "John Deo",
                        date: "Sep 1, 2021",
                        text: "8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.",
                        title: "8 Figma design systems that you can download for free today.",
                        path: "/posts/2",
                    },

                    post3: {
                        id: 3,
                        img: '/public/images/posts-img/post3.png',
                        catagory: 'Startup',
                        author: "John Deo",
                        date: "Oct 3, 2022",
                        text: "8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.",
                        title: "8 Figma design systems that you can download for free today.",
                        path: "/posts/3",
                    },

                    post4: {
                        id: 4,
                        img: '/public/images/posts-img/post4.png',
                        catagory: 'Technology',
                        author: "John Deo",
                        date: "Aug 23, 2022",
                        text: "8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.",
                        title: "8 Figma design systems that you can download for free today.",
                        path: "/posts/4",
                    },
                    
                    post5: {
                        id: 5,
                        img: '/public/images/posts-img/post4.png',
                        catagory: 'Economy',
                        author: "John Deo",
                        date: "Aug 23, 2022",
                        text: "8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today. 8 Figma design systems that you can download for free today.",
                        title: "8 Figma design systems that you can download for free today.",
                        path: "/posts/4",
                    },
                    

                },
                cards: {
                    Business: {
                        img: '../public/images/card1.png',
                        title: 'Business',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    },
                    Startup: {
                        img: '../public/images/card2.png',
                        title: 'Startup',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    },
                    Economy: {
                        img: '../public/images/card3.png',
                        title: 'Economy',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    },
                    Technology: {
                        img: '../public/images/card4.png',
                        title: 'Technology',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    },
                }
            }
    
        }

    }
</script>
