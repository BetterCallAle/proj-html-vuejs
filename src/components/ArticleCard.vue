<script>
export default{
    name: "ArticleCard",
    props:{
        element: Object,
        isTutorial: Boolean
    },
    methods:{
        getImgPath(imgName){
            return new URL(`../assets/img/${imgName}.jpg`, import.meta.url).href
        }
    },
    computed:{
        imgSize(){
            // if isTutorial is true, return a imgSmallestName key
            if(this.isTutorial){
                return "imgSmallName"
            // else return imgBigName key
            } else {
                return "imgBigName"
            }
        }
    }
}
</script>

<template>
    <!-- If isTutorial si true add the class 'tutorial-card' else add the class 'article-card' -->
    <div :class="{'tutorial-card': isTutorial, 'article-card': !isTutorial}" class="ms_card txt-gray">
        <a :href="element.url" class="ms_card-wrapper">
            <div class="ms_card-img">
                <img :src="getImgPath(element[imgSize])" :alt="element.imgAlt">
            </div>
    
            <div class="ms_card-txt">
                <h4 class="ms_card-heading">{{ element.title }}</h4>
                <small class="ms_card-date">{{ element.date }} &VerticalSeparator;</small>
                <!-- If there are comments add the class 'ms_card-comments' -->
                <small :class="{'ms_card-comments': element.comments !== 'Comments Off'}" class="ms_card-date">{{ element.comments }}</small> 
                <!-- If isTutorial si true don't show the p element -->
                <p v-if="!isTutorial" class="ms_card-p">{{ element.text }}</p>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.ms_card{

    .ms_card-img{
        overflow: hidden;

        img {
            transition: all 125ms linear;
        }
    }
    .ms_card-txt{
        .ms_card-heading{
            font-size: .9rem;
            font-weight: 900;
            color: $heading-txt-color;
            margin: 0;
        }

        .ms_card-date{
            display: inline-block;
            font-size: .6rem;
            margin: .3rem .2rem .7rem 0; 
        }

        .ms_card-comments{
            font-weight: 700;
        }

        .ms_card-p{
            font-size: .9rem;
        }

    }

    /* Hover */
    &:hover &-img img{
        scale: 1.5;
    }
}

/* Tutorial card */
.tutorial-card{
    .ms_card-wrapper{
        display: flex;
        gap: .5rem;
        margin-bottom: 1.3rem;

        .ms_card-date{
            margin-bottom: 0;
        }
    }
}

/* Article card */
.article-card{
    .ms_card-txt{
        margin-top: 1rem;
    }
}
</style>