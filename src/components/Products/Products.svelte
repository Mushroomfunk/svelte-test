<script>
	import Product from './Product.svelte';

	export let products;
</script>

<div class="flex flex-wrap">
	{#each Array(10) as _, i}
		{#each products as product}
			<Product {product} />
		{/each}
	{/each}
</div>
