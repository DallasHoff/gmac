import pkg from './package'


const siteTitle = 'Griffin Martial Arts Center - Martial Arts School in Griffin, Georgia';
const siteDescription = 'Griffin Martial Arts Center is a martial arts school for ages 6+ located in Griffin, Georgia.';


export default {
    target: 'static',
    ssr: true,

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
            { name: 'apple-mobile-web-app-title', content: 'GMAC' },
            { name: 'application-name', content: 'Griffin Martial Arts Center' },
            { name: 'msapplication-TileColor', content: '#dd2222' },
            { name: 'theme-color', content: '#f3f3f3' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
            { name: 'twitter:card', content: 'summary' },
            { hid: 'og:title', property: 'og:title', content: siteTitle },
            { property: 'og:type', content: 'article' },
            { hid: 'og:url', property: 'og:url', content: 'https://griffindojo.com/' },
            { property: 'og:image', content: 'https://griffindojo.com/apple-touch-icon.png' },
            { hid: 'og:description', property: 'og:description', content: siteDescription },
            { property: 'og:site_name', content: 'Griffin Martial Arts Center' }
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
        script: [
            { src: 'https://kit.fontawesome.com/2e549a7184.js', crossorigin: 'anonymous', async: true }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#851414' },

    /*
    ** Global CSS
    */
    css: [
        '@/assets/main.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {
            src: '~/plugins/vue-flickity.js',
            ssr: false
        }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxt/content'
    ],
    buildModules: [
        '@aceforth/nuxt-optimized-images'
    ],

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
