<script>
export default {
  name: "JumboTop",
};
</script>

<template>
  <section id="jumbo-top">
      <div class="container text-center text-md-start">
        <h1>Tech Forum!</h1>
        <p>Discuss all the latest technology news and trends</p>
        <a class="ms_btn ms_btn-normal ms_btn-light-blue">Get Avada now! <i class="fa-solid fa-chevron-right"></i></a>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

#jumbo-top{
    margin-top: $header-height;
    height: calc(100vh - $header-height);
    display: flex;
    align-items: center;
    background-image: url(../assets/img/home_slider_bg.jpg);
    background-position: center;
    background-size: cover;
    color: white;
    h1{
        font-size: 5rem;
        font-weight: 700;
        margin: 0;
    }

    p{
      margin-bottom: 1.5rem;
    }
}
</style>
