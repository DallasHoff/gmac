<template>
	<footer class="app-footer">
		<div class="app-footer__connect">
			<div v-if="config.facebook" class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<i class="fab fa-facebook-square fa-fw" title="Facebook page"></i>
				</span>
				<a :href="`https://www.facebook.com/${config.facebook}/`" rel="noopener" target="_blank">{{config.facebook}}</a>
			</div>
			<div v-if="config.instagram" class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<i class="fab fa-instagram fa-fw" title="Instagram page"></i>
				</span>
				<a :href="`https://www.instagram.com/${config.instagram}/`" rel="noopener" target="_blank">{{config.instagram}}</a>
			</div>
			<div v-if="config.email" class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<i class="fas fa-envelope fa-fw" title="Email address"></i>
				</span>
				<a :href="`mailto:${config.email}`" rel="noopener" target="_top">{{config.email}}</a>
			</div>
			<div v-if="config.phone" class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<i class="fas fa-phone fa-fw" title="Phone number"></i>
				</span>
				<a :href="`tel:${config.phone}`" rel="noopener">{{config.phone}}</a>
			</div>
		</div>
		<p class="app-footer__footnote">Site by Dallas Hoffman | Copyright {{currentYear}} Griffin Martial Arts Center</p>
	</footer>
</template>

<script>
export default {
	name: 'AppFooter',
	data() {
		return {
			config: {}
		}
	},
	computed: {
		currentYear() {
			return new Date().getFullYear();
		}
	},
	async fetch() {
		this.config = await this.$content('/footer').fetch();
	}
}
</script>

<style lang="scss">
@import "~/assets/_theme.scss";

.app-footer {
	padding: $gap4 $gap3;
	text-align: center;
	background-color: $background2;
	overflow: hidden;
	&__connect {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 auto $gap2;
		&-item {
			display: flex;
			align-items: center;
			white-space: nowrap;
			margin: 0 $gap3 $gap2 $gap3;
		}
		&-icon {
			font-size: 1.5em;
			margin-right: $gap1;
		}
	}
	&__footnote {
		font-size: .65em;
		line-height: 1.5em;
	}
	a {
		color: inherit;
	}
}
@media only print {
	.app-footer {
		page-break-inside: avoid;
	}
}
</style>
