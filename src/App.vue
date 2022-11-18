<script>
import AppHeader from './components/AppHeader.vue';
import JumboTop from './components/JumboTop.vue';
import AppDescription from './components/AppDescription.vue';
export default{
  components:{
    AppHeader,
    JumboTop,
    AppDescription
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
  </main>

</template>

<style lang="scss">
// Import the general.scss file
@use "./styles/general.scss" as *;

</style>