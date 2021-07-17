<template>
    <div class="page-class-res">
        <section id="introduction">
            <back-button href="../" :label="className"></back-button>
            <h1>
                {{content.title}}
            </h1>
            <p v-if="content.description">
                {{content.description}}
            </p>
        </section>
        <section id="content" v-if="content.body">
            <nuxt-content :document="content"></nuxt-content>
        </section>
        <section id="more-class-resources" v-if="resources && resources.length && resources.length > 1">
            <resources-navbox heading="More Class Resources" :resources="resources"></resources-navbox>
        </section>
    </div>
</template>

<script>
export default {
    name: 'PageClassRes',
    data() {
        return {}
    },
    async asyncData({$content, params, error}) {
        const cls = params.cls;
        const res = params.res;
        const content = await $content('class-resources', res).where({class: cls}).fetch().catch(() => {
            error({statusCode: 404, message: 'This page could not be found'});
            return {};
        });
        const { title: className } = await $content('classes', cls).only(['title']).fetch();
        const resources = await $content('class-resources').where({class: cls}).sortBy('createdAt', 'asc').without(['body']).fetch();
        return {
            cls,
            res,
            content,
            className,
            resources
        };
    },
    head() {
        return {
            title: `${this.content.title} | ${this.className} | Griffin Martial Arts Center`,
            meta: [
                { hid: 'og:title', name: 'og:title', content: `${this.content.title} | ${this.className} | Griffin Martial Arts Center` },
                { hid: 'og:url', property: 'og:url', content: `https://griffindojo.com/classes/${this.cls}/${this.res}/` },
                { hid: 'description', name: 'description', content: this.content.description },
                { hid: 'og:description', property: 'og:description', content: this.content.description }
            ]
        }
    }
}
</script>