<script>
export default {
  name: "HeaderNavbar",
  props: {
    links: Array
  },

  data(){
    return{
        isMenuActive: false,
        isSearchOpen: false,
        defaultActive: 0
    }
  },

  methods:{
      // Toggle the boolean in isMenuActive
      openMenu(){
        this.isMenuActive = !this.isMenuActive;
        this.isSearchOpen = false;
      },

      // Switch the active class
      letLinkActive(index){
        // remove the active class from the prev link
        this.links[this.defaultActive].isActive = false;
        // add the active calss to the current link
        this.links[index].isActive = true;
        // make the default active link the clicked one
        this.defaultActive = index;
      }
  }
}
</script>

<template>
  <!-- Navbar -->
  <nav class="header-nav d-flex flex-row-reverse flex-lg-row align-items-center justify-content-start justify-content-lg-end">

  <!-- Mobile and Tablet menu btn-->
  <button class="ms_btn ms_btn-small ms_btn-black ms_margin d-lg-none" @click="openMenu">
    <i class="fa-solid fa-bars" :class="isMenuActive ? 'fa-x' : 'fa-bars'"></i>
  </button>
  <!-- Mobile and Tablet menu btn-->

    <!-- Nav links -->
    <ul class="d-none d-lg-block" :class="{'mobile-menu': isMenuActive}">
      <!-- If IsMenuActive is true add 'header-link-mobile' class. Else add 'header-link-desktop' -->
      <li
        v-for="(link, index) in links"
        :key="index"
        class="d-inline-block ms_margin header-link"
        :class="{'header-link-desktop': !isMenuActive, 'active': link.isActive, 'header-link-mobile' : isMenuActive}"
      >
        <a :href="link.linkUrl" @click.prevent="letLinkActive(index)">{{ link.linkTxt }}</a>
      </li>
    </ul>
    <!-- /Nav links -->

    <!-- Join button -->
    <a href="#" class="ms_btn ms_btn-small ms_btn-black ms_margin">Join us</a>
    <!-- /Join button -->

    <!-- Search -->
    <button class="ms_btn-search">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
    <!-- /Search -->
  </nav>
  <!-- /navbar -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;
.header-nav {
  width: 60%;
  color: white;

  .header-link {
    display: inline-block;
    padding: 1rem 0;
    transition: all 300ms linear;

    a{
      padding: 2rem 0
    }

    &:hover {
      color: blue;
    }
 
  }

  .ms_margin {
    margin-left: 1rem;
  }

  .mobile-menu {
    display: block !important;
    width: 100%;
    color: black;
    text-align: center;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 500px 1000px 200px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 125ms linear;

    .header-link-mobile {
      width: 100%;
    }
  }
}

/* Media Query */
@include for-lg {
  .header-nav {
    width: 80%;

    .ms_margin {
      margin-left: 0;
      margin-right: 3rem;
    }

    /* Active */
    .header-link-desktop.active {
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 30px;
        height: 30px;
        background-color: $main-light-blue;
        position: absolute;
        bottom: -40px;
        right: 45%;
        transform: rotate(135deg) translateX(-50%);
      }
    }
  }
}
</style>
