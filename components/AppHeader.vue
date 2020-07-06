<template>
    <header class="app-header">
        <div class="app-header__inner">
            <app-navbar></app-navbar>
        </div>
    </header>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue'

export default {
    components: {
        AppNavbar
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.app-header {
    background-color: $background2;
    overflow: hidden;
    &__inner {
        display: flex;
        align-items: center;
        max-width: $point2;
        padding: $gap2 $gap4;
        margin: auto;
    }
}
</style>
