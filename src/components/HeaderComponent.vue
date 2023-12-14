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
        axios.get(store.urlApiAllFilm).then((response) => {
            store.allFilm = response.data.results;
        })
    },
    methods: {
        searchFilm() {
            axios.get(store.urlApiSearchFilm + '&query=' + store.searchInput).then((response) => {
                console.log(response);
            })
        }
    }
}
</script>

<template>
    <header>
        <SearchBar @generate="searchFilm" />
    </header>
</template>

<script></script>