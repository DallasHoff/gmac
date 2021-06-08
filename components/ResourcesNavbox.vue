<template>
    <nav class="resources-navbox">
        <b>Other Resources</b>
        <resources-list></resources-list>
    </nav>
</template>

<script>
import ResourcesList from '~/components/ResourcesList.vue'

export default {
    name: 'ResourcesNavbox',
    components: {
        ResourcesList
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.resources-navbox {
    @include card;
    position: relative;
    top: $gap2;
    padding: $gap2;
    overflow: hidden;
}
</style>
