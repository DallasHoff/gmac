<template>
    <div class="photo-cards">
        <figure :id="card.heading.replace(/ /g, '_')" class="photo-cards__card" :class="{'photo-cards__card--invisible': shown === false}" v-for="(card, index) in cards" :key="card.src" :style="{'transition-delay': (index * 100) + 'ms'}">
            <img :src="card.src" :alt="card.alt" class="photo-cards__image" />
            <figcaption class="photo-cards__caption">
                <div class="photo-cards__content">
                    <h3>{{card.heading}}</h3>
                    <p>{{card.body}}</p>
                </div>
            </figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    props: ['cards', 'shown']
}
</script>


<style lang="scss">
@import "~/assets/_theme.scss";

.photo-cards {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    &__card {
        position: relative;
        width: 100%;
        margin: $gap1 0;
        padding: 0;
        background-color: $light1;
        border-top: 3px solid $red2;
        box-shadow: $cardshadow;
        transition: transform 500ms, opacity 500ms;
        overflow: hidden;
        &--invisible {
            visibility: hidden;
            transform: translateY(2rem);
            opacity: 0;
        }
    }
    &__image {
        width: 100%;
        height: auto;
    }
    &__content {
        padding: $gap2;
        color: $subtle;
        p {
            margin: 0;
        }
    }
}

@media (min-width: $point1) {
    .photo-cards {
        &__card {
            width: calc(50% - #{$gap2} / 2);
            &:nth-child(odd) {
                margin-right: $gap2;
            }
        }
    }
}
</style>
