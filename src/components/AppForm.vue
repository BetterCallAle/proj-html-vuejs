<script>
export default{
    name: "AppForm",
    data(){
        return{
            isUserMailValid: true,
            userMail: ""
        }
    },
    methods:{
        checkUserMail(){
            // chek if user write a correct email
            if(!this.userMail.includes("@") || !this.userMail.includes(".")){
                this.isUserMailValid = false;
            } else {
                this.isUserMailValid = true;
            }

            //clean the input
            this.userMail = "";
        }
    }
}
</script>

<template>
    <section id="app-form" class="padding-top padding-bottom bg-off-white">
        <div class="ms_container-small text-center">
            <h2>Subscribe to our Newsletter</h2>
            <form>
                <small v-if="!isUserMailValid" class="error">The email is not valid. Please insert a valid email.</small>
                
                <input class="email-input" 
                       type="text" 
                       placeholder="Insert your email*" 
                       v-model.trim="userMail"
                >

                <button @click.prevent="checkUserMail" class="ms_btn ms_btn-bigger ms_btn-black">Send</button>

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
            border: 1px solid $light-dark;
            border-radius: 2px;
            margin-bottom: 1rem;
            width: 100%;

            &:focus{
                outline:1px solid $light-dark;
            }
        }

        .error{
            display: block;
            color: red;
            font-weight: 500;
            margin-bottom: .5rem;
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