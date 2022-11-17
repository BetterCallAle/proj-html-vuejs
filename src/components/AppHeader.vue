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
            ]
        }
    }
}
</script>

<template>
    <header class="d-flex align-items-center">
        <div class="container d-flex justify-content-between">
            <div class="header-logo">
                <a href="#">
                    <img src="../assets/img/logo.png" alt="">
                </a>
            </div>
            
            <nav class="header-nav d-flex align-items-center justify-content-end">
                <ul>
                    <li 
                        v-for="(link, index) in links" 
                        :key="index"
                        class="d-inline-block me-5"
                    >
                        <a :href="link.linkUrl">{{ link.linkTxt }}</a>
                    </li>
                </ul>

                <button class="ms_btn ms_btn-small ms_btn-black me-5">JOIN US</button>

                <i class="fa-solid fa-magnifying-glass"></i>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use "../styles/partials/variables" as *;

    header{
        background-color: $main-light-blue;
        height: $header-height; 
        font-size: .9rem;

        .header-logo{
            width: 18%;
        }

        .header-nav{
            width: 80%;
            color: white;
        }
    }
</style>