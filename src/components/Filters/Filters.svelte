<script>
	export let filters;
</script>

<div class="flex flex-wrap">
	{#each filters as filter}
		<div>
			<h2 class="text-xl">{filter.headerTitle}</h2>
			<ul>
				{#each filter.categories as link (link.url)}
					<li>
						<a href={link.url}>
							{link.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
