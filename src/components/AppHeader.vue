<script>
import HeaderNavbar from './HeaderNavbar.vue';
export default{
    name: "AppHeader",
    components:{
        HeaderNavbar
    },
    data(){
        return{
            links:[
                {
                    linkTxt: "Home",
                    linkUrl: "/home" 
                },

                {
                    linkTxt: "Apple",
                    linkUrl: "/avada-apple" 
                },

                {
                    linkTxt: "Microsoft",
                    linkUrl: "/avada-microsoft" 
                },

                {
                    linkTxt: "Android",
                    linkUrl: "/avada-android" 
                },

                {
                    linkTxt: "Forums",
                    linkUrl: "/forums" 
                },

                {
                    linkTxt: "Contact Us",
                    linkUrl: "/contact-us" 
                }
            ],

            isMenuActive: false,
        }
    },
    methods:{
        openMenu(){
            this.isMenuActive = !this.isMenuActive;
        }
    }
}
</script>

<template>
    <header class="d-flex align-items-center">
        <div class="container d-flex justify-content-between">
            <!-- logo -->
            <div class="header-logo">
                <a href="#">
                    <img src="../assets/img/logo.png" alt="">
                </a>
            </div>
            <!-- /logo -->

            <HeaderNavbar :links="links" :menuActive="isMenuActive" @buttonClicked="openMenu"/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use "../styles/partials/variables" as *;
    @use "../styles/partials/mixin" as *;

    header{
        width: 100%;
        height: $header-height; 
        background-color: $main-light-blue;
        font-size: .9rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;

        .header-logo{
            width: 40%;
        }

    }

@include for-lg{
    header{
        .header-logo{
            width: 18%;
        }
    }
}
</style>