<template>
    <lazy-section id="announcements" class="announcements-list" v-if="announcements.length > 0">
        <stroke-heading>Announcements</stroke-heading>
        <ul class="announcements-list__list">
            <li class="announcements-list__item" v-for="(announcement, index) in announcements" :key="announcement.headline">
                <b>{{announcement.headline}}<span v-if="announcement.body">:</span></b> {{announcement.body}}
                <stroke-rule v-if="index < (announcements.length - 1)"></stroke-rule>
            </li>
        </ul>
    </lazy-section>
</template>

<script>
import LazySection from '~/components/LazySection.vue'
import StrokeHeading from '~/components/StrokeHeading.vue'
import StrokeRule from '~/components/StrokeRule.vue'
import announcementsData from '~/assets/home-config/announcements.json'

export default {
    data() {
        return {
            announcements: []
        }
    },
    created() {
        this.announcements = announcementsData.announcements.map(ann => {
            var annCopy = {...ann};
            return annCopy;
        });
    },
    components: {
        LazySection,
        StrokeHeading,
        StrokeRule
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
