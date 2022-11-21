<script>
import SectionHeading from './SectionHeading.vue';
import AppSpacing from './AppSpacing.vue';
export default{
    name: "ForumSection",
    components:{
        SectionHeading,
        AppSpacing
    },
    data(){
        return{
            links:[
                {
                    title: "News & Community",
                    icon: "fa-solid fa-file-lines",
                    url:"/news"
                },
                {
                    title: "Apple Forum",
                    icon: "fa-brands fa-apple",
                    url:"/avda-apple"
                },
                {
                    title: "Microsoft Forum",
                    icon: "fa-brands fa-windows",
                    url:"/avda-microsoft"
                },
                {
                    title: "Android Forum",
                    icon: "fa-brands fa-android",
                    url:"/avda-android"
                },
                {
                    title: "General Discussion",
                    icon: "fa-solid fa-mug-saucer",
                    url:"/general"
                },
                {
                    title: "Apps & Software",
                    icon: "fa-solid fa-cubes",
                    url:"/programming"
                },
                {
                    title: "Gadgets & Stuff",
                    icon: "fa-solid fa-laptop",
                    url:"/gadgets"
                },
                {
                    title: "Tutorials & Guides",
                    icon: "fa-solid fa-wrench",
                    url:"/tutorials"
                },
            ]
        }
    }
}
</script>

<template>
    <section id="forum-section" class="padding-top bg-off-white">
        <div class="container">
            <SectionHeading :title="'Forum Sections'" />

            <div class="main-forum-section padding-bottom">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 gy-5">
                    <div class="col" v-for="(item, index) in links" :key="index">
                        <div class="box">

                            <a :href="item.url" class="box-wrapper">
                                <div class="box-icon">
                                    <i :class="item.icon" class="icon"></i>
                                </div>

                                <div class="box-title">
                                    <h3>{{ item.title }}</h3>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AppSpacing :text="'go to our forum'" />
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main-forum-section{
    margin-top: 5rem;
    .box{
        background-color: white;
        padding: 2rem;
        text-align: center;
        border-top: 2px solid $main-light-blue;
        transition: all 125ms linear;

        &-icon{
            width: 4rem;
            height: 4rem;
            text-align: center;
            background-color: $main-orange;
            border-radius: 50%;
            margin: 0 auto;

            .icon{
                font-size: 2rem;
                line-height: 4rem;
                color: white;
            }
        }

        &-title{
            h3{
                font-size: 1rem;
                font-weight: 900;
                margin-top: 1rem;
            }
        }

        /* Hover */
        &:hover{
            border-radius: 30px;
        }

        &:hover .box-wrapper{
            color: orange;
        }
    }

}
</style>