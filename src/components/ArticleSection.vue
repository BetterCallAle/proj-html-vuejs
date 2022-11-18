<script>
import ArticleCard from "./ArticleCard.vue";
import { store } from "../store"
export default{
    name:"ArticleSection",
    components:{
        ArticleCard
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
            <div class="section-heading text-center">
                <h5 class="surtitle">Phasellus eget metus</h5>
                <h2 class="heading">All the latest news</h2>
            </div>
        </div>

        <div class="section-main">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4" v-for="article in store.articles.slice(0, 3)">
                        <ArticleCard :element="article" :isTutorial="false"/>
                    </div>

                    <div class="col-12">
                        Banner
                    </div>

                    <div class="col-12 col-md-4" v-for="article in store.articles.slice(3, 7)">
                        <ArticleCard :element="article" :isTutorial="false"/>
                    </div>

                    <div class="col-12 col-md-8">
                        Banner
                    </div>

                    <div class="col-12 col-md-4" >
                        <!-- Heading -->
                        <div class="col-heading">
                            <h2 class="heading">Tutorials &amp; Guides</h2>
                        </div>
                        <!-- Card -->
                        <template v-for="article in store.tutorialArticles">
                            <ArticleCard :element="article" :isTutorial="true"/>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>