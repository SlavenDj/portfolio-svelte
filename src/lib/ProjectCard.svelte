<script lang="ts">
	import Icon from '@iconify/svelte';
	import Card from './Card.svelte';

	export let project: {
		title: string;
		description: string;
		tags: string[];
		imageUrl: string;
		websiteUrl: string;
		githubUrl: string;
	};
</script>

<Card>
	<img
		src={project.imageUrl}
		alt={project.title}
		class="w-full md:max-w-xs object-cover rounded-lg max-h-48"
	/>

	<div class="absolute top-4 right-4 flex text-2xl bg-secondary-700 rounded-full text-primary-100">
		{#if project.websiteUrl}
			<a
				href={project.websiteUrl}
				class=" transition-colors rounded-full hover:bg-secondary-500 p-2"
			>
				<Icon icon="material-symbols:link" />
			</a>
		{/if}
		{#if project.githubUrl}
			<a
				href={project.githubUrl}
				class=" transition-colors rounded-full hover:bg-secondary-500 p-2"
			>
				<Icon icon="akar-icons:github-fill" />
			</a>
		{/if}
	</div>

	<div class=" flex flex-col gap-2 self-stretch">
		<h2 class="text-xl font-semibold">{project.title}</h2>
		<p class="opacity-80">{project.description}</p>
		<div class="flex gap-2">
			{#each project.tags as tag}
				<span class="bg-black/20 rounded-full px-3 py-1 text-sm tracking-wider">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</Card>
