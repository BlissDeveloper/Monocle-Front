<template>
    <teleport to="#modal ">
        <!--    <va-progress-bar indeterminate v-if="isLoading"/>-->
        <ProgressBar v-if="isLoading" mode="indeterminate"/>
    </teleport>
    <div class="grid">
        <div class="col-1 lg:col-4"></div>
        <div class="col-10 lg:col-4">
            <!--            <login-form @is-loading="handleLoad"></login-form>-->
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" @is-loading="handleLoad"/>
                </keep-alive>
            </router-view>
        </div>
        <div class="col-1 lg:col-4"></div>
    </div>
</template>

<script>
    // import LoginForm from "./LoginForm.vue";

    import ProgressBar from 'primevue/progressbar';

    export default {
        data() {
            return {
                isLoading: false,
            };
        },
        components: {
            // "login-form": LoginForm,
            ProgressBar,
        },
        methods: {
            handleLoad(isLoading) {
                this.isLoading = isLoading;
            },
        },
    };
</script>
