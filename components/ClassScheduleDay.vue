<template>
    <div class="class-schedule-day">
        <div class="class-schedule-day__day">
            <h3>{{day}}</h3>
        </div>
        <div class="class-schedule-day__body">
            <div v-for="slot in classes" class="class-schedule-day__slot">
                <b v-if="slot.group">{{slot.group}}</b>
                <div>{{slot.start}} - {{slot.end}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClassScheduleDay',
    props: ['day', 'classes']
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.class-schedule-day {
    @include card-plain;
    &__day {
        padding: $gap1 0;
        text-align: center;
        background-color: $red2;
        h3 {
            margin: 0;
            color: $light1;
            white-space: nowrap;
        }
    }
    &__body {
        padding: 0 $gap2;
    }
    &__slot {
        padding: $gap2 0;
        &:not(:last-child) {
            border-bottom: 1px solid $light5;
        }
    }
}
</style>