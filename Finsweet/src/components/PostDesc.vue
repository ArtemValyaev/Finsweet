<template>
    <div class="container">
        <div 
        v-for="(p, index) in post"
        :key="index"
        
        >
            <div class="post" v-if="p.id == $route.params.id">
                <div class="post-top">
                    <div class="author"><strong>{{ p.author }}</strong></div>
                    <div class="date">{{ p.date }}</div>
                </div>
                <h2 class="post-title">{{ p.title }}</h2>
                <div class="post-text">{{ p.text }}</div>
                
            </div>
        </div>
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