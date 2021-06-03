<template>
    <section class="carousel-thumbs">
        <figure v-for="(photo, index) in carouselPhotos" :key="photo.path" :ref="'thumb' + index" @click="$emit('viewing-photo', index)" @keyup.enter="$emit('viewing-photo', index)" class="carousel-thumbs__thumbnail" :class="{'carousel-thumbs__thumbnail--active': photoIndex === index}" tabindex="0">
            <img :src="require('~/assets' + photo.path + '?resize&size=300')" :alt="photo.alt" />
        </figure>
    </section>
</template>

<script>
export default {
    name: 'CarouselThumbs',
    props: ['carouselPhotos', 'photoIndex'],
    watch: {
        photoIndex(n, o) {
            // Keep active thumbnail in view by scrolling container
            var animLengthMs = 200;
            var offscreenTolerance = 20;
            var container = this.$el;
            var thumbnail = this.$refs['thumb' + n][0];
            var scrollPosition = container.scrollLeft;
            var animStartTime = null;
            var animScrollTo = null;
            var isOffscreenRight = thumbnail.offsetLeft + offscreenTolerance > scrollPosition + container.offsetWidth;
            var isOffscreenLeft = thumbnail.offsetLeft + thumbnail.offsetWidth - offscreenTolerance < scrollPosition;
            if (isOffscreenRight || isOffscreenLeft) {
                animScrollTo = thumbnail.offsetLeft;
                if (window) window.requestAnimationFrame(animateScroll);
            }
            // Animation for scrolling
            function animateScroll(timestamp) {
                if (animStartTime === null) animStartTime = timestamp;
                var elapsed = timestamp - animStartTime;
                var positionDiff = Math.abs(scrollPosition - animScrollTo);
                var direction = 1;
                var stopMethod = 'min';
                if (animScrollTo < scrollPosition) {
                    direction = -1;
                    stopMethod = 'max';
                }
                container.scrollLeft = Math[stopMethod](animScrollTo, scrollPosition + ((elapsed / animLengthMs) * positionDiff * direction));
                if (elapsed <= animLengthMs) {
                    window.requestAnimationFrame(animateScroll);
                }
            }
        }
    }
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
