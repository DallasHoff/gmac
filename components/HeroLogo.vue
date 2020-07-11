<template>
    <div class="hero-logo">
        <h1 class="hero-logo__title">
            <transition name="v-logo" appear>
                <div class="hero-logo__title-text">
                    <div class="hero-logo__title-line1">Griffin Martial</div> <div class="hero-logo__title-line2">Arts Center</div>
                </div>
            </transition>
            <transition name="v-logo-ghost" appear>
                <div class="hero-logo__title-ghost" aria-hidden="true">
                    <div class="hero-logo__title-line1">Griffin Martial</div> <div class="hero-logo__title-line2">Arts Center</div>
                </div>
            </transition>
        </h1>
        <img src="@/assets/img/griffin_logo_red.svg" alt="Griffin logo" class="hero-logo__logo" />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.hero-logo {
    $logo-text-height: 15vw;
    z-index: 3000;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: $point3;
    margin: auto;
    min-height: $logo-text-height * 2 + ($logo-text-height / 3);
    &__title {
        position: absolute;
        font-size: 11vw;
        line-height: $logo-text-height;
        margin: 0;
        text-align: center;
        text-shadow: 0 0 .3em white;
        &-ghost {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            transform: scale(2);
            opacity: 0;
            visibility: visible;
            text-shadow: none;
            pointer-events: none;
        }
    }
    &__logo {
        width: 80%;
        height: auto;
    }
}

@media (min-width: $point1) {
    .hero-logo {
        $logo-text-height: 10vw;
        min-height: $logo-text-height + ($logo-text-height / 5);
        &__title {
            font-size: 8vw;
            line-height: $logo-text-height;
            &-line1, &-line2 {
                display: inline;
            }
        }
        &__logo {
            width: 40%;
        }
    }
}

@media (min-width: $point3) {
    .hero-logo {
        &__title {
            font-size: 6em;
        }
    }
}


.v-logo-enter-active, .v-logo-leave-active {
    transition: transform .6s linear;
}
.v-logo-enter, .v-logo-leave-to {
    transform: scale(0);
}

.v-logo-ghost-enter-active, .v-logo-ghost-leave-active {
    transition: transform 1s linear, opacity 1s linear, visibility 0s;
    transition-delay: .6s;
}
.v-logo-ghost-enter, .v-logo-ghost-leave-to {
    transform: scale(1);
    opacity: .5;
    visibility: hidden;
}
</style>
