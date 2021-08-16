<template>
	<footer class="app-footer">
		<div class="app-footer__connect">
			<div class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<i class="fab fa-facebook-square fa-fw" title="Facebook page"></i>
				</span>
				<a href="https://www.facebook.com/GriffinMartialArtsCenter/" rel="noopener" target="_blank">GriffinMartialArtsCenter</a>
			</div>
			<div class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<i class="fab fa-instagram fa-fw" title="Instagram page"></i>
				</span>
				<a href="https://www.instagram.com/gmac1454/" rel="noopener" target="_blank">gmac1454</a>
			</div>
			<div class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<i class="fas fa-envelope fa-fw" title="Email address"></i>
				</span>
				<a href="mailto:contact@griffindojo.com" rel="noopener" target="_top">contact@griffindojo.com</a>
			</div>
			<div class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<i class="fas fa-phone fa-fw" title="Phone number"></i>
				</span>
				<a href="tel:888-218-5713" rel="noopener">888-218-5713</a>
			</div>
		</div>
		<p class="app-footer__footnote">Site by Dallas Hoffman | Copyright {{currentYear}} Griffin Martial Arts Center</p>
	</footer>
</template>

<script>
export default {
    name: 'AppFooter',
	computed: {
		currentYear() {
			return new Date().getFullYear();
		}
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
