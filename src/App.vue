<script>
import AppHeader from './components/AppHeader.vue';
import JumboTop from './components/JumboTop.vue';
import AppDescription from './components/AppDescription.vue';
import ArticleSection from './components/ArticleSection.vue';
import AppSpacing from './components/AppSpacing.vue';
import {store} from "./store";
export default{
  components:{
    AppHeader,
    JumboTop,
    AppDescription,
    ArticleSection,
    AppSpacing
  },
  data(){
    return{
      store,
    }
  },
  created(){
    this.organizeTheArray()
    console.log(this.store);
  },
  methods:{
    organizeTheArray(){
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
      });
    }
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <main>
    <JumboTop />
    <AppDescription />
    <ArticleSection />
    <AppSpacing :text="'read our blog'" />
  </main>

</template>

<style lang="scss">
// Import the general.scss file
@use "./styles/general.scss" as *;

</style>