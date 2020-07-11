<template>
    <div class="page-student-guide">
        <section>
            <h1>{{title}}</h1>
            <p>{{intro}}</p>
        </section>
        <section id="tenants">
            <h2>Tenants of Tae Kwon-Do</h2>
            <ol>
                <li>A - Etiquette</li>
                <li>B - Modesty</li>
                <li>C - Perseverance</li>
                <li>D - Self Control</li>
                <li>E - Indomitable Spirit</li>
            </ol>
        </section>
        <section id="oath">
            <h2>Student Oath</h2>
            <ol>
                <li>I will observe the tenants of Tae Kwon-Do</li>
                <li>I will respect the instructor and senior members</li>
                <li>I will never misuse Tae Kwon-Do</li>
                <li>I will be a champion of freedom and justice</li>
                <li>I will build a more peaceful world</li>
            </ol>
        </section>
        <section id="counting">
            <h2>Counting in Korean</h2>
            <h3>One to Ten</h3>
            <ol>
                <li>1 - Hana (Hah Nah)</li>
                <li>2 - Dul (Dool)</li>
                <li>3 - Set (Seht)</li>
                <li>4 - Net (Neht)</li>
                <li>5 - Dah-suht (Dausut)</li>
                <li>6 - Yuh-suht (Yeosut)</li>
                <li>7 - Ill-gope (Eel Gob)</li>
                <li>8 - Yeodul (Yoh Duhl)</li>
                <li>9 - Ah-hope (Ah Hob)</li>
                <li>10 - Yul (Yule)</li>
            </ol>
            <h3>Tens</h3>
            <ol>
                <li>10 - Yul (Yule)</li>
                <li>20 - Semul (Se Mool)</li>
                <li>30 - Sorun (So Roon)</li>
                <li>40 - Mahun (Ma Hoon)</li>
                <li>50 - Shwin (She Hoon)</li>
                <li>60 - Yesun (Yea Soon)</li>
                <li>70 - Irhun (Ear Hoon)</li>
                <li>80 - Yodun (Yo Dune)</li>
                <li>90 - Ahun (Ah Hoon)</li>
                <li>100 - Baek (Bock)</li>
            </ol>
        </section>
        <section id="navbox">
            <resources-navbox></resources-navbox>
        </section>
    </div>
</template>

<script>
import ResourcesNavbox from '~/components/ResourcesNavbox.vue'

export default {
    data() {
        return {
            title: 'Student Guide',
            intro: 'Familiarize yourself with this basic knowledge to help you get started in Tae Kwon-Do.'
        }
    },
    head() {
        return {
            title: this.title + ' | Griffin Martial Arts Center',
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.title + ' | Griffin Martial Arts Center' },
                { hid: 'description', name: 'description', content: this.intro },
                { hid: 'og:description', name: 'og:description', content: this.intro },
                { hid: 'og:url', property: 'og:url', content: 'https://griffindojo.com/student-guide' }
            ]
        }
    },
    components: {
        ResourcesNavbox
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.page-student-guide {
    #tenants ol,
    #oath ol,
    #counting ol {
        list-style: none;
        padding: 0;
    }
    section:not(:first-of-type) {
        margin-bottom: 0;
        padding-top: $gap6;
        padding-bottom: $gap2;
        border-top: 1px solid $light6;
    }
}
</style>
