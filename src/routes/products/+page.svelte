<script>
	// @ts-nocheck

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
<div class="relative grid flex flex-col justify-center">
	{#each categories as category, index}
		{@const catId = category.id}
		<div class="solid relative m-2 flex flex-col border">
			<div class="flex flex-col justify-center">
				<h2 class="m-0">{category.name}</h2>
				<h2 class="m-0">{catId}</h2>
			</div>
			<div class="flex-container relative flex">
				{#each products as product}
					{#if product.category_id == catId}
						<div class="flex m-1 h-64 w-64 text-wrap border">
							<h3 class="">{product.name}</h3>
						</div>
					{:else}
						<div class="m-1">
							<!-- <h3>no product exist in this category</h3>
							<h3>{product.id}</h3> -->
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</div>
<div class="flex-container relative p-4">
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
