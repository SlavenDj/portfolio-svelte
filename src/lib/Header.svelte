<script>
	import Icon from '@iconify/svelte';
	import { pages, socialMediaLinks } from './links';
	import roundClose from '@iconify/icons-ic/round-close';
	import roundMenu from '@iconify/icons-ic/round-menu';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	export let pathname = '';
</script>

<header
	class="sticky top-0 z-20 px-4 py-8 backdrop-blur-lg bg-secondary-100/60 dark:bg-primary-900/60"
>
	<div class="flex items-center justify-between mx-auto max-w-7xl">
		<a
			class="relative z-50 rounded-full w-14 h-14 bg-primary-500"
			href="/"
			aria-label="home"
			on:click={() => {
				isMenuOpen = false;
			}}
		/>

		<nav
			class="absolute inset-0 flex flex-col items-center justify-center w-full h-screen gap-8 px-8 lg:flex lg:flex-row lg:justify-end lg:h-auto bg-secondary-100 dark:bg-secondary-900 lg:bg-transparent lg:static lg:px-0"
			class:hidden={!isMenuOpen}
		>
			<ul class="flex flex-col justify-center w-full gap-4 lg:flex-row">
				{#each pages as page}
					{@const active = pathname === page.href}
					<li aria-current={pathname === page.href ? 'page' : undefined}>
						<a
							on:click={toggleMenu}
							href={page.href}
							class="block p-3 py-1 rounded-full hover:bg-secondary-500/50"
							class:bg-secondary-500={active}
							class:text-tertiary-500={active}
							class:font-semibold={active}
						>
							{page.label}
						</a>
					</li>
				{/each}
			</ul>
			<ul class="flex items-center gap-6">
				{#each socialMediaLinks as link}
					<li>
						<a href={link.href}>
							<Icon icon={link.icon} class="w-6 h-6" />
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Social Icons -->

		<button
			class="z-20 p-2 rounded-full lg:hidden bg-black/20"
			class:bg-secondary-500={isMenuOpen}
			on:click={toggleMenu}
		>
			{#if isMenuOpen}
				<Icon icon={roundClose} class="w-6 h-6" />
			{:else}
				<Icon icon={roundMenu} class="w-6 h-6" />
			{/if}
		</button>
	</div>
</header>
