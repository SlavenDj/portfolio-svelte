<script>
	import DecorationImage from './DecorationImage.svelte';
	import Section from './components/Section.svelte';
	import Button from './components/ui/button/button.svelte';
	import { HeroIcons } from './icons';
	import Icon from '@iconify/svelte';
	import { _ } from 'svelte-i18n';
</script>

<Section class="flex flex-col px-5 -top-32 md:relative md:min-h-screen md:pb-8">
	<div
		class="grid grow grid-rows-[auto_1fr] items-center gap-12 md:h-auto md:grid-rows-none lg:grid-cols-2"
	>
		<div class="flex flex-col order-1 gap-8 md:max-w-lg lg:order-none">
			<h1 class="text-5xl">{$_('home.hero.transformingIdeas')}</h1>
			<div class="flex flex-col gap-6">
				<p>{$_('home.hero.fullStackDeveloper')}</p>

				<div class="flex flex-col flex-wrap items-stretch gap-6 md:flex-row md:items-center">
					<Button class="grow">{$_('home.hero.exploreWork')}</Button>
					<Button class="grow" variant="secondary">{$_('home.hero.resume_cv')}</Button>
				</div>
			</div>
		</div>
		<!-- <object
			data="/coding.svg"
			aria-label="coding"
			draggable="false"
			class="w-full max-w-sm justify-self-center lg:max-w-xl lg:justify-self-end"
		/> -->
		<DecorationImage />
	</div>

	<div class="items-center justify-between hidden md:flex">
		{#each HeroIcons as icon}
			<Icon
				{icon}
				class="w-12 h-12 transition-all opacity-75 fill-current saturate-0 hover:opacity-100 hover:saturate-100"
			/>
		{/each}
	</div>
</Section>
