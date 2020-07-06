<template>
    <h2 class="stroke-heading">
        <div class="stroke-heading__stroke"></div>
        <span class="stroke-heading__text"><slot></slot></span>
    </h2>
</template>

<script>
export default {}
</script>


<style lang="scss">
@import "~/assets/_theme.scss";

.stroke-heading {
    position: relative;
    color: $light1;
    margin-bottom: $gap4;
    &__stroke {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -20%;
        margin: auto;
        width: 125%;
        max-width: 20em;
        height: 6em;
        background-image: url(~assets/img/decor/brush-stroke-1.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    &__text {
        position: relative;
    }
}
@media not all and (min-resolution:.001dpcm) {
    /* Safari hack */
    @supports (-webkit-appearance:none) { 
        .stroke-heading {
            &__stroke {
                display: none;
            }
            &__text {
                background-image: linear-gradient($headings, $headings);
                background-position: 0% 100%;
                background-repeat: no-repeat;
                background-size: 100% .1em;
            }
        }
    }
}
@media only print {
    .stroke-heading {
        color: black;
        margin-bottom: $gap3;
        &__stroke {
            display: none;
        }
    }
}
</style>
