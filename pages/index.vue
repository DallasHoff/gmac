<template>
    <div class="page-home">
        <section id="introduction">
            <nuxt-content :document="article"></nuxt-content>
        </section>
        <section id="martial-arts-teach">
            <h2>Martial Arts Teach&hellip;</h2>
            <vue-intersect @enter="shown.teachesCards = true" @unsupported="shown.teachesCards = true" :threshold="[0.3]">
                <word-cards :cards="skillCards" :shown="shown.teachesCards"></word-cards>
            </vue-intersect>
        </section>
        <section id="classes-offered">
            <h2>Classes Offered</h2>
            <vue-intersect @enter="shown.classCards = true" @unsupported="shown.classCards = true" :threshold="[0.3]">
                <class-cards :cards="classCards" :shown="shown.classCards"></class-cards>
            </vue-intersect>
        </section>
    </div>
</template>

<script>
import VueIntersect from '~/components/VueIntersect.vue'
import ClassCards from '~/components/ClassCards.vue'
import WordCards from '~/components/WordCards.vue'
import ResourcesList from '~/components/ResourcesList.vue'

export default {
    layout: 'home',
    data() {
        return {
            shown: {
                classCards: true,
                teachesCards: true
            }
        }
    },
    head() {
        return {
            script: [
                {src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true}
            ]
        }
    },
    async asyncData({$content}) {
        // Fetch article
        const article = await $content('/home').fetch();
        // Fetch skill cards config
        let { cards: skillCards } = await $content('/home-config/skill-cards').fetch();
        skillCards = skillCards.map(card => {
            let cardCopy = {...card};
            let iconKey = cardCopy.icon;
            cardCopy.icon = ['fas', 'fa-' + iconKey];
            return cardCopy;
        });
        // Fetch class cards config
        const { classes: classCards } = await $content('/home-config/class-cards').fetch();
        // Merge into data
        return {
            article,
            classCards,
            skillCards
        };
    },
    mounted() {
        this.shown = {
            classCards: false,
            teachesCards: false
        };
        // CMS Auth Redirect
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on('init', user => {
                if (!user) {
                    window.netlifyIdentity.on('login', () => {
                        document.location.href = '/admin/';
                    });
                }
            });
        }
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
