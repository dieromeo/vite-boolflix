<script>
import { store } from '../store';
export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <input type="text" placeholder="Cerca film..." v-model="store.searchInput">
    <button @click="$emit('generate')">Search</button>
</template>

<style></style>