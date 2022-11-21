<script>
export default{
    name: "AppSpacing",
    props:{
        text: String
    }
}
</script>

<template>
    <section class="app-spacing text-center">
        <a href="#" class="app-spacing-link">
            {{ text }}
            <i class="fa-solid fa-arrow-right-long"></i>
        </a>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.app-spacing{
    background-color: $heading-txt-color;
    margin-top: 2rem;
    color: white;

    .app-spacing-link{
        font-size: .8rem;
        font-weight: 700;
        text-transform: uppercase;
        display: block;
        width: 100%;
        padding: 3rem 0;
        transition: all 250ms linear;
    }
}
</style>