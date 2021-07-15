<template>
    <vue-intersect @enter="isShown = true" @unsupported="isShown = true" :threshold="[0.4]">
        <section class="appear-block">
            <div class="appear-block__inner" :class="{'appear-block__inner--shown': isShown}">
                <slot></slot>
            </div>
        </section>
    </vue-intersect>
</template>

<script>
import VueIntersect from '~/components/VueIntersect.vue'

export default {
    name: 'AppearSection',
    components: {
        VueIntersect
    },
    data() {
        return {
            isShown: true
        }
    },
    mounted() {
        this.isShown = false;
    }
}
</script>

<style lang="scss">
@supports (clip-path: polygon(-20% -20%, 20% -20%, 0% 120%, -40% 120%)) {
    .appear-block {
        &__inner {
            visibility: hidden;
            clip-path: polygon(-20% -20%, 20% -20%, 0% 120%, -40% 120%);
            transition: clip-path 500ms;
            &--shown {
                visibility: visible;
                clip-path: polygon(-20% -20%, 140% -20%, 120% 120%, -40% 120%);
            }
        }
    }
}
@supports not (clip-path: polygon(-20% -20%, 20% -20%, 0% 120%, -40% 120%)) {
    .appear-block {
        &__inner {
            visibility: hidden;
            opacity: 0;
            transform: translateY(2rem);
            transition: opacity 500ms, transform 500ms;
            &--shown {
                visibility: visible;
                opacity: 1;
                transform: none;
            }
        }
    }
}
</style>
