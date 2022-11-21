<script>
export default{
    name: "ArticleBanner",
    props:{
        element: Object
    },
    methods:{
        getImgPath(imgName){
            return new URL(`../assets/img/${imgName}.jpg`, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="ms_card-banner" :style="{backgroundImage: `url(${getImgPath(element.imgBigName)})`}">

        <a href="#" class="ms_card-banner-wrapper">
    
            <div class="ms_card-info text-light">
                <h5 class="surtitle text-light">{{ element.type }}</h5>
                <h2 class="banner-heading">{{ element.title }}</h2>
                <p class="banner-txt">{{ element.text }}</p>
                <a href="#" class="ms_btn ms_btn-big ms_btn-black">Read More <i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixin" as *;
.ms_card-banner{
    min-height: 57vh;
    display: flex;
    align-items: end;
    padding: 5em 3em;
    background-size: cover;
    background-position: center;
    .ms_card-info{
        .banner-heading{
            font-weight: 700;
            margin: 0;
        }

        .banner-txt{
            margin: 2rem 0; 
        }
    }

    /* Hover */
    &:hover img{
        scale: 1.2;
    }
}

@include for-md{
    .ms_card-banner{
        img{
            height: 100%;
        }
    }
}
</style>