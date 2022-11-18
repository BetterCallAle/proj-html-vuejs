<script>
import SectionHeading from "./SectionHeading.vue";
import ArticleCard from "./ArticleCard.vue";
import ArticleBanner from "./ArticleBanner.vue";
import { store } from "../store"
export default{
    name:"ArticleSection",
    components:{
        SectionHeading,
        ArticleCard,
        ArticleBanner
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <section id="article-section" class="app-section">
        <div class="container">
           <SectionHeading :title="'All the latest news'" />
        </div>

        <div class="section-main">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-12 col-md-4" v-for="(article, index) in store.articles.slice(0, 3)" :key="index">
                        <ArticleCard :element="article" :isTutorial="false"/>
                    </div>

                    <div class="col-12">
                        <ArticleBanner :element="store.featured"/>
                    </div>

                    <div class="col-12 col-md-4" v-for="(article, index) in store.articles.slice(3, 7)" :key="index">
                        <ArticleCard :element="article" :isTutorial="false"/>
                    </div>

                    <div class="col-12 col-lg-8">
                        <ArticleBanner :element="store.review"/>
                    </div>

                    <div class="col-12 col-lg-4" >
                        <!-- Heading -->
                        <div class="col-heading">
                            <h2 class="heading">Tutorials &amp; Guides</h2>
                        </div>
                        <!-- Card -->
                        <template v-for="(article, index) in store.tutorialArticles" :key="index">
                            <ArticleCard :element="article" :isTutorial="true"/>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-main{
    margin-top: 5rem;
    .col-heading{
        margin-bottom: 4rem;
    }
}
</style>