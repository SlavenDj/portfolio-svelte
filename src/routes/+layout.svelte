<script>
	import './styles.css';
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<title>My Portfolio</title>
</svelte:head>
<div class="app">
	<Header pathname={$page.url.pathname} />

	<main class=" mx-auto container">
		<slot />
	</main>

	<Footer />
</div>
