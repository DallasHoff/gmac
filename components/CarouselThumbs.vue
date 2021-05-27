<template>
    <section class="carousel-thumbs">
        <figure v-for="(image, index) in carouselPhotos" :key="image" @click="$emit('viewing-photo', index)" @keyup.enter="$emit('viewing-photo', index)" class="carousel-thumbs__thumbnail" :class="{'carousel-thumbs__thumbnail--active': photoIndex === index}" tabindex="0">
            <img :src="require('~/assets' + carouselPhotos[index] + '?resize&size=300')" alt="" />
        </figure>
    </section>
</template>

<script>
export default {
    props: ['carouselPhotos', 'photoIndex']
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
