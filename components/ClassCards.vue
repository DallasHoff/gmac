<template>
    <ul class="class-cards">
        <li class="class-cards__class" :class="{'class-cards__class--invisible': shown === false}" v-for="(card, index) in cards" :key="card.title" :style="{'transition-delay': (index * 100) + 'ms'}">
            <figure class="class-cards__figure" v-if="card.img">
                <img :src="card.img" alt="">
            </figure>
            <div>
                <h3>
                    {{card.title}}
                </h3>
                <h4 v-if="card.instructor">
                    {{card.instructor}}<span v-if="card.experience"> - {{card.experience}}</span>
                </h4>
                <div class="class-cards__links">
                    <a :href="'tel:' + card.phone" v-if="card.phone" rel="noopener">
                        <icon class="fas fa-phone fa-fw" title="Phone number"></icon>
                        {{card.phone}}
                    </a>
                    <a :href="card.website" v-if="card.website" rel="noopener">
                        <icon class="fas fa-link fa-fw" title="Website"></icon>
                        {{getLinkText(card.website)}}
                    </a>
                    <a :href="'https://www.facebook.com/' + card.facebook + '/'" v-if="card.facebook" rel="noopener">
                        <icon class="fab fa-facebook-square fa-fw" title="Facebook"></icon>
                        {{card.facebook}}
                    </a>
                    <a :href="'https://www.instagram.com/' + card.instagram + '/'" v-if="card.instagram" rel="noopener">
                        <icon class="fab fa-instagram fa-fw" title="Instagram"></icon>
                        {{card.instagram}}
                    </a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
    props: ['cards', 'shown'],
    methods: {
        getLinkText(url) {
            // Use link's host name for link text
            if (!url) return '';
            var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
            if (!matches) return url;
            return matches[1];
        }
    },
    components: {
        Icon
    }
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
            display: block;
            width: 100%;
            height: auto;
            aspect-ratio: 1;
            object-fit: cover;
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
