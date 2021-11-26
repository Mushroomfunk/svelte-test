<script>
	export let product;
	$: alt = `${product.brand.title} — ${product.title}`;
	$: src = `${product.imageUrls[0]}--product-card.jpg`;
</script>

<div style="flex: 0 0 24%">
	<a href={product.url}>
		<img {alt} {src} />
		<h2>{product.brand.title}</h2>
		<p>{product.title}</p>
	</a>
</div>
