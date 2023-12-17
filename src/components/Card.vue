<script>
export default {
    name: 'Card',
    props: ['immagine', 'titolo', 'titoloOriginale', 'lingua', 'voto', 'overview'],
    data() {
        return {
            itaFlag: { url: '../ita-flag.jpg', alt: 'Italian flag' },
            enFlag: { url: '../eng-flag.jpg', alt: 'English flag' },
            overStatus: 'd-none'
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
        },
        //funzione per mostrare info 
        changeInfoStatus() {
            if (this.overStatus === 'd-none') {
                this.overStatus = 'd-block';
            } else {
                this.overStatus = 'd-none'
            }
        }
    }
}
</script>

<template>
    <article class="col-6 col-lg-4 col-xl-3">
        <!-- div contenitore immagine e info  -->
        <div class="film-image mb-3 position-relative" @mouseenter="changeInfoStatus" @mouseleave="changeInfoStatus">
            <img :src="immagine" alt="" class="main-img rounded-2 shadow-lg"
                onerror="this.src='../../public/no-image-icon-23483.png'">
            <!-- info film  -->
            <div class="film-info position-absolute top-0 start-0 end-0 p-3 rounded 2 bg-black h-100 overflow-y-auto"
                :class="overStatus">
                <!-- titolo  -->
                <h2 class="fw-bolder fs-5">Title: {{ titolo }}</h2>
                <h4 v-show="titoloOriginale !== titolo">Original title: {{ titoloOriginale }}</h4>
                <!-- lingua  -->
                <div class="language d-flex align-items-center">
                    <p class="m-0">Language: </p>
                    <img :src="itaFlag.url" :alt="itaFlag.alt" v-if="lingua === 'it'">
                    <img :src="enFlag.url" :alt="itaFlag.alt" v-else-if="lingua === 'en'">
                    <span v-else>{{ lingua }}</span>
                </div>
                <!-- voto  -->
                <div>
                    <span>Vote:</span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in returnVoteToFive(voto)" class="text-warning" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in emptyStars(returnVoteToFive(voto)) " />
                </div>
                <!-- overview  -->
                <div class="overview-container my-2">
                    <p class=""><strong>Overview:</strong> <br> {{ overview }}</p>
                </div>

            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.film-image {
    width: 250px;
    min-height: 375px;

    .main-img {
        height: 100%;
        width: 100%;
    }

    .overview-container {
        font-size: 14px;
    }

}

.language img {
    display: block;
    height: 15px;
    margin-left: 10px;
}
</style>