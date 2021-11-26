<script>
	export let navigation;
</script>

<nav>
	<ul class="flex justify-around">
		{#each navigation as nav}
			<li class="text-2xl">
				<a sveltekit:prefetch href={nav.url}>{nav.title}</a>
			</li>
		{/each}
	</ul>
</nav>
