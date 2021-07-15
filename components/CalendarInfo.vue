<template>
    <appear-section id="calendar" class="calendar-info">
        <stroke-heading>Class Schedule</stroke-heading>
        <p>View the full calendar of upcoming classes and events on Google Calendar.</p>
        <a href="https://calendar.google.com/calendar/embed?src=ericgriffintkd%40gmail.com&ctz=America%2FNew_York" rel="noopener" target="_blank">
            <fa-icon class="fas fa-arrow-circle-right fa-fw"></fa-icon>
            Calendar
        </a>
    </appear-section>
</template>

<script>
import AppearSection from '~/components/AppearSection.vue'

export default {
    name: 'CalendarInfo',
    components: {
        AppearSection
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
