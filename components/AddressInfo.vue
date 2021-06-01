<template>
    <lazy-section id="address" class="address-info">
        <stroke-heading>Address</stroke-heading>
        <address>
            1454 Williamson Rd.<br/>
            Bldg B<br />
            Griffin, GA 30224
        </address>
    </lazy-section>
</template>

<script>
import LazySection from '~/components/LazySection.vue'
import StrokeHeading from '~/components/StrokeHeading.vue'

export default {
    name: 'AddressInfo',
    components: {
        LazySection,
        StrokeHeading
    }
}
</script>


<style lang="scss">
@import "~/assets/_theme.scss";

.address-info {
    color: $light3;
    address {
        margin-bottom: $gap2;
    }
    p {
        font-size: .85em;
    }
}
@media only print {
    .address-info {
        color: black;
    }
}
</style>
