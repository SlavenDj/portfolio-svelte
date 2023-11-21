<script>
	import './styles.css';
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { onMount } from 'svelte';
	import LoadingScreen from '$lib/loadingScreen.svelte';
	let isLoading = true;
	onMount(() => (isLoading = false));
</script>

<svelte:head>
	<title>My Portfolio</title>
</svelte:head>
<div
	class="bg-secondary-100 mx-auto min-h-screen text-primary-900 dark:bg-primary-900 dark:text-secondary-100"
>
	{#if isLoading}
		<LoadingScreen />
	{/if}
	<Header pathname={$page.url.pathname} />

	<main class=" mx-auto container flex flex-col gap-8">
		<slot />
	</main>

	<Footer />
</div>
