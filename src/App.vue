<script>
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
// font lato
import "@fontsource/lato";

export default {
    components: {
        HeaderComponent,
        MainComponent
    },
    data() {
        return {
            store,

        }
    },

}
</script>

<template>
    <HeaderComponent />
    <MainComponent />
</template>

<style lang="scss">
@use './style/main.scss' as *;
</style>