<script>
	import Button from './Button.svelte';
	import { HeroIcons } from './icons';
	import Icon from '@iconify/svelte';
	import { _ } from 'svelte-i18n';
</script>

<section class="min-h-screen flex flex-col md:relative -top-32 pb-8 px-5">
	<div class="grid items-center md:grid-cols-2 gap-12 grow">
		<div class="flex flex-col md:max-w-lg gap-8 md:order-none order-1">
			<h1 class="text-5xl">{$_('home.hero.transformingIdeas')}</h1>
			<div class="flex flex-col gap-6">
				<p>{$_('home.hero.fullStackDeveloper')}</p>

				<div class="flex md:items-center gap-6 flex-col md:flex-row items-stretch flex-wrap">
					<Button link="/projects" class="grow">{$_('home.hero.exploreWork')}</Button>
					<Button class="grow" variant="secondary">{$_('home.hero.hireMe')}</Button>
				</div>
			</div>
		</div>
		<object
			data="/coding.svg"
			aria-label="coding"
			draggable="false"
			class="md:justify-self-end justify-self-center w-full md:max-w-xl max-w-sm"
		/>
	</div>

	<div class="md:flex items-center justify-between hidden">
		{#each HeroIcons as icon}
			<Icon
				{icon}
				class="opacity-75 h-12 w-12 hover:saturate-100 hover:opacity-100 transition-all saturate-0 fill-current"
			/>
		{/each}
	</div>
</section>
