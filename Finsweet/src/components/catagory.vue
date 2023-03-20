<template>
    <div class="container">
        <div class="catagory">
            <div class="title"><h2>Choose A Catagory</h2></div>
            <div class="catagory_cards">
                <router-link class="card" :to="{name: 'Category'}"
                v-for="(card, index) in cards"
                :key="index"
                
                >
                        <div class="img"><img v-bind:src="card.img" alt=""></div>
                        <div class="card_title"><h3>{{ card.title }}</h3></div>
                        <div class="card_text">{{ card.text }}</div>
                </router-link>
            
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'catagory',
    props: ['cards'],
    data(){
        return{
            
        }
    },
    methods: {
        scrollToTop(){
            window.scrollTo(0, 0);
        },
    
    }
}
</script>