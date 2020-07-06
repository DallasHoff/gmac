import pkg from './package'


const siteTitle = 'Griffin Tae Kwon-Do - Martial Arts School in Griffin, Georgia';
const siteDescription = 'Griffin Tae Kwon-Do is a martial arts school for ages 6+ located in Griffin, Georgia.';


export default {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: siteTitle,
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: siteDescription },
            { hid: 'keywords', name: 'keywords', content: 'taekwondo, tae kwon do, tkd, griffin, georgia, martial arts, karate, eric hoffman' },
            { name: 'apple-mobile-web-app-title', content: 'Griffin Tae Kwon-Do' },
            { name: 'application-name', content: 'Griffin Tae Kwon-Do' },
            { name: 'msapplication-TileColor', content: '#dd2222' },
            { name: 'theme-color', content: '#f3f3f3' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
            { name: 'twitter:card', content: 'summary' },
            { hid: 'og:title', property: 'og:title', content: siteTitle },
            { property: 'og:type', content: 'article' },
            { hid: 'og:url', property: 'og:url', content: 'https://griffintkd.org/' },
            { property: 'og:image', content: 'https://griffintkd.org/apple-touch-icon.png' },
            { hid: 'og:description', property: 'og:description', content: siteDescription },
            { property: 'og:site_name', content: 'Griffin Tae Kwon-Do' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/manifest.json' },
            { rel: 'mask-icon', type: '/safari-pinned-tab.svg', color: '#dd2222' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merienda+One|Merriweather:400,700&display=swap' }
        ],
        script: []
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#851414' },

    /*
    ** Global CSS
    */
    css: [
        '@/assets/main.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/fontawesome.js',
        {
            src: '~/plugins/vue-flickity.js',
            ssr: false
        }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
