<script>
	import { action_destroyer } from 'svelte/internal';

	import Product from './Product.svelte';

	export let products;
</script>

<div class="flex flex-wrap">
	{#each products as product (`${product.id}`)}
		<Product {product} />
	{/each}
</div>
