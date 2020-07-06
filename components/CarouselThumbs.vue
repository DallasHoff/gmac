<template>
    <section class="carousel-thumbs">
        <figure v-for="(image, index) in carousel.photos" :key="image" @click="$emit('viewing-photo', index)" @keyup.enter="$emit('viewing-photo', index)" class="carousel-thumbs__thumbnail" :class="{'carousel-thumbs__thumbnail--active': photoIndex === index}" tabindex="0">
            <img :src="carousel.path + 'thumb/' + carousel.photos[index] + '.' + carousel.ext" :alt="carousel.alts[index]" />
        </figure>
    </section>
</template>

<script>
export default {
    props: ['carousel', 'photoIndex']
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.carousel-thumbs {
    display: flex;
    align-items: center;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    background-color: $subtle;
    &__thumbnail {
        flex: 1 0 auto;
        filter: saturate(0%) brightness(145%) contrast(70%);
        transition: filter 400ms;
        cursor: pointer;
        img {
            width: 100%;
            max-width: 34vw;
            height: auto;
        }
        &:hover, &:focus, &--active {
            filter: none;
        }
    }
}
</style>
