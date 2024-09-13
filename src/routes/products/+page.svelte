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
<!-- TODO: fix product list yazilar alta geciyor-->
<div class="relative flex grid flex-col justify-center">
	{#each categories as category, index}
		{@const catId = category.id}
		<div class="solid relative m-2 flex flex-col border">
			<div class="flex flex-row justify-center">
				<h2 class="m-1">{category.name}</h2>
				<h2 class="font-mono">({catId})</h2>
			</div>
			<div class="flex-container relative flex">
				{#each products as product}
					{#if product.category_id == catId}
						<div class="flex m-1 h-72 w-64 text-wrap border relative">
							<img class="object-cover w-64 " src={product.image_url} alt={product.description} />
							
							<div class="product_name absolute text-wrap bottom-0 h-4 w-64">
								<p class="absolute font-mono ">{product.name}</p>

							</div>
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
<div class="flex-container relative p-4 mb-4">
	{#each products as product}
		<div id="products" class="p-4 w-64 h-64 m-4">
			<div>
				<img class="object-cover w-64 h-64"src={product.image_url} alt={product.description} />
			</div>
			<div>
				<p>{product.name}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	img {
		opacity: 50%;
		-webkit-transition: all 2s;
	}
	img:hover {
		opacity: 100%;
		transition: all 2s;
	}
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
	/* #product_name {
		display: none;
	} */
	#product_name:hover {
		/* display: content; */
		/* background-color: black; */
		/* transition: all 2sn; */
	}
	#product_outer {
		/* box-shadow: 5px 5px 5px 5px; */
		min-width: 300px;
		max-width: 300px;
		/* border-style: solid;
		border-width: 1px;
		border-color: var(--color-theme-1); */
	}
</style>
