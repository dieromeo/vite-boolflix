<script>
// component import
import SearchBar from './SearchBar.vue';
import Logo from './Logo.vue';
//store import
import { store } from '../store';
// axios import
import axios from 'axios';
export default {
    name: 'HeaderComponent',
    components: {
        SearchBar,
        Logo
    },
    data() {
        return {
            store
        }
    },
    created() {
        this.searchFilm();
    },
    methods: {
        // funzione per la chimata api di film e serie
        searchFilm() {
            if (store.searchInput !== '') {
                // chiamata axios per i film
                axios.get(store.urlApiSearchFilm + '&query=' + store.searchInput).then((response) => {
                    store.allFilm = response.data.results;
                    if (store.allFilm.length === 0 & store.tvSeries.length === 0) {
                        store.status = 'No'
                    } else {
                        store.status = 'Searched'
                    }
                });

                //chiamata axios per le serie tv
                axios.get(store.urlApiTvSeries + store.searchInput).then((response) => {
                    store.tvSeries = response.data.results;
                });
            }
            else { //ritorna i popolari
                axios.get(store.urlApiAllFilm).then((response) => {
                    store.allFilm = response.data.results;
                });
                axios.get(store.urlApiPopularSeries).then((response) => {
                    store.tvSeries = response.data.results;
                });
            }
            // reset campo di ricerca
            store.searchInput = '';
        },
    }
}
</script>

<template>
    <header class="py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <Logo />
            <SearchBar @generate="searchFilm" />
        </div>
    </header>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

header {
    background-color: $header-bg;
}
</style>