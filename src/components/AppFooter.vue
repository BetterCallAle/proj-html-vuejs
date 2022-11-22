<script>
import FooterCol from './FooterCol.vue';
import { store } from '../store'
export default{
    name: "AppFooter",
    components:{
        FooterCol
    },
    data(){
        return{
           store,
           icons: [
                {
                    iconName: "fab fa-facebook-f",
                    iconLink: "facebook.com/avadaforum",
                    iconColor: "blue"
                },
                {
                    iconName: "fa-brands fa-instagram",
                    iconLink: "instagram.com/avadaforum",
                    iconColor: "light-blue"
                },
                {
                    iconName: "fa-brands fa-twitter",
                    iconLink: "twitter.com/avadaforum",
                    iconColor: "dark-blue"
                },
                {
                    iconName: "fa-brands fa-youtube",
                    iconLink: "youtube.com/avadaforum",
                    iconColor: "red"
                }
           ]
        }
    }
}
</script>

<template>
    <footer class="padding-top">
        <!-- Footer Nav -->
        <nav class="footer-nav padding-bottom">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="footer-col-wrapper">
                            <h3 class="footer-nav-heading">Avada Tech Forum</h3>
                            <p class="txt-gray footer-nav-txt">Sed Semper, nisl id feugiat eleifend, erat est digssim felis, quis auctor elit enim nec ante. Cras et nibh risus. Pellentesque non mi sit amet mi intermentum.</p>
                        </div>
                    </div>

                    <FooterCol :heading="'Popular Topics'" :links="store.popular" />

                    <FooterCol :heading="'Recent Topics'" :links="store.recent" />

                    <FooterCol :heading="'Latest Replies'" :links="store.latest" />
                </div>
            </div>
        </nav>
        <!-- /Footer Nav -->


        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <div class="container">
                <!-- Copyright -->
                <div class="footer-bottom-wrapper d-flex flex-column flex-lg-row justify-content-between align-items-center">
                    <div class="footer-copyright txt-gray">
                        <span>&copy; Copyright 2012 - 2020 &VerticalSeparator; Avada Theme by 
                                    <a href="#" class="footer-bottom-link">Theme Fusion</a> 
                              &VerticalSeparator; All Rights Reserved &VerticalSeparator; Powered by 
                                    <a href="#" class="footer-bottom-link">WordPress</a>
                        </span>
                    </div>
                    <!-- /Copyright -->

                    <!-- Socials -->
                    <div class="footer-socials">
                        <a v-for="(icon, index) in icons" :key="index" :href="icon.iconLink">
                            <i :class="[icon.iconName, icon.iconColor]" class="socials-icon"></i>
                        </a>
                    </div>
                    <!-- /Socials -->
                </div>
            </div>
        </div>
        <!-- /Footer Bottom -->

        <!-- Go top button -->
        <a href="#" class="go-top">
            <i class="fa-solid fa-chevron-up"></i>
        </a>
        <!-- /Go top button -->

    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer{
    position: relative;
    
    .footer-nav{
        .footer-nav-txt{
            font-size: .9rem;
            margin-top: 2rem;
        }
    }

    .footer-bottom{
        padding: 1rem 0;
        border-top: 1px solid $light-gray;
        
        .footer-copyright{
            font-size: .7rem;
            margin-bottom: .7rem;
            .footer-bottom-link{
                font-weight: 900;
            }
        }

        .footer-socials{
            .socials-icon{
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                line-height: 3rem;
                text-align: center;
                color: white;
                margin-right: 1rem;
                margin-bottom: .7rem;
            }

            .blue{
                background-color: #3C5998;
            }

            .light-blue{
                background-color: #54ACEE;
            }

            .dark-blue{
                background-color: #3F729B;
            }

            .red{
                background-color: #CD201F;
            }
        }
    }

    .go-top{
        display: block;
        position: absolute;
        padding: .3rem 1rem;
        color: white; 
        background-color: $main-txt-color;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        bottom: -10px;
        right: 20px;
    }
}
</style>