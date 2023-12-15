<script>
import { store } from '../store';
export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    },
    emits: ['generate']
}
</script>

<template>
    <div class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" v-model="store.searchInput">
        <button class="btn btn-outline-light" type="submit" @click="$emit('generate')">Search</button>
    </div>
</template>

<style></style>