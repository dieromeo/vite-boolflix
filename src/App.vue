<script>
import SearchBar from './components/SearchBar.vue';
import { store } from './store';
import axios from 'axios';

export default {
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
    }
}
</script>

<template>
    <SearchBar />
</template>

<style lang="scss">
@use './style/main.scss'
</style>