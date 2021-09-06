<template>
    <div class="flex flex-column align-content-center pt-5 md:pl-8 md:pr-8">
        <img alt="logo" class="responsive center" src="../../assets/monocle_logo.svg"/>
        <div class="flex flex-row justify-content-center">
            <p class=" mt-4">Enter the email address associated with your account
                and we’ll send you a link to reset your password</p>
        </div>
        <label class="mt-3" for="email">Email</label>
        <input-text id="email"
                    type="email"
                    maxLength="50"
                    v-model="email"
                    class="mt-1">
        </input-text>
        <Button label="Continue" class="mt-3 p-3"/>
        <div class="flex flex-row justify-content-center pt-3">
            Go back to
            <router-link class="ml-1" to="login">Login page</router-link>
        </div>
    </div>
</template>

<script>
    import InputText from "primevue/inputtext";
    import Button from 'primevue/button';

    export default {
        name: "ForgotPassForm",
        components: {
            InputText,
            Button
        },
        data() {
            return {
                email: ''
            }
        },
        methods: {
            emitLoad(isLoading) {
                this.$emit("is-loading", isLoading);
            },
        },
        emits: ["is-loading"]
    }
</script>

<style scoped>
    Button {
        background: #01152D;
        box-shadow: 0px 4px 4px rgba(0, 0, 128, 0.2);
        border-radius: 10px;
        border-color: #01152D
    }

    Button:hover {
        opacity: 0.5;
        background-color: #01152D;
    }

    p {
        margin: 0;
        padding: 0
    }

    .responsive {
        width: 60%;
        max-width: 450px;
        height: auto;
    }

    .center {
        /* display: block; */
        margin-left: auto;
        margin-right: auto;
    }
</style>