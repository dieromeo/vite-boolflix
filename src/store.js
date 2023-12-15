import { reactive } from "vue";

export const store = reactive({
    urlApiAllFilm: 'https://api.themoviedb.org/3/movie/popular?api_key=07d808efb99c82e30d2174d4fe839582',
    urlApiSearchFilm: 'https://api.themoviedb.org/3/search/movie?api_key=07d808efb99c82e30d2174d4fe839582',
    urlApiTvSeries: 'https://api.themoviedb.org/3/search/tv?api_key=07d808efb99c82e30d2174d4fe839582&query=',
    urlApiPopularSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=07d808efb99c82e30d2174d4fe839582',
    urlFilmImage: 'https://image.tmdb.org/t/p/w200/',
    allFilm: [],
    searchInput: '',
    tvSeries: []
})