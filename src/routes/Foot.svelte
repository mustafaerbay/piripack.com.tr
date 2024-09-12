<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink,
		SpeedDialButton,
		GradientButton,
		FooterIcon

	} from 'flowbite-svelte';
	import { links } from '../app';
	import Socials from '$lib/Socials.svelte';

	let text = 'asdasdda asdasdasd';
	function openWhatsapp() {
		// @ts-ignore
		window.open('https://wa.me/+901234567890?text=' + text, '_blank').focus();
	}
</script>

<!-- TODO: fix gradiant button links -->
<footer class="flex flex-row justify-center space-evenly">
	<GradientButton color="green" on:click={openWhatsapp}>Whatsapp +123456789</GradientButton>
	<GradientButton color="green"></GradientButton>
	<GradientButton color="green">Iletisim No +90342 321 32 21</GradientButton>
	<!-- <SpeedDialButton name="Email" href="/contact">
        <ShareNodesSolid class="w-6 h-6" />
    </SpeedDialButton> -->
</footer>
<Footer footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand
			href="https://piripack.com.tr"
			src="/images/logo.png"
			alt="PiriPack Logo"
			name="PiriPack"
		/>
		<Socials></Socials>

		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			{#each links as item}
				<FooterLink href={item.url}>{item.name}</FooterLink>
			{/each}
			<!-- <FooterLink href="/about">Hakkımızda</FooterLink> -->
			<!-- <FooterLink href="/">Privacy Policy</FooterLink> -->
			<!-- <FooterLink href="/">Licensing</FooterLink> -->
			<!-- <FooterLink href="/contact">İletişim</FooterLink> -->
		</FooterLinkGroup>
	</div>
	<!-- <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> -->
	<!-- <FooterCopyright href="/" by="PiriPack" aClass="" /> -->
	
</Footer>

<style>
	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		/* align-items */
		padding: 12px;
		background-color: var(--color-theme-1);
		color: white;
	}
</style>
