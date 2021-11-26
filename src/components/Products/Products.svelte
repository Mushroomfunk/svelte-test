<script>
	import { action_destroyer } from 'svelte/internal';

	import Product from './Product.svelte';

	export let products;
</script>

<div class="flex flex-wrap">
	{#each Array(50) as _, i}
		{#each products as product (`${i}—${product.id}`)}
			<Product {product} />
		{/each}
	{/each}
</div>
