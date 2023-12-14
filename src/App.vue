<script>
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
    components: {
        HeaderComponent
    },
    data() {
        return {
            store,
            itaFlag: { url: '../public/ita-flag.jpg', alt: 'Italian flag' },
            enFlag: { url: '../public/eng-flag.jpg', alt: 'English flag' }
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
                <p>Language: </p>
                <img :src="itaFlag.url" :alt="itaFlag.alt" v-if="film.original_language === 'it'">
                <img :src="enFlag.url" :alt="itaFlag.alt" v-else-if="film.original_language === 'en'">
                <span v-else>{{ film.original_language }}</span>
            </div>
            <p>Vote: {{ film.vote_average }}</p>

        </li>
    </ul>
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