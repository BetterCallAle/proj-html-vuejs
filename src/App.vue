<script>
import AppHeader from './components/AppHeader.vue';
import JumboTop from './components/JumboTop.vue';
export default{
  components:{
    AppHeader,
    JumboTop
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <main>
    <JumboTop />
  </main>

</template>

<style lang="scss">
// Import the general.scss file
@use "./styles/general.scss" as *;

</style>