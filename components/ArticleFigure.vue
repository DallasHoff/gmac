<template>
    <figure class="article-figure">
        <img :src="imgSrc()" :alt="alt" />
        <figcaption v-if="caption">{{caption}}</figcaption>
    </figure>
</template>

<script>
export default {
    name: 'ArticleFigure',
    props: ['src', 'alt', 'caption'],
    methods: {
        imgSrc() {
            try {
                return require(`~/assets${this.src}`);
            } catch (err) {
                return null;
            }
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.article-figure {
    padding: $gap2;
    margin: 0 0 $gap4 0;
    background-color: $light3;
    img, picture {
        width: 100%;
        height: auto;
    }
    figcaption {
        font-size: .8em;
        line-height: 1.4em;
        color: $subtle;
        margin-top: $gap1;
    }
}

@media (min-width: $point1) {
    .article-figure {
        float: right;
        max-width: 50%;
        margin: $gap3 0 $gap3 $gap3;
    }
}
</style>