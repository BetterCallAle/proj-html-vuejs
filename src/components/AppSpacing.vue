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
    padding: 2rem 0;
    background-color: $heading-txt-color;
    color: white;

    .app-spacing-link{
        font-size: .8rem;
        font-weight: 700;
        text-transform: uppercase;
    }
}
</style>