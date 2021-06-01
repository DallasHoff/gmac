<template>
    <section class="carousel-thumbs">
        <figure v-for="(photo, index) in carouselPhotos" :key="photo.path" @click="$emit('viewing-photo', index)" @keyup.enter="$emit('viewing-photo', index)" class="carousel-thumbs__thumbnail" :class="{'carousel-thumbs__thumbnail--active': photoIndex === index}" tabindex="0">
            <img :src="require('~/assets' + photo.path + '?resize&size=300')" :alt="photo.alt" />
        </figure>
    </section>
</template>

<script>
export default {
    name: 'CarouselThumbs',
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
    overflow-y: hidden;
    background-color: $subtle;
    &__thumbnail {
        filter: saturate(0%) brightness(145%) contrast(70%);
        transition: filter 400ms;
        cursor: pointer;
        img {
            width: auto;
            height: 18vh;
            max-height: 250px;
        }
        &:hover, &:focus, &--active {
            filter: none;
        }
        &:first-child {
            margin-left: auto;
        }
        &:last-child {
            margin-right: auto;
        }
    }
}
</style>
