<template>
    <div class="header">
        <div class="container">
            <div class="header-content flex">
                <div class="logo">
                    <a href="#">{Finsweet</a>
                </div>
                <div class="nav">
                    <ul class="menu flex">
                        <li 
                        class="menu-item"
                        v-for="(item, index) in navMenu"
                        :key="index"
                        >
                        <router-link @click="scrollToTop" :to="{name: item.path}">{{ item.title }}</router-link>
                        
                        </li>
                        <li 
                        
                        v-if="!sub"
                        @click="Subscribe"
                        ><div :class="subG == true ? 'green' : ''" class="subscribe-btn">Subscribe</div></li>
                    </ul>
                   
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>




export default{
    name: 'header',
    data(){
        return{
            navMenu: [
                {title: 'Home',
                path: 'Home'}, 
                {title: 'Blog',
                path: 'Blog'}, 
                {title: 'About us',
                path: 'AboutUs'}, 
                {title: 'Contact us',
                path: 'Contact'}
            ],
            sub: false,
            subG: false,
            
        }
    },

    
    methods: {
        



        Subscribe(){
            
            let subscribe_btn = document.querySelector('.subscribe-btn')
            if(subscribe_btn.classList.contains("subscribed")){
                subscribe_btn.style.background = 'white'
                subscribe_btn.style.color = 'black'
                subscribe_btn.innerHTML = 'Subscribe'
                subscribe_btn.classList.toggle('subscribed')
            } else{
                subscribe_btn.style.background = 'green'
                subscribe_btn.style.color = 'white'
                subscribe_btn.innerHTML = 'Subscribed'
                subscribe_btn.classList.toggle('subscribed')
                _createModal({
                    title: "Спасибо за подписку!",
                    text: "Вы подписались на рассылку новостей от нашего сайта",
                    closable: true,
                    ok: true,
                    cansel: false,
                    buttons: ['ОК', 'Отмена']
                })
            }
            
           
            
        }
    },
    

}

function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
                <div class="modal-overlay" data-close="true">
                    <div class="modal-window">
                        <div class="modal-header">
                            <span class="modal-title">${options.title}</span>
                            ${options.closable ? `<span class="modal-close" data-close="true">x</span>` : ''}
                        </div>
                        <div class="modal-body">
                            <p>${options.text}</p>
                            
                        </div>
                        <div class="modal-footer">
                            ${options.ok ? `<button class="modal-btn green" data-close="true">Ок</button>` : ''}
                            ${options.cansel ? `<button class="modal-btn red">Отмена</button>` : ''}
                        </div>
                    </div>
                </div> const modal = document.createElement('div')
    `)
    document.body.appendChild(modal)

    function modalClose(){
        let modal = document.querySelector('.modal')
        console.log(modal)
     
    }

    modal.addEventListener('click', event =>{
        if (event.target.dataset.close){
            console.log('Clicked', event.target.dataset.close)
            modalClose()
            modal.parentNode.removeChild(modal)
        }

    })

    return modal
}
</script>
    