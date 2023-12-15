<script>
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

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

.language {
    display: flex;
    align-items: center;

    img {
        display: block;
        height: 15px;
        margin-left: 10px;
    }
}
</style>