<script>
	import { company_details } from "../app";
	import SocialsSmall from "./Socials_small.svelte";

</script>
<div id="banner" class="rounded-md flex flex-row justify-end sticky absolute top-20 right-0 z-20 transition-transform duration-300 ease-in-out">
<!-- <div id="banner" class="rounded-md bg-white flex flex-row justify-end sticky top-20 transition-transform duration-300 ease-in-out"> -->
	<div class="flex justify-end rounded-md bg-white ml-2">
		<button class="mr-2 flex items-center space-x-2 p-2">
			<img src="logo.png" class="hidden h-6 w-6 sm:block" />
			<span>{company_details.phone}</span>
		</button>
	</div>
	<div class="flex justify-end rounded-md bg-white ml-2">
		<button class="mr-2 flex items-center space-x-2 p-2">
			<img src="logo.png" class="hidden h-6 w-6 sm:block" />
			<span>{company_details.email}</span>
		</button>
	</div>
	<div class="flex justify-end rounded-md bg-white ml-2">
		<button class="mr-2 flex items-center space-x-2 p-2">
			<img src="logo.png" class="hidden h-6 w-6 sm:block" />
			<span><a href="{company_details.whatsapp}">Whatsapp</a></span>
		</button>
	</div>
</div>

<style>
	#banner {
		/* display: flex; */
		/* flex-direction: row; */
		/* justify-content: space-evenly; */
		/* align-items */
		/* padding: 2px; */
		/* background-color: var(--color-theme-1); */
		/* color: white; */
        /* z-index: 1000; */
	}
</style>