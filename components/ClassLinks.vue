<template>
    <div class="class-links">
        <a :href="'tel:' + classContent.phone" v-if="classContent.phone" rel="noopener">
            <fa-icon class="fas fa-phone fa-fw" title="Phone number"></fa-icon>
            {{classContent.phone}}
        </a>
        <a :href="classContent.website" v-if="classContent.website" target="_blank" rel="noopener">
            <fa-icon class="fas fa-link fa-fw" title="Website"></fa-icon>
            {{getLinkText(classContent.website)}}
        </a>
        <a :href="'https://www.facebook.com/' + removeAt(classContent.facebook) + '/'" v-if="classContent.facebook" target="_blank" rel="noopener">
            <fa-icon class="fab fa-facebook-square fa-fw" title="Facebook"></fa-icon>
            {{removeAt(classContent.facebook)}}
        </a>
        <a :href="'https://www.instagram.com/' + removeAt(classContent.instagram) + '/'" v-if="classContent.instagram" target="_blank" rel="noopener">
            <fa-icon class="fab fa-instagram fa-fw" title="Instagram"></fa-icon>
            {{removeAt(classContent.instagram)}}
        </a>
    </div>
</template>

<script>
export default {
    name: 'ClassLinks',
    props: ['classContent'],
    methods: {
        getLinkText(url) {
            // Use link's host name for link text
            if (!url) return '';
            var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
            if (!matches) return url;
            return matches[1];
        },
        removeAt(str) {
            return str.replace(/\@/g, '');
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.class-links {
    display: flex;
    flex-wrap: wrap;
    a {
        margin-right: $gap3;
        line-height: 2em;
    }
}
</style>