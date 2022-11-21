<script>
export default{
    name: "AppCta"
}
</script>

<template>
    <section id="app-cta">
        <div class="cta-wrapper text-center text-light">
            <h2>Hey! Join to our Community</h2>
            <p>Nulla molestie tortor nec lectus veneratis, sed blandit dui finibus. Curabitur feugiat vulputate purus ipsum dolores ficilis uns etra.</p>
            <a href="#" class="ms_btn ms_btn-normal ms_btn-light-blue">Sign up <i class="fa-solid fa-chevron-right"></i></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixin" as *;

#app-cta{
    background-image: url(../assets/img/join_now_cta_bg.jpg);
    background-size: cover;

    .cta-wrapper{
        padding-top: 7rem;
        padding-bottom: 7rem;
        padding-left: 3rem;
        padding-right: 3rem;
        text-align: center;
        h2{
            font-size: 3rem;
            font-weight: 700;
            margin: 0;
        }
        
        p{
            margin: 2rem 0;
        }
    }

    @include for-sm{
        .cta-wrapper{
            padding-left: 6rem;
            padding-right: 6rem;
        }
    }
    
    @include for-md{
        .cta-wrapper{
            padding-right: 13rem;
            padding-left: 13rem;
        }
    }
}


</style>