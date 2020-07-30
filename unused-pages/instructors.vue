<template>
    <div class="page-instructors">
        <section>
            <h1>{{title}}</h1>
            <p>{{intro}}</p>
        </section>
        <section>
            <vue-intersect @enter="shown.instructorCards = true" @unsupported="shown.instructorCards = true" :threshold="[0.3]">
                <photo-cards :cards="instructorPhotoCards" :shown="shown.instructorCards"></photo-cards>
            </vue-intersect>
        </section>
    </div>
</template>

<script>
import VueIntersect from '~/components/VueIntersect.vue'
import PhotoCards from '~/components/PhotoCards.vue'

const currentYear = new Date().getFullYear();

export default {
    data() {
        return {
            title: 'Instructors',
            intro: 'These are your instructors at GMAC.',
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
                    heading: 'Michelle Worth',
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
            ],
            shown: {
                instructorCards: true
            }
        }
    },
    mounted() {
        this.shown = {
            instructorCards: false
        };
    },
    head() {
        return {
            title: this.title + ' | Griffin Martial Arts Center',
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.title + ' | Griffin Martial Arts Center' },
                { hid: 'description', name: 'description', content: this.intro },
                { hid: 'og:description', name: 'og:description', content: this.intro },
                { hid: 'og:url', property: 'og:url', content: 'https://griffindojo.com/instructors' }
            ]
        }
    },
    components: {
        VueIntersect,
        PhotoCards
    }
}
</script>
