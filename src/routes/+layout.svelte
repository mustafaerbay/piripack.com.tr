<script>
	// @ts-ignore
	import Header from './Header.svelte';
	import '../app.css';
	// @ts-ignore
	import Nav from './Nav.svelte';

	import { onMount } from 'svelte';
	import SpeedDialButton from '$lib/SpeedDialButton.svelte';
	import Foot from './Foot.svelte';
	import { IconSolid } from 'flowbite-svelte-icons';
	import Maps from '$lib/Maps.svelte';
	import CustomContact from '$lib/CustomContact.svelte';
	import Contact from '$lib/Contact.svelte';
	import NavbarSide from '$lib/Navbar_side.svelte';
	import SocialsSmall from '$lib/Socials_small.svelte';
</script>

<!-- <div class="app bg-repeat" style="background-image: url('/images/logo.png')"> -->
<!-- <div class="app bg-repeat" style="background-image: url('/images/logo.png')"> -->
<div class="app bg-gradient-to-r from-green-100 to-green-300">
	<!-- <Header /> -->

	<Nav></Nav>
	<SocialsSmall></SocialsSmall>
	<main>
		<slot></slot>
		<!-- <Contact></Contact> -->
		<!-- <Maps></Maps> -->
		<!-- <CustomContact></CustomContact> -->
	</main>
	<!-- <NavbarSide></NavbarSide> -->
	<!-- <SpeedDialButton></SpeedDialButton> -->
	
	<Foot></Foot>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding-top: 6rem;
	}

	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-top: 0rem;
		padding-left: 1rem;
		padding-right: 1rem;
		width: 100%;
		max-width: 90rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	

	/* footer a {
		font-weight: bold;
	} */

	/* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
