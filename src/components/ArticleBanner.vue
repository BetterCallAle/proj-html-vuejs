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
    <div class="ms_card-banner">
        <a href="#" class="ms_card-banner-wrapper">
            <img :src="getImgPath(element.imgBigName)" :alt="element.imgAlt">
    
            <div class="ms_card-info text-light">
                <h5 class="surtitle text-light">{{ element.type }}</h5>
                <h2 class="banner-heading">{{ element.title }}</h2>
                <p class="banner-txt">{{ element.text }}</p>
                <a href="#" class="ms_btn ms_btn-big ms_btn-black">READ MORE <i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixin" as *;
.ms_card-banner{
    position: relative;
    overflow: hidden;
    img{
        height: 500px;
        object-fit: cover;
        object-position: right;
        transition: all 125ms linear;
    }
    .ms_card-info{
        padding: 3rem;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
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