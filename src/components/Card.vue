<script>
export default {
    name: 'Card',
    props: ['immagine', 'titolo', 'titoloOriginale', 'lingua', 'voto'],
    data() {
        return {
            itaFlag: { url: '../public/ita-flag.jpg', alt: 'Italian flag' },
            enFlag: { url: '../public/eng-flag.jpg', alt: 'English flag' }
        }
    },
    methods: {
        // funzione per stelle piene
        returnVoteToFive(number) {
            const x = number / 2;
            return Math.ceil(x);
        },
        //funzione per stelle vuote
        emptyStars(num) {
            return 5 - num;
        }
    }
}
</script>

<template>
    <article>
        <div class="film-image">
            <img :src="immagine" alt="">
        </div>
        <h2>Title: {{ titolo }}</h2>
        <h4>Original title: {{ titoloOriginale }}</h4>
        <div class="language">
            <p>Language: </p>
            <img :src="itaFlag.url" :alt="itaFlag.alt" v-if="lingua === 'it'">
            <img :src="enFlag.url" :alt="itaFlag.alt" v-else-if="lingua === 'en'">
            <span v-else>{{ lingua }}</span>
        </div>
        <span>Vote:</span>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in returnVoteToFive(voto)" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in emptyStars(returnVoteToFive(voto))" />
    </article>
</template>

<style lang="scss"></style>