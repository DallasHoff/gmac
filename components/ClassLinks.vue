<template>
    <div class="class-links">
      <div>
        <a :href="'tel:' + classContent.phone" v-if="classContent.phone" rel="noopener">
            <i class="fas fa-phone fa-fw" title="Phone number"></i>
            {{classContent.phone}}
        </a>
      </div>
      <div>
        <a :href="classContent.website" v-if="classContent.website" target="_blank" rel="noopener">
            <i class="fas fa-link fa-fw" title="Website"></i>
            {{getLinkText(classContent.website)}}
        </a>
      </div>
      <div>
        <a :href="'https://www.facebook.com/' + removeAt(classContent.facebook) + '/'" v-if="classContent.facebook" target="_blank" rel="noopener">
            <i class="fab fa-facebook-square fa-fw" title="Facebook"></i>
            {{removeAt(classContent.facebook)}}
        </a>
      </div>
      <div>
        <a :href="'https://www.instagram.com/' + removeAt(classContent.instagram) + '/'" v-if="classContent.instagram" target="_blank" rel="noopener">
            <i class="fab fa-instagram fa-fw" title="Instagram"></i>
            {{removeAt(classContent.instagram)}}
        </a>
      </div>
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
        display: inline-block;
        margin-right: $gap3;
        white-space: nowrap;
    }
}
</style>