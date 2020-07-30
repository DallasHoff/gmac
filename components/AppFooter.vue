<template>
	<footer class="app-footer">
		<div class="app-footer__connect">
			<div class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<fa :icon="['fab', 'facebook-square']" fixed-width title="Facebook page"></fa>
				</span>
				<a href="https://www.facebook.com/GriffinMartialArtsCenter/" rel="noopener" target="_blank">@GriffinMartialArtsCenter</a>
			</div>
			<div class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<fa :icon="['fas', 'envelope']" fixed-width title="Email address"></fa>
				</span>
				<a href="mailto:eric@griffindojo.com" rel="noopener" target="_top">eric@griffindojo.com</a>
			</div>
			<div class="app-footer__connect-item">
				<span class="app-footer__connect-icon">
					<fa :icon="['fas', 'phone']" fixed-width title="Phone number"></fa>
				</span>
				<a href="tel:678-778-3789" rel="noopener">678-778-3789</a>
			</div>
		</div>
		<p class="app-footer__footnote">Site by Dallas Hoffman | Copyright {{currentYear}} Griffin Martial Arts Center</p>
	</footer>
</template>

<script>
export default {
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
		margin-bottom: $gap2;
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
