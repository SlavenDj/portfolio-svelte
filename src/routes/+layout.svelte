<script>
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { onMount } from 'svelte';
	import LoadingScreen from '$lib/loadingScreen.svelte';
	import './styles.css';
	let isLoading = true;

	onMount(() => (isLoading = false));
</script>

<svelte:head>
	<title>My Portfolio</title>
</svelte:head>
<div
	class="min-h-screen bg-secondary-100 text-primary-900 dark:bg-primary-900 dark:text-secondary-100"
>
	{#if isLoading}
		<LoadingScreen />
	{/if}
	<Header pathname={$page.url.pathname} />

	<main class="max-w-7xl flex flex-col gap-8 mx-auto scroll-smooth [&>*]:px-12">
		<slot />
	</main>

	<Footer />
</div>
