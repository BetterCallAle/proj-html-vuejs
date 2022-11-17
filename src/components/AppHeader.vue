<script>
export default{
    name: "AppHeader",
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
            
            <!-- Navbar -->
            <nav class="header-nav d-flex flex-row-reverse flex-lg-row align-items-center justify-content-start justify-content-lg-end">
                
                <!-- Pc menu -->
                <ul class="d-none d-lg-block">
                    <li 
                        v-for="(link, index) in links" 
                        :key="index"
                        class="d-inline-block ms_margin"
                    >
                        <a :href="link.linkUrl">{{ link.linkTxt }}</a>
                    </li>
                </ul>
                <!-- /Pc menu -->

                <!-- Mobile and Tablet menu -->
                <button v-if="!isMenuActive" class="ms_btn ms_btn-small ms_btn-black ms_margin d-lg-none" @click="openMenu">
                    <i class="fa-solid fa-bars"></i>
                </button>

                <button v-else class="ms_btn ms_btn-small ms_btn-black ms_margin d-lg-none" @click="openMenu">
                    <i class="fa-solid fa-x"></i>
                </button>
                
                <!-- If the button is clicked -->
                <div v-if="isMenuActive" class="wall"></div>
                <div v-if="isMenuActive" class="mobile-menu">
                    <ul>
                        <li 
                            v-for="(link, index) in links" 
                            :key="index"
                        >
                            <a :href="link.linkUrl">{{ link.linkTxt }}</a>
                        </li>
                    </ul>
                </div>
                <!-- /Mobile and Tablet menu -->

                <a href="#" class="ms_btn ms_btn-small ms_btn-black ms_margin">JOIN US</a>

                <button class="ms_btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
            </nav>
            <!-- /navbar -->
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

        .header-nav{
            width: 60%;
            color: white;

            .ms_margin{
                margin-left: 1rem;
            }
            .mobile-menu{
                width: 100%;
                color: black;
                text-align: center;
                background-color: white;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
                box-shadow: 0 300px 1000px 200px rgba(0, 0, 0, .5);
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);

                li{
                    margin-bottom: 1rem;
                }

            }
        }
    }

@include for-lg{
    header{
        .header-logo{
            width: 18%;
        }
    
        .header-nav{
            width:80%;

            .ms_margin{
                margin-left: 0;
                margin-right: 3rem;
            }
        }
    }
}
</style>