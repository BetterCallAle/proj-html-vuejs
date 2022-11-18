<script>
import AppHeader from './components/AppHeader.vue';
import JumboTop from './components/JumboTop.vue';
import AppDescription from './components/AppDescription.vue';
import ArticleSection from './components/ArticleSection.vue';
export default{
  components:{
    AppHeader,
    JumboTop,
    AppDescription,
    ArticleSection
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
  </main>

</template>

<style lang="scss">
// Import the general.scss file
@use "./styles/general.scss" as *;

</style>