<template>
    <div class="layout-home">
        <hero-header :carousel="carousel" :photo-index="photoIndex" :full-view="viewingPhotos" @viewing-photo="viewPhoto">
            <transition name="v-fade" mode="out-in">
                <app-navbar v-if="viewingPhotos"></app-navbar>
                <hero-logo v-else></hero-logo>
            </transition>
        </hero-header>
        <carousel-thumbs :carousel="carousel" :photo-index="photoIndex" @viewing-photo="viewPhoto"></carousel-thumbs>
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
import AppNavbar from '~/components/AppNavbar.vue'
import HeroHeader from '~/components/HeroHeader.vue'
import HeroLogo from '~/components/HeroLogo.vue'
import CarouselThumbs from '~/components/CarouselThumbs.vue'
import AnnouncementsList from '~/components/AnnouncementsList.vue'
import AddressInfo from '~/components/AddressInfo.vue'
import ScheduleInfo from '~/components/ScheduleInfo.vue'
import CalendarInfo from '~/components/CalendarInfo.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
    data() {
        return {
            viewingPhotos: false,
            photoIndex: null,
            carousel: {
                path: '/img/photos/',
                photos: ['15', '2', '14', '10', '11', '8', '12', '6', '13', '7', '9'],
                bgPhoto: '15',
                alts: ['', '', '', '', '', '', '', '', '', '', ''],
                ext: 'jpg'
            }
        }
    },
    methods: {
        viewPhoto(payload) {
            this.viewingPhotos = true;
            this.photoIndex = payload;
        }
    },
    components: {
        AppNavbar,
        HeroHeader,
        HeroLogo,
        CarouselThumbs,
        AnnouncementsList,
        AddressInfo,
        ScheduleInfo,
        CalendarInfo,
        AppFooter
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
