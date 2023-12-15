<script>
import Card from './Card.vue';
import { store } from '../store';
export default {
    name: 'CardBoard',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="film">
        <h2>FILM</h2>
        <ul>
            <Card v-for="film in store.allFilm" :immagine="store.urlFilmImage + film.poster_path" :titolo="film.title"
                :titoloOriginale="film.original_title" :lingua="film.original_language" :voto="film.vote_average" />
        </ul>
    </div>
    <div class="series">
        <h2>TV SERIES</h2>
        <ul>
            <Card v-for="serie in store.tvSeries" :immagine="store.urlFilmImage + serie.poster_path" :titolo="serie.title"
                :titoloOriginale="serie.original_title" :lingua="serie.original_language" :voto="serie.vote_average" />
        </ul>
    </div>
</template>

<style lang="scss"></style>