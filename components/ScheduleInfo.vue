<template>
    <lazy-section id="class-schedule" class="schedule-info" v-if="schedule.length > 0">
        <stroke-heading>Hours</stroke-heading>
        <table class="schedule-info__table">
            <tbody>
                <tr v-for="day in schedule" :key="day[0]">
                    <th>{{day[0]}}</th>
                    <td>{{day[1]}}</td>
                </tr>
            </tbody>
        </table>
    </lazy-section>
</template>

<script>
import LazySection from '~/components/LazySection.vue'
import StrokeHeading from '~/components/StrokeHeading.vue'
import scheduleData from '~/static/config/schedule.json'

export default {
    data() {
        return {
            schedule: []
        }
    },
    created() {
        this.schedule = scheduleData.values.filter((row, index) => index > 0 && row[0] && row[1]);
        /* Hard-coded schedule data
        this.schedule = [
            ['Monday - Friday', '6:00 am - 10:00 pm'],
            ['Saturday', '6:00 am - 1:00 pm'],
            ['Sunday', 'Closed']
        ]; */
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
