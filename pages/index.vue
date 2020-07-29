<template>
    <div class="page-home">
        <section id="introduction">
            <p>Griffin Martial Arts Center is a martial arts school for adults and children ages six and up located in Griffin, Georgia. Regular classes are held for training to earn belts with the United Tae Kwon-Do Federation. Please call Eric Hoffman at <a href="tel:678-778-3789" rel="noopener">678-778-3789</a> to sign up.</p>
        </section>
        <section id="tae-kwon-do-teaches">
            <h2>Martial Arts Teach&hellip;</h2>
            <vue-intersect @enter="shown.teachesCards = true" @unsupported="shown.teachesCards = true" :threshold="[0.3]">
                <word-cards :cards="wordCards" :shown="shown.teachesCards"></word-cards>
            </vue-intersect>
        </section>
        <section id="instructors">
            <h2>Instructors</h2>
            <vue-intersect @enter="shown.instructorCards = true" @unsupported="shown.instructorCards = true" :threshold="[0.3]">
                <photo-cards :cards="instructorPhotoCards" :shown="shown.instructorCards"></photo-cards>
            </vue-intersect>
        </section>
        <section id="facebook">
            <h2>Facebook</h2>
            <p>Follow us on Facebook <a href="https://www.facebook.com/GriffinTKD" target="_blank" rel="noopener">@GriffinTKD</a> for announcements about classes and events.</p>
        </section>
    </div>
</template>

<script>
import VueIntersect from '~/components/VueIntersect.vue'
import WordCards from '~/components/WordCards.vue'
import PhotoCards from '~/components/PhotoCards.vue'
import ResourcesList from '~/components/ResourcesList.vue'

const currentYear = new Date().getFullYear();

export default {
    layout: 'home',
    data() {
        return {
            shown: {
                teachesCards: true,
                instructorCards: true
            },
            wordCards: [
                {
                    word: 'Discipline',
                    icon: ['fas', 'brain']
                },
                {
                    word: 'Confidence',
                    icon: ['fas', 'smile-beam']
                },
                {
                    word: 'Balance',
                    icon: ['fas', 'balance-scale']
                },
                {
                    word: 'Perseverance',
                    icon: ['fas', 'fist-raised']
                },
                {
                    word: 'Physical Fitness',
                    icon: ['fas', 'running']
                },
                {
                    word: 'Self-Defense',
                    icon: ['fas', 'shield-alt']
                }
            ],
            instructorPhotoCards: [
                {
                    src: '/img/instructors/eric.jpg',
                    alt: 'Photo of instructor Eric Hoffman',
                    heading: 'Eric Hoffman',
                    body: `School owner and third-degree black belt with ${currentYear - 2010} years of training in Tae Kwon-Do`
                },
                {
                    src: '/img/instructors/michelle.jpg',
                    alt: 'Photo of instructor Michelle Worth',
                    heading: 'Dr. Michelle Worth',
                    body: `Fifth-degree black belt in Tang Soo Do and first-degree in Tae Kwon-Do with ${currentYear - 2000} years of martial arts experience`
                },
                {
                    src: '/img/instructors/wes.jpg',
                    alt: 'Photo of instructor Wes Lowe',
                    heading: 'Wes Lowe',
                    body: `Third-degree black belt with ${currentYear - 1980} years of martial arts experience`
                },
                {
                    src: '/img/instructors/matt.jpg',
                    alt: 'Photo of instructor Matt Clanton',
                    heading: 'Matt Clanton',
                    body: `Former police officer with 3 years of active service and ${currentYear - 2004} years as a Black Belt/Certified Instructor in Israeli Krav Maga`
                }
            ]
        }
    },
    mounted() {
        this.shown = {
            teachesCards: false,
            instructorCards: false
        };
    },
    components: {
        VueIntersect,
        WordCards,
        PhotoCards,
        ResourcesList
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.page-home {
    #introduction {
        font-size: 1.1em;
        line-height: 1.8em;
    }
}
</style>
