<template>
    <div class="header-body_content">
        <div class="container">
            <div class="header-body_content_text">
                <div class="header-body_content_start">
                    P O S T E D&nbsp;&nbsp;O N   &nbsp;<span>S T A R T U P</span>
                </div>
                <div class="header-body_content_title">
                    <h1>Step-by-step guide to choosing great font pairs</h1>  
                </div>
                <div class="header-body_content_by">
                    By <span>{{ author }}</span>  |  {{date}} 
                </div>
                <div class="header-body_content_p">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br> Excepteur sint occaecat cupidatat non proident.
                </div>
                <div class="read-more_btn">
                    Read More >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'header-body',
    data(){
        return{
            author: "James West",
            date: "May 23, 2022"
        }
    },
}
</script>