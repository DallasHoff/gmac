<template>
    <a :href="href" class="back-button no-link-underline">
        <icon class="fas fa-chevron-left back-button__icon"></icon>
        {{label}}
    </a>
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
    name: 'BackButton',
    props: ['href', 'label'],
    components: {
        Icon
    }
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