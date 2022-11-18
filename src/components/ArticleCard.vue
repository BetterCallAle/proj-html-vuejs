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
            if(this.isTutorial){
                return "imgSmallName"
            } else {
                return "imgNormalName"
            }
        }
    }
}
</script>

<template>
    <div class="article-card">
        <div class="article-card-img">
            <!-- Article img -->
            <img :src="getImgPath(element[imgSize])" alt="">
        </div>

        <div class="article-card-txt">
            <h4>{{ element.title }}</h4>
            <span>{{ element.date }} &VerticalSeparator; {{ element.comments }}</span>
            <p>{{ element.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>