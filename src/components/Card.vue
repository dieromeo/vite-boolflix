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
    <article class="col-6 col-lg-4 col-xl-3">
        <div class="film-image mb-3">
            <img :src="immagine" alt="" class="rounded-2 shadow-lg"
                onerror="this.src='../../public/no-image-icon-23483.png'">
        </div>
        <div class="film-info">
            <h2 class="fw-bolder fs-5">Title: {{ titolo }}</h2>
            <h4 v-show="titoloOriginale !== titolo">Original title: {{ titoloOriginale }}</h4>
            <div class="language d-flex align-items-center">
                <p class="m-0">Language: </p>
                <img :src="itaFlag.url" :alt="itaFlag.alt" v-if="lingua === 'it'">
                <img :src="enFlag.url" :alt="itaFlag.alt" v-else-if="lingua === 'en'">
                <span v-else>{{ lingua }}</span>
            </div>
            <div>
                <span>Vote:</span>
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in returnVoteToFive(voto)" class="text-warning" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in emptyStars(returnVoteToFive(voto)) " />
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.film-image {
    width: 250px;
    min-height: 375px;

    img {
        height: 100%;
        width: 100%;
    }
}

.language img {
    display: block;
    height: 15px;
    margin-left: 10px;
}
</style>