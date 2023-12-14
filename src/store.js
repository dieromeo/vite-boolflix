import { reactive } from "vue";

export const store = reactive({
    urlApiAllFilm: 'https://api.themoviedb.org/3/discover/movie?api_key=07d808efb99c82e30d2174d4fe839582',
    urlApiSearchFilm: 'https://api.themoviedb.org/3/search/movie?api_key=07d808efb99c82e30d2174d4fe839582',
    allFilm: [],
    searchInput: '',
    searchedFilm: []
})