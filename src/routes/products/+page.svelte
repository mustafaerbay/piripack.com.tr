<script>
	import Category from '$lib/Category.svelte';
	import { products } from '../../app';
	import { categories } from '../../app';
</script>

<div class="flex-container relative">
	{#each categories as item}
		<Category name={item.name} description={item.description} url={item.url}></Category>
	{/each}
</div>
<!-- TODO: fix product list -->
<div  class="flex-container relative p-4">
	{#each products as product}
		<div id="products" class="p-4">
			<div>
				<img src={product.image_url} alt="SvelteKit" />
			</div>
			<div>
				<p>{product.name}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.flex-container {
		/* float: left; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		padding-bottom: 1rem;
		/* justify-content: space-between; */
		/* padding-top: 3rem; */
	}
	@media (max-width: 800px) {
		.flex-container {
			flex-direction: row;
		}
	}

	#products {
		/* box-shadow: 5px 5px 5px 5px; */
		min-width: 300px;
		max-width: 300px;
		/* border-style: solid;
		border-width: 1px;
		border-color: var(--color-theme-1); */
		

	}
</style>
