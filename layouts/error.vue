<template>
    <div class="__nuxt-error-page">
        <div class="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#d7d7d7" viewBox="0 0 48 48">
                <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
            </svg>
            <h1 class="title">{{message}}</h1>
            <p v-if="statusCode === 404" class="description">
                <NuxtLink class="error-link" to="/">Back to Home Page</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NuxtError',
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    head() {
        return {
            title: this.message + ' | Griffin Martial Arts Center'
        }
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500;
        },
        message() {
            return this.error.message;
        }
    }
}
</script>

<style>
.__nuxt-error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
}
.__nuxt-error-page .error {
    max-width: 450px;
}
.__nuxt-error-page .title {
    font-size: 1.5rem;
    margin-top: 15px;
    color: #47494E;
    margin-bottom: 1rem;
}
.__nuxt-error-page .description {
    color: #7F828B;
    line-height: 21px;
    margin-bottom: 10px;
}
</style>
