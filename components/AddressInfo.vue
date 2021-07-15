<template>
    <appear-section id="address" class="address-info">
        <stroke-heading>Address</stroke-heading>
        <address>
            1454 Williamson Rd.<br>
            Bldg B<br>
            Griffin, GA 30224
        </address>
    </appear-section>
</template>

<script>
import AppearSection from '~/components/AppearSection.vue'

export default {
    name: 'AddressInfo',
    components: {
        AppearSection
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
