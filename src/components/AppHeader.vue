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
            ],

            isMenuActive: false,

            defaultActive: 0
        }
    },
    methods:{
        // Toggle the boolean in isMenuActive
        openMenu(){
            this.isMenuActive = !this.isMenuActive;
        },

        // Switch the active class
        letLinkActive(index){
            // remove the active class from the prev link
            this.links[this.defaultActive].isActive = false;
            // add the active calss to the current link
            this.links[index].isActive = true;
            // make the default active link the clicked one
            this.defaultActive = index;
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

            <HeaderNavbar :links="links" :menuActive="isMenuActive" @buttonClicked="openMenu" @linkClicked="letLinkActive"/>
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