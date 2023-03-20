<script setup>
    import catagory from './catagory.vue';
    import join from './join.vue';
</script>

<template>
    <div class="container">
        <div class="all-posts">
            <div class="title"><h1>All posts</h1></div>
            <hr>
            <div 
            v-for="(p, index) in post"
            :key="index"
            
            >   
                <router-link :to="{name: 'PostDesc', params: {id: p.id}}" @click="scrollToTop">
                    
                    <div class="all-posts_post">
                        <div class="post_image">
                            <img :src="p.img" alt="">
                        </div>
                        <div class="all-posts_text">
                            <div class="catagory">{{ p.catagory }}</div>

                            <h2 class="all-posts_title">{{ p.title }}</h2>
                            <div class="post-text style-text-1">{{ p.text }}</div>
                        </div>
                    </div>
                </router-link>    
            </div>
        </div>

        <catagory></catagory>
        <join></join>

    </div>
    
    
</template>

<script>

export default{
        name: 'home',
        props: ['post', 'id'],
        data(){
            return{
               
            }
    
        },
        methods: {
            scrollToTop(){
                window.scrollTo(0, 0);
            }
        }
        
}

</script>

<style scoped>
    .post{
        width: 100%;    
        margin: 40px 0;
        padding: 20px;
        background-color: bisque;
    }

    .post-top{
        display: flex;
    }
    .date{
        margin-left: 30px;
    }
    .post-title, .post-text{
        margin-top: 20px;
        
    }
    .post-text{
        line-height: 24px;
    }
</style>