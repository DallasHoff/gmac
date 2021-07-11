<template>
    <ul class="class-cards">
        <li class="class-cards__class" :class="{'class-cards__class--invisible': shown === false}" v-for="(card, index) in cards" :key="card.title" :style="{'transition-delay': (index * 100) + 'ms'}">
            <figure class="class-cards__figure" v-if="card.img">
                <img :src="require('~/assets' + card.img + '?resize&size=150')" alt="">
            </figure>
            <div>
                <h3>
                    <a :href="'/classes/' + card.slug" class="class-cards__article-link">
                        {{card.title}}
                    </a>
                </h3>
                <h4 v-if="card.instructor">
                    {{card.instructor}}<span v-if="card.experience"> - {{card.experience}}</span>
                </h4>
                <class-links class="class-cards__links" :class-content="card"></class-links>
            </div>
        </li>
    </ul>
</template>

<script>
import ClassLinks from '~/components/ClassLinks.vue'

export default {
    name: 'ClassCards',
    props: ['cards', 'shown'],
    components: {
        ClassLinks
    }
}
</script>


<style lang="scss">
@import "~/assets/_theme.scss";

.class-cards {
    list-style: none;
    padding: 0;
    &__class {
        @include card;
        position: relative;
        width: 100%;
        margin: $gap1 0;
        padding: $gap2;
        transition: transform 500ms, opacity 500ms;
        overflow: hidden;
        &--invisible {
            visibility: hidden;
            transform: translateY(2rem);
            opacity: 0;
        }
        h3 a {
            color: $headings;
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
            @include circle-img;
        }
    }
    &__links {
        margin-top: $gap2;
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
