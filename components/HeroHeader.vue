<template>
    <header class="hero-header" :class="{'hero-header--full-view': fullView}">
        <picture class="hero-header__picture" v-if="!fullView">
            <source :srcset="require('~/assets' + carouselPhotos[0] + '?resize&size=2000')" :media="mediaPoints.full" />
            <source :srcset="require('~/assets' + carouselPhotos[0] + '?resize&size=1000')" :media="mediaPoints.mid" />
            <img :src="require('~/assets' + carouselPhotos[0] + '?resize&size=300')" alt="" />
        </picture>
        <flickity ref="carousel" :options="flickityOptions" class="hero-header__gallery" v-else>
            <picture class="hero-header__picture" v-for="(photo, index) in carouselPhotos" :key="photo">
                <source :srcset="require('~/assets' + photo + '?resize&size=2000')" :media="mediaPoints.full" />
                <source :srcset="require('~/assets' + photo + '?resize&size=1000')" :media="mediaPoints.mid" />
                <img :src="require('~/assets' + photo + '?resize&size=300')" alt="" />
            </picture>
        </flickity>
        <div class="hero-header__inner">
            <slot></slot>
        </div>
    </header>
</template>

<script>
export default {
    props: ['fullView', 'carouselPhotos', 'photoIndex'],
    data() {
        return {
            mediaPoints: {
                full: '(min-width: 1366px)',
                mid: '(min-width: 320px)'
            },
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                setGallerySize: false,
                contain: true,
                on: {
                    ready: () => {
                        this.$nextTick(() => {
                            this.$refs.carousel.select(this.photoIndex);
                        });
                    },
                    select: (photo) => {
                        if (this.carouselReady === true) this.$emit('viewing-photo', photo);
                        this.carouselReady = true;
                    }
                }
            },
            carouselReady: false
        }
    },
    watch: {
        photoIndex: {
            immediate: true,
            handler(n, o) {
                if (this.$refs.carousel) {
                    this.$refs.carousel.select(n);
                }
            }
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.hero-header {
    position: relative;
    padding: $gap1 0;
    background-color: $light6;
    overflow: hidden;
    &__gallery {
        display: block;
        position: absolute !important;
        width: 100%;
        height: 100%;
        top: 0;
    }
    &__picture {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            filter: grayscale(1) brightness(1.3);
            opacity: 0.3;
        }
    }
    &__inner {
        z-index: 5000;
        position: relative;
        max-width: $point3;
        margin: auto;
        padding: 0 $gap2;
    }
    &::before {
        content: '';
        z-index: 4000;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6rem;
        background-image: linear-gradient(180deg,rgba(0,0,0,.9),rgba(0,0,0,.01));
        opacity: 0;
        transition: opacity 300ms;
    }
    &--full-view {
        min-height: 50vh;
        height: calc(62.5vw - #{$gap3});
        max-height: 85vh;
        .hero-header__picture {
            img {
                object-position: center center;
                filter: none;
                opacity: 1;
            }
        }
        &::before {
            opacity: 1;
        }
    }
    .app-navbar__wordmark-heading {
        color: white;
        text-shadow: 0 0 0.3em black;
    }
}

@media (min-width: $point1) {
    .hero-header {
        padding: $gap3 0;
        &__inner {
            padding: 0 $gap4;
        }
    }
}
</style>
