<template>
    <nav class="resources-navbox">
        <h3>
            {{heading || 'Class Resources'}}
        </h3>
        <ul class="resources-navbox__list">
            <li v-for="res in resources" :key="res.slug">
                <nuxt-link :to="'/classes/' + res.class + '/' + res.slug + '/'">{{res.title}}</nuxt-link>: {{res.description}}
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'ResourcesNavbox',
    props: ['resources', 'heading']
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.resources-navbox {
    @include card;
    padding: $gap2;
    overflow: hidden;
    &__list {
        margin: $gap1 0;
    }
    a.nuxt-link-active {
        color: $subtle;
        background-image: none;
    }
}
</style>
