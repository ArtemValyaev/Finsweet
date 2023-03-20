
<template>
    <div class="container">
        <div class="authors">
            <div class="title"><h2>List of Authors</h2></div>
            <div class="authors_cards">
                <swiper
                :modules="modules"
                :slides-per-view="3"
                :space-between="50"
                navigation
                FreeMode 
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                
             
                >

                    <swiper-slide
                    v-for="(author, index) in authors"
                    v-key="index"
                    class="card"
                    >
                        <div class="img"><img :src="author.profile" alt=""></div>
                        <div class="name"><h3>{{ author.name }}</h3></div>
                        <div class="post">{{ author.post }}</div>
                        <div class="soc">
                            <div class="fb"><a href=""><img src="/public/images/fb.png" alt=""></a></div>
                            <div class="tw"><a href=""><img src="/public/images/tw.png" alt=""></a></div>
                            <div class="inst"><a href=""><img src="/public/images/inst.png" alt=""></a></div>
                            <div class="inf"><a href=""><img src="/public/images/inf.png" alt=""></a></div>
                        </div>
                
                    </swiper-slide>
                    


                </swiper>
            </div>
        </div>

    
    </div>
</template>

<script>
import { Navigation, FreeMode  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';


import 'swiper/css'; 
export default{
    name: 'authors',
    components: {
      Swiper,
      SwiperSlide,
    },
    data(){
        return{
            authors: {
                author1: {
                    profile: '../public/images/authors/floyd.png',
                    name: 'Floyd Miles',
                    post: 'Content Writer @Company',
                },
                author2: {
                    profile: '../public/images/authors/dianne.png',
                    name: 'Dianne Russell',
                    post: 'Content Writer @Company',
                },
                author3: {
                    profile: '../public/images/authors/jenny.png',
                    name: 'Jenny Wilson',
                    post: 'Content Writer @Company',
                },
                author4: {
                    profile: '../public/images/authors/leslie.png',
                    name: 'Leslie Alexander',
                    post: 'Content Writer @Company',
                },

                author5: {
                    profile: '../public/images/authors/guy.png',
                    name: 'Guy Hawkins',
                    post: 'Content Writer @Company',
                },
                author6: {
                    profile: '../public/images/authors/eleanar.png',
                    name: 'Eleanor Pena',
                    post: 'Content Writer @Company',
                },
                author7: {
                    profile: '../public/images/authors/robert.png',
                    name: 'Robert Fox',
                    post: 'Content Writer @Company',
                },
                author8: {
                    profile: '../public/images/authors/jacob.png',
                    name: 'Jacob Jones',
                    post: 'Content Writer @Company',
                },
                

            }
        }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, FreeMode ],
      };
      
    },
}
</script>