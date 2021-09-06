<template>
    <router-view></router-view>
    <div>
        <Toast position="bottom-right" group="br"/>
    </div>
</template>

<script>
    import Toast from "primevue/toast";
    export default {
        name: "App",
        components: {
            Toast,
        },
    };
</script>

<style>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

    @font-face {
        font-family: "ProximaNovaRegular";
        src: url("./fonts/proxima_nova_reg.otf");
    }

    * {
        font-family: "ProximaNovaRegular", serif;
    }
</style>
