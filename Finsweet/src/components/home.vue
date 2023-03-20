<script setup>

    import headerbody from './header-body.vue';
    import posts from './posts.vue';
    import aboutUs from './about-us.vue';
    import catagory from './catagory.vue';
    import story from './story-block.vue';
    import authors from './authors.vue';
    import comments from './comments.vue';
    import join from './join.vue';
    import staff from './staff.vue';

    

   
</script>

<template>
    <headerbody></headerbody>
    <div class="body">
        
        <posts :post="post"></posts>
        <aboutUs></aboutUs>
        <catagory :cards="cards" @CategoryWasClicked="CategoryWasClicked"></catagory>
        <story></story>
        <authors></authors>
        <staff></staff>
        <comments></comments>
        <join></join>
    </div>
    
</template>

<script>
export default{
        name: 'home',
        props: ['post'],
        data(){
            return{
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
    
        },

        methods:{
            CategoryWasClicked(card){
                
            }
        },

    }
</script>