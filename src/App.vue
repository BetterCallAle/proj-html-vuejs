<script>
import AppHeader from './components/AppHeader.vue';
import JumboTop from './components/JumboTop.vue';
import AppDescription from './components/AppDescription.vue';
import ArticleSection from './components/ArticleSection.vue';
import ForumSection from './components/ForumSection.vue';
import AppCta from './components/AppCta.vue';
import AppForm from './components/AppForm.vue';
import AppFooter from './components/AppFooter.vue';
import data from './data.json'
import {store} from "./store";
export default{
  components:{
    AppHeader,
    JumboTop,
    AppDescription,
    ArticleSection,
    ForumSection,
    AppCta,
    AppForm,
    AppFooter
  },
  data(){
    return{
      store,
      data
    }
  },
  created(){
    this.organizeTheArray();
    this.organizeFooterElements();
  },
  methods:{
    organizeTheArray(){
      //export the json file in store
      this.store.allArticles = this.data.articles
      //cycle the allArticles array
      this.store.allArticles.forEach(element => {
        // if the element === "article" push it in the article array
        if(element.type === "article"){
          this.store.articles.push(element)
        // else if the element === "featured article" push it in the featured element (is not an array 'cause there is only one)
        } else if (element.type === "featured article"){
          this.store.featured = element
        // else push the element in review element (is not an array 'cause there is only one)
        } else {
          this.store.review = element
        }

        //if the element has a small img push it in the turorial array 
        if(element.imgSmallName){
          this.store.tutorialArticles.push(element)
        }
      })
    },

     //Export the footer elements in store
    organizeFooterElements(){
        this.store.popular = this.data.popularTopics;
        this.store.recent = this.data.recentTopics;
        this.store.latest = this.data.recentTopics;
    }
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />
  <!-- /Header -->

  <!-- Main -->
  <main>
    <JumboTop />
    <AppDescription />
    <ArticleSection />
    <ForumSection />
    <AppCta />
    <AppForm />
  </main>
  <!-- /Main -->

  <!-- Footer -->
  <AppFooter />
  <!-- /Footer -->

</template>

<style lang="scss">
// Import the general.scss file
@use "./styles/general.scss" as *;

</style>