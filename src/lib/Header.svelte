<script>
	import Icon from '@iconify/svelte';
	import { pages } from './navigationLinks';

	// Define a store for the menu visibility
	let isMenuOpen = false; // Change this to true

	// Function to toggle the menu
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	export let pathname = '';
</script>

<header class=" sticky top-0 py-8 bg-tertiary-500/50 z-20 backdrop-blur-lg">
	<div class="max-w-7xl flex justify-between items-center mx-auto">
		<div class="w-14 h-14 rounded-full bg-primary-500" />

		<nav class="w-full md:w-auto md:!block absolute inset-0 md:static" class:hidden={!isMenuOpen}>
			<ul class="flex flex-col md:flex-row gap-4">
				{#each pages as page}
					<li aria-current={pathname === page.href ? 'page' : undefined}>
						<a
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
		</nav>

		<!-- Social Icons -->
		<ul class="flex items-center gap-4 p-4 rounded-xl">
			<li class="block">
				<a href="https://github.com/SlavenDj">
					<Icon icon="akar-icons:github-fill" class="h-6 w-6" />
				</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/slaven-dj">
					<Icon icon="akar-icons:linkedin-fill" class="h-6 w-6" />
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/slaven.design/">
					<Icon icon="akar-icons:instagram-fill" class="h-6 w-6" />
				</a>
			</li>
		</ul>
		<button
			class="md:hidden p-2 bg-secondary-500/50 rounded-full"
			class:bg-secondary-500={isMenuOpen}
			on:click={toggleMenu}
		>
			<Icon icon="ic:round-menu" class="h-6 w-6" />
		</button>
	</div>
</header>
