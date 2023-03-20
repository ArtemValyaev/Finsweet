<template>
        <div class="purple-top">
            <div class="title"><h1>Business</h1></div>
            <div class="subtitle style-text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br> eiusmod tempor incididunt ut labore.</div>
        </div>
        <div class="container">
            <div class="category-main">
                <div class="category-block">
                  
                    <div class="all-posts">
                        <div 
                        v-for="(p, index) in post"
                        :key="index"
                        
                        >   
                            <router-link 
                            v-if="current_category=== p.catagory"
                            :to="{name: 'PostDesc', params: {id: p.id}}" @click="scrollToTop">
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
                </div>
                <div class="category-sideblock">
                    <div class="category-sideblock_title"><h2>Categories</h2></div>
                    <div class="category-sideblock_category">

                        <div 
                        class="category-card"
                        v-for="(cat, key) in cards"
                        :key="key"
                        @click="current_category=cat.title"
                        
                        
                        >
                            <div class="img"><img :src="cat.img" alt=""></div>
                            <div class="name"><h3>{{ cat.title }}</h3></div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
</template>
<script>
export default{
        name: 'home',
        props: ['post', 'cards'],
        data(){
            return{
               current_category: 'Startup',
               catagory: ['Startup', 'Business', 'Economy', 'Technology'],
            }
    
        },
        methods: {
            scrollToTop(){
                window.scrollTo(0, 0);
            },
            chooseCategory(){
                current_category = cat
            }
        }
        
}
</script>