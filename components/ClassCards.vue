<template>
    <ul class="class-cards">
        <li class="class-cards__class" :class="{'class-cards__class--invisible': shown === false}" v-for="(card, index) in cards" :key="card.title" :style="{'transition-delay': (index * 100) + 'ms'}">
            <figure class="class-cards__figure" v-if="card.img">
                <img :src="card.img" alt="">
            </figure>
            <div>
                <h3>{{card.title}}</h3>
                <h4>{{card.instructor}}<span v-if="card.experience"> - {{card.experience}}</span></h4>
                <div class="class-cards__links">
                    <a :href="'tel:' + card.phone" v-if="card.phone" rel="noopener">
                        <fa icon="phone" fixed-width title="Phone number"></fa>
                        {{card.phone}}
                    </a>
                    <a :href="card.website" v-if="card.website">
                        <fa icon="link" fixed-width title="Website"></fa>
                        {{card.website}}
                    </a>
                </div>
            </div>
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

.class-cards {
    list-style: none;
    padding: 0;
    &__class {
        position: relative;
        width: 100%;
        margin: $gap1 0;
        padding: $gap2;
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
        h4 {
            color: $subtle;
        }
    }
    &__figure {
        width: 40%;
        max-width: 9em;
        float: right;
        margin-left: auto;
        padding-left: $gap3;
        padding-bottom: $gap3;
        img {
            display: block;
            width: 100%;
            height: auto;
            clip-path: circle();
        }
    }
    &__links {
        display: flex;
        flex-wrap: wrap;
        margin-top: $gap3;
        a {
            margin-right: $gap3;
        }
    }
}

@media (min-width: $point1) {
    .class-cards {
        &__class {
            display: flex;
            align-items: center;
        }
        &__figure {
            flex: 0 0 auto;
            width: 30%;
            max-width: 9em;
            order: 1;
            padding-bottom: 0;
        }
    }
}
</style>
