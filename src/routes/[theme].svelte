<script context="module">
	const url = import.meta.env.VITE_API_URL;
	export const load = async ({ page: { params }, fetch }) => {
		const { theme } = params;

		const res = await fetch(`${url}/page:type=category&query=${theme}`, {
			headers: {
				'bf-localization': 'AT,EUR,en'
			}
		});
		const data = await res.json();
		console.log(data);
		return {
			props: {
				filters: data.page.content.filter.sections,
				products: data.page.content.products
			}
		};
	};
</script>

<script>
	import Filters from '../components/Filters/Filters.svelte';
	import Products from '../components/Products/Products.svelte';

	export let filters;
	export let products;
</script>

<div class="flex justify-between">
	<div style="flex: 0 0 10%">
		<Filters {filters} />
	</div>
	<div style="flex: 0 0 80%">
		<Products {products} />
	</div>
</div>
