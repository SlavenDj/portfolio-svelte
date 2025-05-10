<script lang="ts">
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';
	import Tag from './tag.svelte';
	import Mockup from './Mockup.svelte';

	export let project: {
		title: string;
		description: string;
		tags: string[];
		imageUrl?: string;
		genImage?: boolean;
		websiteUrl?: string;
		githubUrl?: string;
		isImgAIGen?: boolean;
	};
	const iphoneProps: {
		size: { w: number; h: number };
		device: 'iphone';
	} = {
		size: { w: 540, h: 1080 },
		device: 'iphone'
	};
	const macbookProps: {
		size: { w: number; h: number };
		device: 'macbook';
	} = {
		size: { w: 1680, h: 1080 },
		device: 'macbook'
	};
</script>

<Card>
	<div class="relative">
		{#if project.websiteUrl}
			<Mockup url={project.websiteUrl} {...macbookProps} />
		{:else}
			<enhanced:img
				src={project.imageUrl}
				alt={project.title}
				class="object-cover w-full rounded-lg md:max-w-xs aspect-square"
			/>
		{/if}
		{#if project.isImgAIGen}
			<div class="absolute top-1 right-2"><Tag>AI Generated</Tag></div>
		{/if}
	</div>

	<div class="absolute flex text-2xl rounded-full top-4 right-4 bg-secondary-700 text-primary-100">
		{#if project.websiteUrl}
			<a
				href={project.websiteUrl}
				class="p-2 transition-colors rounded-full hover:bg-secondary-500"
			>
				<Icon icon="material-symbols:link" />
			</a>
		{/if}
		{#if project.githubUrl}
			<a href={project.githubUrl} class="p-2 transition-colors rounded-full hover:bg-secondary-500">
				<Icon icon="akar-icons:github-fill" />
			</a>
		{/if}
	</div>

	<div class="flex flex-col self-stretch gap-2">
		<h2 class="text-xl font-semibold">{project.title}</h2>
		<p class="opacity-80">{project.description}</p>
		<div class="flex gap-2">
			{#each project.tags as tag}
				<span class="px-3 py-1 text-sm tracking-wider rounded-full bg-black/20">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</Card>
