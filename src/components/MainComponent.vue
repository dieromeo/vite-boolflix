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
    <main class="py-4">
        <div class="container">
            <CardBoard />
        </div>
    </main>
</template>

<style lang="scss">
main {
    height: calc(100vh - 104px);
    overflow-y: scroll;
}
</style>