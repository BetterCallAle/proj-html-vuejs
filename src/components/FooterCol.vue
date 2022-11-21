<script>
export default{
    name: "FooterCol",
    props:{
        heading: String,
        links: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="footer-col-wrapper">
            <h3 class="footer-nav-heading">{{ heading }}</h3>
            <ul>
                <li v-for="(link, index) in links" :key="index" class="footer-nav-links">
                    <i class="fa-solid fa-chevron-right"></i>
                    <a :href="link.linkUrl">{{ link.linkTxt }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.footer-nav-links{
    display: flex;
    font-size: .9rem;
    font-weight: 700;
    padding: 1rem 0;
    border-bottom: 1px solid $light-gray;

    .fa-chevron-right{
        margin: .3rem .2rem 0 0;
    }

    a:hover{
        color: black;
    }
}
</style>