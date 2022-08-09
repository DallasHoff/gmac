<template>
    <div class="page-classes">
        <section id="introduction">
            <figure class="page-classes__figure" v-if="content.img">
                <img :src="require('~/assets' + content.img + '?resize&size=200')" alt="" width="200" height="200">
            </figure>
            <h1 class="page-classes__heading">
                {{content.title}}
            </h1>
            <p class="page-classes__instructor" v-if="content.instructor">
                Taught by {{content.instructor}}<span v-if="content.experience"> - {{content.experience}}</span>
            </p>
            <class-links class="page-classes__links" :class-content="content"></class-links>
        </section>
        <section id="schedule" v-if="schedule && schedule.length">
            <h2 class="page-classes__heading">
                Class Schedule
            </h2>
            <div class="page-classes__schedule">
                <class-schedule-day v-for="day in Array.from(schedule)" :day="day[0]" :classes="day[1]" :key="day[0]" class="page-classes__schedule-day"></class-schedule-day>
            </div>
        </section>
        <section id="about" v-if="content.body">
            <h2 class="page-classes__heading">
                About the Class
            </h2>
            <nuxt-content :document="content"></nuxt-content>
        </section>
        <section id="resources" v-if="resources && resources.length">
            <resources-navbox :resources="resources"></resources-navbox>
        </section>
    </div>
</template>

<script>
export default {
    name: 'PageClasses',
    data() {
        return {}
    },
    async asyncData({$content, params, error}) {
        const cls = params.cls;
        const content = await $content('classes', cls).fetch().catch(() => {
            error({statusCode: 404, message: 'This page could not be found'});
            return {};
        });
        const resources = await $content('class-resources').where({class: cls}).sortBy('createdAt', 'asc').without(['body']).fetch();
        return {
            content,
            cls,
            resources
        };
    },
    computed: {
        schedule() {
            // Split up class time slots by day of the week
            if (!this.content.schedule) return null;
            let result = new Map();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            for (let day of days) {
                result.set(day, []);
            }
            for (let timeSlot of this.content.schedule) {
                for (let day of timeSlot.days) {
                    result.get(day).push({
                        start: timeSlot.start,
                        end: timeSlot.end,
                        group: timeSlot.group
                    });
                }
            }
            for (let day of days) {
                if (result.get(day).length === 0) {
                    result.delete(day);
                }
            }
            return result;
        }
    },
    head() {
        return {
            title: this.content.title + ' | Griffin Martial Arts Center',
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.content.title + ' | Griffin Martial Arts Center' },
                { hid: 'og:url', property: 'og:url', content: 'https://griffindojo.com/classes/' + this.cls + '/' },
                { hid: 'description', name: 'description', content: `${this.content.instructor} is teaching ${this.content.title} at Griffin Martial Arts Center.` },
                { hid: 'og:description', property: 'og:description', content: `${this.content.instructor} is teaching ${this.content.title} at Griffin Martial Arts Center.` }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.page-classes {
    &__heading,
    &__instructor,
    .nuxt-content h2,
    .nuxt-content h3 {
        text-align: center;
    }
    &__links,
    &__schedule {
        justify-content: center;
    }
    &__instructor,
    &__links {
        font-size: 1.2em;
    }
    &__figure {
        width: 200px;
        margin: auto;
        padding-bottom: $gap3;
        img {
            @include circle-img;
        }
    }
    &__schedule {
        display: flex;
        flex-wrap: wrap;
        margin-right: calc(#{$gap1} * -1);
        &-day {
            width: calc((100% - (#{$gap1} * 2)) / 2);
            margin-right: $gap1;
            margin-bottom: $gap1;
        }
    }
}

@media (min-width: $point1) {
    .page-classes {
        &__schedule {
            &-day {
                width: calc((100% - (#{$gap1} * 3)) / 3);
            }
        }
    }
}

@media (min-width: $point2) {
    .page-classes {
        &__heading,
        &__instructor,
        .nuxt-content h2,
        .nuxt-content h3 {
            text-align: left;
        }
        &__links,
        &__schedule {
            justify-content: flex-start;
        }
        &__figure {
            width: calc(200px + #{$gap3});
            float: right;
            margin: 0;
            margin-left: auto;
            padding-left: $gap3;
        }
    }
}
</style>
