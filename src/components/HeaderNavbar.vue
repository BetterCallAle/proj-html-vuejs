<script>
export default {
  name: "HeaderNavbar",
  props: {
    links: Array
  },

  data(){
    return{
      isMenuActive: false,
      defaultActive: 0
    }
  },

  methods:{
      // Toggle the boolean in isMenuActive
      openMenu(){
        this.isMenuActive = !this.isMenuActive;
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

  <!-- Mobile and Tablet menu btn. If isMenuActive change the icon from burger to an X -->
  <button class="ms_btn ms_btn-small ms_btn-black ms_margin d-lg-none" @click="openMenu">
    <i class="fa-solid" :class="isMenuActive ? 'fa-x' : 'fa-bars'"></i>
  </button>
  <!-- Mobile and Tablet menu btn-->

    <!-- Nav links/Mobile menu -->
    <ul class="d-none d-lg-block" :class="{'mobile-menu': isMenuActive}">

      <!-- If isActive is true, add the active class in desktop mode -->
      <li
        v-for="(link, index) in links"
        :key="index"
        class="d-inline-block header-link"
        :class="{'active': link.isActive}"
      >

        <a :href="link.linkUrl" @click.prevent="letLinkActive(index)">{{ link.linkTxt }}</a>

      </li>
    </ul>
    <!-- /Nav links/Mobile menu -->

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

  /* Mobile and tablet button animation */
  .fa-bars{
    transition: all 300ms linear;
  }

  .fa-x{
    transform: rotate(360deg);
    transition: all 300ms linear;
  }
  /* /Mobile and tablet button animation */

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
    left: 0;
  }

  .header-link {
    display: inline-block;
    width: 100%;
    padding: 1rem 0;
    transition: all 300ms linear;

    &:hover{
      background-color: $off-white;
    }

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

}

/* Media Query */
@include for-lg {
  .header-nav {
    width: 80%;

    .ms_margin {
      margin-left: 0;
      margin-right: 3rem;
    }

    .header-link{
      width: unset;
      margin-right: 3rem;

      &:hover{
        background-color: transparent;
      }

      /* Active */
      &.active {
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
}
</style>
