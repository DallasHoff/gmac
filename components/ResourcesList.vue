<template>
    <ul class="resources-list">
        <li><nuxt-link to="/student-guide">Student Guide</nuxt-link>: tenants of Tae Kwon-Do, student oath, counting in Korean</li>
        <li><nuxt-link to="/badge-guide">Uniform Badge Guide</nuxt-link>: how to add badges to the uniform</li>
        <li><nuxt-link to="/testing-requirements">Testing Requirements</nuxt-link>: the skills you need to learn to pass your next test and earn your next belt</li>
    </ul>
</template>

<script>
export default {
    name: 'ResourcesList'
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.resources-list {
    a.nuxt-link-active {
        color: $subtle;
        background-image: none;
    }
}
</style>
