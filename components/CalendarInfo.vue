<template>
    <lazy-section id="calendar" class="calendar-info">
        <stroke-heading>Class Schedule</stroke-heading>
        <p>View the full calendar of upcoming classes on Google Calendars.</p>
        <a href="https://calendar.google.com/calendar/embed?src=ericgriffintkd%40gmail.com&ctz=America%2FNew_York" rel="noopener" target="_blank">
            <i class="fas fa-arrow-circle-right fa-fw"></i>
            Calendar
        </a>
    </lazy-section>
</template>

<script>
import LazySection from '~/components/LazySection.vue'
import StrokeHeading from '~/components/StrokeHeading.vue'

export default {
    components: {
        LazySection,
        StrokeHeading
    }
}
</script>


<style lang="scss">
@import "~/assets/_theme.scss";

.calendar-info {
    color: $light3;
    a {
        font-size: 1.2em;
    }
}
@media only print {
    .calendar-info {
        color: black;
    }
}
</style>
