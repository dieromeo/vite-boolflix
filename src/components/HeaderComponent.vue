<script>
import SearchBar from './SearchBar.vue';
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'HeaderComponent',
    components: {
        SearchBar
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
        searchFilm() {
            if (store.searchInput !== '') {
                // chiamata axios per i film
                axios.get(store.urlApiSearchFilm + '&query=' + store.searchInput).then((response) => {
                    store.allFilm = response.data.results;
                });
                //chiamata axios per le serie tv
                axios.get(store.urlApiTvSeries + store.searchInput).then((response) => {
                    store.tvSeries = response.data.results;
                    console.log(store.tvSeries);
                });
            }
            else {
                axios.get(store.urlApiAllFilm).then((response) => {
                    store.allFilm = response.data.results;
                })
            }
        },
    }
}
</script>

<template>
    <header>
        <SearchBar @generate="searchFilm" />
    </header>
</template>

<script></script>