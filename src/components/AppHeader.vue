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
                    linkUrl: "/home",
                    isActive: true
                },

                {
                    linkTxt: "Apple",
                    linkUrl: "/avada-apple",
                    isActive: false
                },

                {
                    linkTxt: "Microsoft",
                    linkUrl: "/avada-microsoft",
                    isActive: false
                },

                {
                    linkTxt: "Android",
                    linkUrl: "/avada-android",
                    isActive: false
                },

                {
                    linkTxt: "Forums",
                    linkUrl: "/forums",
                    isActive: false
                },

                {
                    linkTxt: "Contact Us",
                    linkUrl: "/contact-us",
                    isActive: false
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center h-100">
            <!-- logo -->
            <div class="header-logo">
                <a href="#">
                    <img src="../assets/img/logo.png" alt="">
                </a>
            </div>
            <!-- /logo -->

            <HeaderNavbar :links="links"/>
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