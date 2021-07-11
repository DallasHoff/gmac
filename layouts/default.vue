<template>
    <div class="layout-default">
        <app-header></app-header>
        <main class="layout-default__main">
            <div class="layout-default__main-inner">
                <article class="layout-default__page">
                    <div class="layout-default__page-inner">
                        <nuxt></nuxt>
                    </div>
                </article>
            </div>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
    name: 'LayoutDefault',
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.layout-default {
    &__main {
        background-color: $background1;
    }
    &__page {
        max-width: $point2;
        margin: auto;
    }
    &__page-inner {
        padding: $gap4;
    }
}

.nuxt-content {
    h2:not(:first-child) {
        padding-top: $gap4;
        margin-top: $gap4;
        border-top: 1px solid $light6;
    }
    h3 {
        margin-top: $gap4;
    }
    ul > li {
        padding-left: $gap1;
    }
}
</style>
