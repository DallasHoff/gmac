<template>
    <appear-section id="gym-hours" class="schedule-info" v-if="schedule.length > 0">
        <stroke-heading>Gym Hours</stroke-heading>
        <table class="schedule-info__table">
            <tbody>
                <tr v-for="row in schedule" :key="row.days">
                    <th>{{row.days}}</th>
                    <td>{{row.times}}</td>
                </tr>
            </tbody>
        </table>
    </appear-section>
</template>

<script>
import AppearSection from '~/components/AppearSection.vue'

export default {
    name: 'ScheduleInfo',
    components: {
        AppearSection
    },
    data() {
        return {
            schedule: []
        }
    },
    async fetch() {
        const { rows } = await this.$content('/home-config/hours').fetch();
        this.schedule = rows;
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
