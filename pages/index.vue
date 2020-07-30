<template>
    <div class="page-home">
        <section id="introduction">
            <p>Griffin Martial Arts Center in Griffin, Georgia offers classes for adults and children in martial arts and gym membership for adults.</p>
            <p>We have regular classes for ages six and up in Tae Kwon-Do and Tang Soo Do, as well as summer and holiday camps. We also have experienced instructors offering classes and instruction in Brazilian Jiu Jitsu, MMA, Krav Maga, and self-defense.</p>
        </section>
        <section id="classes-offered">
            <h2>Classes Offered</h2>
            <vue-intersect @enter="shown.classCards = true" @unsupported="shown.classCards = true" :threshold="[0.3]">
                <class-cards :cards="classCards" :shown="shown.classCards"></class-cards>
            </vue-intersect>
        </section>
        <section id="martial-arts-teach">
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
            <p>Follow us on Facebook <a href="https://www.facebook.com/griffinmartialartscenter/" target="_blank" rel="noopener">@GriffinMartialArtsCenter</a> for announcements about classes and events.</p>
        </section>
    </div>
</template>

<script>
import VueIntersect from '~/components/VueIntersect.vue'
import ClassCards from '~/components/ClassCards.vue'
import WordCards from '~/components/WordCards.vue'
import PhotoCards from '~/components/PhotoCards.vue'
import ResourcesList from '~/components/ResourcesList.vue'

const currentYear = new Date().getFullYear();

export default {
    layout: 'home',
    data() {
        return {
            shown: {
                classCards: true,
                teachesCards: true,
                instructorCards: true
            },
            classCards: [
                {
                    title: 'Tae Kwon-Do',
                    instructor: 'Eric Hoffman',
                    experience: '3rd-degree Black Belt',
                    phone: '678-778-3789',
                    website: 'griffintkd.org'
                },
                {
                    title: 'Tang Soo Do',
                    instructor: 'Michelle Worth',
                    experience: '5th-degree Black Belt',
                    phone: '404-381-7273',
                    website: ''
                },
                {
                    title: 'Mixed Martial Arts and Self-defense',
                    instructor: 'Wes Lowe',
                    experience: '3rd-degree Black Belt',
                    phone: '770-318-4457',
                    website: ''
                },
                {
                    title: 'Anchor Jiu Jitsu',
                    instructor: 'Mike Rock',
                    experience: '',
                    phone: '678-485-4832',
                    website: ''
                },
                {
                    title: 'Dynamic Combatives and Self-Defense',
                    instructor: 'Matt Clanton',
                    experience: 'Black Belt',
                    phone: '678-485-1498',
                    website: 'www.dcsd.info'
                },
                {
                    title: 'Tai Chi',
                    instructor: 'Stacy Hoffman',
                    experience: 'Black Belt',
                    phone: '678-852-4414',
                    website: ''
                }
            ],
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
            classCards: false,
            teachesCards: false,
            instructorCards: false
        };
    },
    components: {
        VueIntersect,
        ClassCards,
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
