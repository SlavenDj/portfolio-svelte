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

<header class=" sticky top-0 py-8 bg-inherit z-20 px-4">
	<div class="container flex justify-between items-center mx-auto">
		<a
			class="w-14 h-14 rounded-full bg-primary-500 relative z-50"
			href="/"
			aria-label="home"
			on:click={toggleMenu}
		/>

		<nav
			class="w-full flex lg:flex flex-col lg:flex-row items-center lg:justify-end justify-center absolute inset-0 h-screen lg:h-auto bg-secondary-100 dark:bg-secondary-900 lg:bg-transparent lg:static gap-8 px-8 lg:px-0"
			class:hidden={!isMenuOpen}
		>
			<ul class="flex flex-col lg:flex-row gap-4 w-full justify-center">
				{#each pages as page}
					<li aria-current={pathname === page.href ? 'page' : undefined}>
						<a
							on:click={toggleMenu}
							href={page.href}
							class="p-3 py-1 block rounded-full hover:bg-secondary-500/50"
							class:bg-secondary-500={pathname === page.href}
							class:text-tertiary-500={pathname === page.href}
							class:font-semibold={pathname === page.href}
						>
							{page.title}
						</a>
					</li>
				{/each}
			</ul>
			<ul class="flex items-center gap-4">
				{#each socialMediaLinks as link}
					<li>
						<a href={link.href}>
							<Icon icon={link.icon} class="h-6 w-6" />
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Social Icons -->

		<button
			class="lg:hidden p-2 bg-black/20 rounded-full z-20"
			class:bg-secondary-500={isMenuOpen}
			on:click={toggleMenu}
		>
			{#if isMenuOpen}
				<Icon icon={roundClose} class="h-6 w-6" />
			{:else}
				<Icon icon={roundMenu} class="h-6 w-6" />
			{/if}
		</button>
	</div>
</header>
