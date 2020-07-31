<template>
    <ul class="word-cards">
        <li class="word-cards__word" :class="{'word-cards__word--invisible': shown === false}" v-for="(card, index) in cards" :key="card.word" :style="{'transition-delay': (index * 100) + 'ms'}">
            <i :class="card.icon" class="fa-fw word-cards__icon"></i>
            <h3>{{card.word}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['cards', 'shown']
}
</script>


<style lang="scss">
@import "~/assets/_theme.scss";

.word-cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    &__word {
        position: relative;
        width: 100%;
        margin: $gap1 0;
        padding: $gap2;
        background-color: $light1;
        border-top: 3px solid $red2;
        box-shadow: $cardshadow;
        transition: transform 500ms, opacity 500ms;
        overflow: hidden;
        h3 {
            position: relative;
            margin: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        &--invisible {
            visibility: hidden;
            transform: translateY(2rem);
            opacity: 0;
        }
    }
    &__icon {
        position: absolute;
        font-size: 3.2em;
        right: .2em;
        bottom: -1px;
        opacity: .3;
    }
}

@media (min-width: $point1) {
    .word-cards {
        &__word {
            width: calc(50% - #{$gap2} / 2);
            &:nth-child(odd) {
                margin-right: $gap2;
            }
        }
    }
}
</style>
