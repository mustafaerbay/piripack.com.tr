<script>
	import { Badge } from 'flowbite-svelte';

	export let name;
	export let description;
	export let url;
</script>

<!-- <div> -->
<div id="category"
	class="rounded-md hover:rounded-3xl max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 relative"
>
<!-- <div id="category"
	class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
> -->
	<a href="#">
		<img class="rounded-md hover:rounded-3xl" style="display=inline-block;" src={url} alt="" />
	</a>
	<div class="p-5">
		<a href="/contact">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{name}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{description}
		</p>
		<div class="relative">
			<!-- <Badge rounded color="green">Green</Badge> -->
			<a id="bottom_button" 
				href="/contact"
				class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute right-0 bottom-0"
			>
				Bilgi Al
				<svg
					class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>

<!-- <div>denemee</div> -->
<!-- </div> -->

<style>
	#bottom_button {
		/* position: absolute; */
		bottom: 10;
		margin-top: -25px;
		/* margin-right: 10px; */
		/* position: 1px 1px 11px 10px; */
		position: relative;
		background-color: var(--color-theme-1);
	}
	#category {
		/* box-shadow: 5px 5px 5px 5px; */
		min-width: 300px;
		max-width: 300px;
		border-style: solid;
		border-width: 1px;
		border-color: var(--color-theme-1);
		

	}
	div {
		position: relative;
		/* padding: 1rem; */
		margin: 4px;
		/* border-radius: 59px 59px 59px 59px;
		-moz-border-radius: 59px 59px 59px 59px;
		-webkit-border-radius: 59px 59px 59px 59px;
		border: 6px hidden #000000; */
		/* flex-direction: row; */
		/* float: left; */
	}
</style>
