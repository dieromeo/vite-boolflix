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
    },
}
</script>

<template>
    <HeaderComponent />
    <div class="film">
        <h2>FILM</h2>
        <ul>
            <li v-for="film in store.allFilm">
                <div class="film-image">
                    <img :src="store.urlFilmImage + film.poster_path" alt="">
                </div>
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
    </div>

    <div class="series">
        <h2>TV SERIES</h2>
        <ul>
            <li v-for="serie in store.tvSeries">
                <div class="film-image">
                    <img :src="store.urlFilmImage + serie.poster_path" alt="">
                </div>
                <h2>Title: {{ serie.name }}</h2>
                <h4>Original title: {{ serie.original_name }}</h4>
                <div class="language">
                    <p>Language: </p>
                    <img :src="itaFlag.url" :alt="itaFlag.alt" v-if="serie.original_language === 'it'">
                    <img :src="enFlag.url" :alt="itaFlag.alt" v-else-if="serie.original_language === 'en'">
                    <span v-else>{{ serie.original_language }}</span>
                </div>
                <p>Vote: {{ serie.vote_average }}</p>
            </li>
        </ul>
    </div>
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