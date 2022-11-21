<script>
export default{
    name: "AppForm"
}
</script>

<template>
    <section id="app-form" class="app-section-top-padding app-section-bottom-padding bg-off-white">
        <div class="ms_container-small text-center">
            <h2>Subscribe to our Newsletter</h2>
            <form>
                <input class="email-input" type="text" placeholder="Insert your email*">
                <button class="ms_btn ms_btn-bigger ms_btn-black">Send</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixin" as *;
@use "../styles/partials/variables" as *;

#app-form{
    form{
        padding: 1rem .3rem;
        .email-input{
            padding: .6rem;
            border: none;
            border-radius: 2px;
            margin-bottom: 1rem;
            width: 100%;

            &:focus{
                outline:1px solid $main-txt-color
            }
        }

        /* Media Query */
        @include for-sm{
            .email-input{
                margin-bottom: 0;
                margin-right: 1rem;
                width: calc(100% - 14rem);
            }
        }
    }
}
</style>