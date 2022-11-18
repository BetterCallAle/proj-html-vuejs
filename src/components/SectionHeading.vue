<script>
export default{
    name:"SectionHeading",
    props:{
        title: String
    }
}
</script>

<template>
    <div class="section-heading text-center">
        <h5 class="surtitle">Phasellus eget metus</h5>
        <h2 class="heading">{{title}}</h2>
    </div>
</template>

<style lang="scss" scoped>
.section-heading {
    .heading{
        font-size: 2.6rem;

        &::after{
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>