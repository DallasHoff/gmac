<template>
    <nav class="app-navbar">
        <nuxt-link to="/" class="app-navbar__wordmark">
            <img src="@/assets/img/griffin_logo_red.svg" alt="" class="app-navbar__wordmark-logo" width="1161" height="1124" />
            <h2 class="app-navbar__wordmark-heading">Griffin Martial Arts Center</h2>
        </nuxt-link>
        <div class="app-navbar__pages">

        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.app-navbar {
    display: flex;
    align-items: center;
    &__wordmark {
        display: flex;
        align-items: center;
        margin-right: auto;
        background-image: none !important;
        &-logo {
            width: auto;
            height: 2.1rem;
            margin-right: $gap2;
        }
        &-heading {
            font-size: 1.2em;
            line-height: 2.1rem;
            margin: 0;
            white-space: nowrap;
        }
    }
    &__pages {
        display: flex;
        justify-content: flex-end;
    }
}

@media (min-width: $point1) {
    .app-navbar {
        &__wordmark {
            &-logo {
                height: 2.4rem;
            }
            &-heading {
                font-size: 1.6em;
                line-height: 2.1rem;
            }
        }
    }
}
</style>
