<script>
	export let imageSrc = '';
	export let title = '';
	export let description = '';
</script>

<div class="container">
	<enhanced:img src={imageSrc} alt="Card Image" class="image w-36 h-36" />
</div>

<div class="info-container">
	<div>
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
	<svg
		class="w-4 h-4"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
	</svg>
</div>

<style>
	.container {
		position: relative;
		overflow: hidden;
	}

	.image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.info-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}

	.info-container h3 {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.info-container p {
		font-size: 1rem;
	}
</style>
