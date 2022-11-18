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
                return "imgSmallestName"
            // else return imgBigName key
            } else {
                return "imgBigName"
            }
        }
    }
}
</script>

<template>
    <div class="article-card">
        <div class="article-card-img">
            <img :src="getImgPath(element[imgSize])" :alt="element.imgAlt">
        </div>

        <div class="article-card-txt">
            <h4>{{ element.title }}</h4>
            <span>{{ element.date }} &VerticalSeparator; {{ element.comments }}</span>
            <p v-if="!isTutorial">{{ element.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>