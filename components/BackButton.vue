<template>
    <nuxt-link :to="href" class="back-button no-link-underline">
        <i class="fas fa-chevron-left back-button__icon"></i>
        {{label}}
    </nuxt-link>
</template>

<script>
export default {
    name: 'BackButton',
    props: ['href', 'label']
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.back-button {
    display: inline-block;
    margin-bottom: $gap3;
    &__icon {
        margin-right: .3em;
    }
}
</style>