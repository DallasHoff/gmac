<template>
    <div class="layout-home">
        <hero-header :carousel-photos="carouselPhotos" :photo-index="photoIndex" :full-view="viewingPhotos" @viewing-photo="viewPhoto">
            <transition name="v-fade" mode="out-in">
                <app-navbar v-if="viewingPhotos"></app-navbar>
                <hero-logo v-else></hero-logo>
            </transition>
        </hero-header>
        <carousel-thumbs :carousel-photos="carouselPhotos" :photo-index="photoIndex" @viewing-photo="viewPhoto" v-if="showThumbs"></carousel-thumbs>
        <main class="layout-home__main">
            <div class="layout-home__main-inner">
                <article class="layout-home__page">
                    <div class="layout-home__page-inner">
                        <nuxt></nuxt>
                    </div>
                </article>
                <aside class="layout-home__sidebar">
                    <div class="layout-home__sidebar-inner">
                        <announcements-list></announcements-list>
                        <address-info></address-info>
                        <calendar-info></calendar-info>
                        <schedule-info></schedule-info>
                    </div>
                </aside>
            </div>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {
    name: 'LayoutHome',
    data() {
        return {
            viewingPhotos: false,
            showThumbs: false,
            photoIndex: null,
            carouselPhotos: [
                {
                    path: '/img/griffin_logo.svg',
                    alt: ''
                }
            ]
        }
    },
    methods: {
        viewPhoto(payload) {
            this.viewingPhotos = true;
            this.photoIndex = payload;
        }
    },
    async fetch() {
        const { images } = await this.$content('/home-config/carousel').fetch();
        if (images.length > 0) {
            this.carouselPhotos = images;
            this.showThumbs = true;
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.layout-home {
    &__main {
        background-color: $background1;
        overflow: hidden;
    }
    &__sidebar {
        position: relative;
        background-color: $red2;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 100%;
            width: 100vw;
            background-color: $red2;
        }
        a {
            color: $headings;
        }
    }
    &__page-inner,
    &__sidebar-inner {
        padding: $gap4;
    }
}

@media (min-width: $point2) {
    .layout-home {
        &__main-inner {
            display: flex;
            max-width: $point3;
            margin: auto;
        }
        &__page {
            width: 65%;
        }
        &__sidebar {
            width: 35%;
        }
    }
}
</style>
