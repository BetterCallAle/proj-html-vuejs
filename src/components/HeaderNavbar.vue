<script>
export default {
  name: "HeaderNavbar",
  props:{
    links: Array,
    menuActive: Boolean
  }
};
</script>

<template>
  <!-- Navbar -->
  <nav class="header-nav d-flex flex-row-reverse flex-lg-row align-items-center justify-content-start justify-content-lg-end">
    <!-- Pc menu -->
    <ul class="d-none d-lg-block">

      <li
        v-for="(link, index) in links"
        :key="index"
        class="d-inline-block ms_margin"
        :class="{'active' : link.isActive}"
      >

        <a :href="link.linkUrl" @click.prevent="$emit('linkClicked', index)" >{{ link.linkTxt }}</a>

      </li>
    </ul>
    <!-- /Pc menu -->

    <!-- Mobile and Tablet menu -->

    <!-- If Menu is close -->
    <button
      v-if="!menuActive"
      class="ms_btn ms_btn-small ms_btn-black ms_margin d-lg-none"
      @click="$emit('buttonClicked')"
    >
      <i class="fa-solid fa-bars"></i>
    </button>

    <!-- If Menu is open -->
    <button
      v-else
      class="ms_btn ms_btn-small ms_btn-black ms_margin d-lg-none"
      @click="$emit('buttonClicked')"
    >
      <i class="fa-solid fa-x"></i>
    </button>

    <!-- If the button is clicked -->
    <div v-if="menuActive" class="wall"></div>
    <div v-if="menuActive" class="mobile-menu">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.linkUrl">{{ link.linkTxt }}</a>
        </li>
      </ul>
    </div>
    <!-- /Mobile and Tablet menu -->

    <a href="#" class="ms_btn ms_btn-small ms_btn-black ms_margin">JOIN US</a>

    <button class="ms_btn-search">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>

  </nav>
  <!-- /navbar -->
</template>

<style lang="scss" scoped>
    @use "../styles/partials/variables" as *;
    @use "../styles/partials/mixin" as *;
    .header-nav {
    width: 60%;
    color: white;

    .active{
        position: relative;
        &::after{
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            background-color: $main-light-blue;
            position: absolute;
            bottom: -50px;
            right: 50%;
            transform: rotate(135deg) translateX(-50%);
        }
    }

    .ms_margin {
        margin-left: 1rem;
    }
    .mobile-menu {
        width: 100%;
        color: black;
        text-align: center;
        background-color: white;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        box-shadow: 0 300px 1000px 200px rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);

        li {
            margin-bottom: 1rem;
        }
    }
    }

    @include for-lg {
    .header-nav {
        width: 80%;

        .ms_margin {
            margin-left: 0;
            margin-right: 3rem;
        }
    }
    }
</style>
