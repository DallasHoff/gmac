<template>
    <appear-section id="announcements" class="announcements-list" v-if="announcements.length > 0">
        <stroke-heading>Announcements</stroke-heading>
        <ul class="announcements-list__list">
            <li class="announcements-list__item" v-for="(announcement, index) in announcements" :key="announcement.headline">
                <b>{{announcement.headline}}<span v-if="announcement.body">:</span></b> {{announcement.body}}
                <stroke-rule v-if="index < (announcements.length - 1)"></stroke-rule>
            </li>
        </ul>
    </appear-section>
</template>

<script>
import AppearSection from '~/components/AppearSection.vue'

export default {
    name: 'AnnouncementsList',
    components: {
        AppearSection
    },
    data() {
        return {
            announcements: []
        }
    },
    async fetch() {
        const { announcements } = await this.$content('/home-config/announcements').fetch();
        this.announcements = announcements;
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.announcements-list {
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    &__item {
        padding: 0;
        margin: 0;
        color: $light3;
        b {
            color: $light1;
        }
    }
}
@media only print {
    .announcements-list {
        &__item {
            color: black;
            b {
                color: black;
            }
        }
    }
}
</style>
