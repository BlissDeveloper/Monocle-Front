<template>
    <div class="flex flex-column md:pl-8 md:pr-8">
        <img class="responsive center" src="../../assets/monocle_logo.svg"/>
        <label class="mt-3" for="username">Username/Email</label>
        <text-field
                id="username"
                type="username"
                maxLength="50"
                v-model="username"
        />
        <label class="mt-3" for="password">Password</label>
        <text-field
                id="password"
                type="password"
                maxLength="50"
                v-model="password"
        />
        <m-button
                class="mt-3 custom-btn"
                label="Login"
                @click="handleClick"
        ></m-button>
        <div class="flex flex-row justify-content-center mt-2">
            <!--            <a><p class="forgot" @click="goToForgotPass">Forgot Password</p></a>-->
            <router-link to="forgot" class="forgot">Forgot Password</router-link>
        </div>
    </div>
</template>

<script>
    import InputText from "primevue/inputtext";
    import Button from "primevue/button";

    import loginService from "../../service/apiService";

    import localStorageUtil from "../../utils/localStorageUtil";

    export default {
        data() {
            return {
                username: "",
                password: "",
                show: false,
            };
        },
        components: {
            "text-field": InputText,
            "m-button": Button,
        },
        methods: {
            async handleClick() {
                this.emitLoad(true);
                await this.handleResponse();
            },
            emitLoad(isLoading) {
                this.$emit("is-loading", isLoading);
            },
            showToast(message, severity) {
                this.$toast.add({severity: severity, detail: message, life: 3000});
            },
            goToDashboard() {
                this.showToast("Login success!", "success");
                this.$router.replace({name: "accounts"});
            },
            async handleResponse() {
                const loginResponse = await loginService
                    .signIn(this.username, this.password)
                    .catch((error) => {
                        const errorMessage = error.response.data.message || error.message;
                        this.showToast(errorMessage, "error");
                    });
                if (loginResponse.status === 200) {
                    localStorageUtil.setLoggedIn(true);
                    this.goToDashboard();
                }
            },
        },
        emits: ["is-loading"],
    };
</script>

<style scoped>
    .forgot {
        color: rgba(0, 0, 0, 0.7);
        text-decoration: none
    }

    .forgot:hover {
        cursor: pointer;
    }

    text-field {
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        border-radius: 10px;
    }

    text-fiel:hover {
        border-color: #090c4b;
    }

    .custom-btn {
        background: #071E38;
        border-color: #090c4b;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 33px;
    }

    .custom-btn:hover {
        opacity: 0.5;
        background-color: #090c4b;
    }

    .responsive {
        width: 100%;
        max-width: 450px;
        height: auto;
    }

    .center {
        /* display: block; */
        margin-left: auto;
        margin-right: auto;
    }
</style>
