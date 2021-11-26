<script>
	import Product from './Product.svelte';

	export let products;
</script>

<div class="flex flex-wrap">
	{#each products as product}
		<Product {product} />
	{/each}
</div>
