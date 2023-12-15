<script>
import CardBoard from './CardBoard.vue';

export default {
    name: 'MainComponent',
    components: {
        CardBoard
    }
}
</script>

<template>
    <main class="py-4 bg-dark">
        <div class="container text-light">
            <CardBoard />
        </div>
    </main>
</template>

<style lang="scss">
@use '../style/partials/variables' as *;

main {
    height: calc(100vh - 104px);
    overflow-y: scroll;
    // background-color: $main-bg;
}
</style>