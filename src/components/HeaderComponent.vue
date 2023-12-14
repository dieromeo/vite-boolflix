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
    }
}
</script>

<template>
    <header>
        <SearchBar />
    </header>
</template>

<script></script>