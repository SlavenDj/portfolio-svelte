<script>
	import Button from './Button.svelte';
	import Section from './components/Section.svelte';
	import { HeroIcons } from './icons';
	import Icon from '@iconify/svelte';
	import { _ } from 'svelte-i18n';
</script>

<Section class="-top-32 flex flex-col px-5 md:relative md:min-h-screen md:pb-8">
	<div
		class="grid grow grid-rows-[auto_1fr] items-center gap-12 md:h-auto md:grid-rows-none lg:grid-cols-2"
	>
		<div class="order-1 flex flex-col gap-8 md:max-w-lg lg:order-none">
			<h1 class="text-5xl">{$_('home.hero.transformingIdeas')}</h1>
			<div class="flex flex-col gap-6">
				<p>{$_('home.hero.fullStackDeveloper')}</p>

				<div class="flex flex-col flex-wrap items-stretch gap-6 md:flex-row md:items-center">
					<Button link="/projects" class="grow">{$_('home.hero.exploreWork')}</Button>
					<Button class="grow" variant="secondary">{$_('home.hero.hireMe')}</Button>
				</div>
			</div>
		</div>
		<object
			data="/coding.svg"
			aria-label="coding"
			draggable="false"
			class="w-full max-w-sm justify-self-center lg:max-w-xl lg:justify-self-end"
		/>
	</div>

	<div class="hidden items-center justify-between md:flex">
		{#each HeroIcons as icon}
			<Icon
				{icon}
				class="h-12 w-12 fill-current opacity-75 saturate-0 transition-all hover:opacity-100 hover:saturate-100"
			/>
		{/each}
	</div>
</Section>
