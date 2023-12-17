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
    <div class="film border-bottom border-4">
        <h2 class="text-center mb-4 text-uppercase">{{ store.status }} films</h2>
        <ul class="row gy-4">
            <Card v-for="film in store.allFilm" :immagine="store.urlFilmImage + film.poster_path" :titolo="film.title"
                :titoloOriginale="film.original_title" :lingua="film.original_language" :voto="film.vote_average"
                :overview="film.overview" />
        </ul>
    </div>
    <div class="series">
        <h2 class="text-center my-4 text-uppercase">{{ store.status }} series</h2>
        <ul class="row gy-4">
            <Card v-for="serie in store.tvSeries" :immagine="store.urlFilmImage + serie.poster_path" :titolo="serie.name"
                :titoloOriginale="serie.original_name" :lingua="serie.original_language" :voto="serie.vote_average"
                :overview="serie.overview" />
        </ul>
    </div>
</template>

<style lang="scss" ></style>