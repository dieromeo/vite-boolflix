<script>
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
    components: {
        HeaderComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <HeaderComponent />
    <ul>
        <li v-for="film in store.allFilm">
            <h2>Title: {{ film.title }}</h2>
            <h4>Original title: {{ film.original_title }}</h4>
            <div class="language">
                <p>Language: {{ film.original_language }}</p>
            </div>
            <p>Vote: {{ film.vote_average }}</p>

        </li>
    </ul>
</template>

<style lang="scss">
@use './style/main.scss'
</style>