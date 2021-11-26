<script context="module">
	const url = import.meta.env.VITE_API_URL;
	export const load = async ({ fetch }) => {
		const res = await fetch(`${url}/common:navigation`, {
			headers: {
				'bf-localization': 'AT,EUR,en'
			}
		});
		const data = await res.json();

		return { props: { navigation: data.common.navigation } };
	};
</script>

<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	export let navigation;
</script>

<header class="container mx-auto px-4 py-7">
	<Nav {navigation} />
</header>
<main class="container mx-auto px-4">
	<slot />
</main>
