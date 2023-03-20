<template>
    <div class="post-section">
        <div class="container">
            <div class="post-section_body">
                <div class="post-section_body_featured">
                    <div class="title"><h2>Featured Post</h2></div>
                    <div class="featured-post_card">
                        <div class="featured-post_card_img">
                            <img src="/public/images/post.jpg" alt="">
                        </div>
                        <div class="post-author">
                            By <span>John Doe</span>    l   May 23, 2022
                        </div>
                        <div class="featured-post_card_title">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                        </div>
                        <div class="featured-post_card-text">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </div>
                        <router-link @click="scrollToTop" :to="{name: 'AllPosts'}"><div class="read-more_btn">Read More ></div></router-link>
                    </div>       
                </div>

                <div class="all-posts-block">
                    <div class="title">
                        <h2>All Posts</h2>
                        <a href="">View All</a>
                        
                    </div>  
                    
                    <div class="post">
                        
                        <router-link  class="smallPost-body" :to="{name: 'PostDesc', params: {id: post.id}}"
                        @click="scrollToTop"
                        v-for="(post, index, i) in post"
                        
                        :key="i">
                            <div class="all-posts-block_post" v-if="i+1 < 5">
                    
                                    <div class="by-author">By <span>{{post.author}}</span>  {{post.date}}</div>
                                    <div class="all-posts-block_post_text"><h4>{{post.title}}</h4></div>
                                
                            </div>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: ['post'],
    data(){
        return{
            count: 1,
        }
    },
    methods: {
        scrollToTop(){
            window.scrollTo(0, 0);
        }
    }
}

</script>