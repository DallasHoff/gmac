<template>
    <lazy-section id="gym-hours" class="schedule-info" v-if="schedule.length > 0">
        <stroke-heading>Gym Hours</stroke-heading>
        <table class="schedule-info__table">
            <tbody>
                <tr v-for="row in schedule" :key="row.days">
                    <th>{{row.days}}</th>
                    <td>{{row.times}}</td>
                </tr>
            </tbody>
        </table>
    </lazy-section>
</template>

<script>
import LazySection from '~/components/LazySection.vue'
import StrokeHeading from '~/components/StrokeHeading.vue'

export default {
    name: 'ScheduleInfo',
    data() {
        return {
            schedule: []
        }
    },
    async fetch() {
        const { rows } = await this.$content('/home-config/hours').fetch();
        this.schedule = rows;
    },
    components: {
        LazySection,
        StrokeHeading
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.schedule-info {
    color: $light3;
    &__table, &__table tbody, &__table tr, &__table td, &__table th {
        border: none;
        border-collapse: collapse;
        vertical-align: top;
    }
    &__table {
        white-space: pre-line;
        tr {
            &:not(:first-of-type) {
                border-top: 1px solid $light5;
            }
            th, td {
                padding: $gap1 $gap2;
            }
            th {
                font-weight: bold;
                text-align: left;
            }
        }
    }
}
@media only print {
    .schedule-info {
        color: black;
        page-break-inside: avoid;
    }
}
</style>
