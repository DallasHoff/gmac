<template>
    <div class="page-badge-guide">
        <section>
            <h1>{{title}}</h1>
            <p>{{intro}}</p>
        </section>
        <section>
            <figure class="article-figure">
                <img src="~/assets/img/guides/uniform.jpg" alt="Photo of uniform with badges properly placed" />
                <figcaption>Badge placement example</figcaption>
            </figure>
            <h2>Adding Badges</h2>
            <p><strong>Important Note</strong>: Put the uniform <em>on</em> the student and properly tie closed <em>before</em> pinning the badges in place. If the patches are pinned on without the uniform being properly tied, the front badges will be crooked when the uniform is worn.</p>
            <ol>
                <li><b>American flag</b>: centered on right shoulder, 1½ inch below shoulder seam.</li>
                <li><b>Korean flag</b>: centered on left shoulder, 1½ inch below shoulder seam.</li>
                <li><b>Griffin Tae Kwon-Do badge</b>: centered on right breast.</li>
                <li><b>United Tae Kwon-Do Federation badge</b>: centered on left breast.</li>
            </ol>
            <p>Pin the badges in place, and ensure that they are in the correct positions. Then, sew them down.</p>
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
            title: 'Uniform Badge Guide',
            intro: 'Follow this guide to add badges to the uniform.'
        }
    },
    head() {
        return {
            title: this.title + ' | Griffin Tae Kwon-Do',
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.title + ' | Griffin Tae Kwon-Do' },
                { hid: 'description', name: 'description', content: this.intro },
                { hid: 'og:description', name: 'og:description', content: this.intro },
                { hid: 'og:url', property: 'og:url', content: 'https://griffintkd.org/badge-guide' }
            ]
        }
    },
    components: {
        ResourcesNavbox
    }
}
</script>
