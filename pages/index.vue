<template>
    <div class="page-home">
        <section id="introduction">
            <p>Griffin Martial Arts Center in Griffin, Georgia offers classes for adults and children in martial arts and gym membership for adults.</p>
            <p>We have regular classes for ages six and up in Tae Kwon-Do and Tang Soo Do, as well as summer and holiday camps. We also have experienced instructors offering classes and instruction in Brazilian Jiu Jitsu, MMA, Krav Maga, and self-defense.</p>
        </section>
        <section id="martial-arts-teach">
            <h2>Martial Arts Teach&hellip;</h2>
            <vue-intersect @enter="shown.teachesCards = true" @unsupported="shown.teachesCards = true" :threshold="[0.3]">
                <word-cards :cards="wordCards" :shown="shown.teachesCards"></word-cards>
            </vue-intersect>
        </section>
        <section id="classes-offered">
            <h2>Classes Offered</h2>
            <vue-intersect @enter="shown.classCards = true" @unsupported="shown.classCards = true" :threshold="[0.3]">
                <class-cards :cards="classCards" :shown="shown.classCards"></class-cards>
            </vue-intersect>
        </section>
        <section id="social">
            <h2>Social Media</h2>
            <p>Follow us on Facebook <a href="https://www.facebook.com/griffinmartialartscenter/" target="_blank" rel="noopener">@GriffinMartialArtsCenter</a> or Instagram <a href="https://www.instagram.com/gmac1454/" target="_blank" rel="noopener">@gmac1454</a> for announcements about classes and events.</p>
        </section>
    </div>
</template>

<script>
import VueIntersect from '~/components/VueIntersect.vue'
import ClassCards from '~/components/ClassCards.vue'
import WordCards from '~/components/WordCards.vue'
import ResourcesList from '~/components/ResourcesList.vue'

const currentYear = new Date().getFullYear();

export default {
    layout: 'home',
    data() {
        return {
            shown: {
                classCards: true,
                teachesCards: true
            },
            classCards: [
                {
                    title: 'Tae Kwon-Do',
                    img: '/img/instructors/eric.jpg',
                    instructor: 'Eric Hoffman',
                    experience: '3rd-degree Black Belt',
                    phone: '678-778-3789',
                    website: 'griffintkd.org'
                },
                {
                    title: 'Tang Soo Do',
                    img: '/img/instructors/michelle.jpg',
                    instructor: 'Michelle Worth',
                    experience: '5th-degree Black Belt',
                    phone: '404-381-7273',
                    website: ''
                },
                {
                    title: 'Anchor Jiu Jitsu',
                    img: '/img/instructors/mike.jpg',
                    instructor: 'Mike Rock',
                    experience: '',
                    phone: '678-485-4832',
                    website: ''
                },
                {
                    title: 'Dynamic Combatives and Self-Defense',
                    img: '/img/instructors/matt.jpg',
                    instructor: 'Matt Clanton',
                    experience: 'Krav Maga Black Belt',
                    phone: '678-485-1498',
                    website: 'www.dcsd.info'
                },
                {
                    title: 'Tai Chi',
                    img: '/img/instructors/stacy.jpg',
                    instructor: 'Stacy Hoffman',
                    experience: 'Black Belt',
                    phone: '678-852-4414',
                    website: ''
                }
            ],
            wordCards: [
                {
                    word: 'Discipline',
                    icon: ['fas', 'fa-brain']
                },
                {
                    word: 'Confidence',
                    icon: ['fas', 'fa-smile-beam']
                },
                {
                    word: 'Balance',
                    icon: ['fas', 'fa-balance-scale']
                },
                {
                    word: 'Perseverance',
                    icon: ['fas', 'fa-fist-raised']
                },
                {
                    word: 'Physical Fitness',
                    icon: ['fas', 'fa-running']
                },
                {
                    word: 'Self-Defense',
                    icon: ['fas', 'fa-shield-alt']
                }
            ]
        }
    },
    mounted() {
        this.shown = {
            classCards: false,
            teachesCards: false
        };
    },
    components: {
        VueIntersect,
        ClassCards,
        WordCards,
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
