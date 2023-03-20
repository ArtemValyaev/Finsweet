<template>
    <div class="footer_body">
        <div class="container">
            <div class="footer_top">
                <div class="left">{Finsweet</div>
                <div class="right">
                    <div class="menu">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">About us</a></li>
                            <li><router-link @click="scrollToTop" :to="{name: 'Contact'}">Contact us</router-link></li>
                            <li><router-link @click="scrollToTop" :to="{name: 'PrivacyPolicy'}">Privacy Policy</router-link></li>
                          
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer_contact">
                <div class="left">
                    <h2>Subscribe to our news letter to get latest updates and news</h2>
                </div>
                <div class="right">
                    <input type="text" class="inputEmail" placeholder="Enter Your Email">
                    <div class="sub_btn">Subscribe</div>
                </div>
            </div>

            <div class="footer_bottom">
                <div class="left">
                    <p>Finstreet 118 2561 Fintown<br>
                    Hello@finsweet.com  020 7993 2905</p>
                    
                </div>
                <div class="right">
                    <ul>
                        <li><a href=""><img src="/public/images/facebook.svg" alt=""></a></li>
                        <li><a href=""><img src="/public/images/twitter.svg" alt=""></a></li>
                        <li><a href=""><img src="/public/images/instagram.svg" alt=""></a></li>
                        <li><a href=""><img src="/public/images/linkedIn.svg" alt=""></a></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{

    data(){
        
    },
    methods: {
        scrollToTop(){
            window.scrollTo(0, 0);
        }
    }
}

</script>