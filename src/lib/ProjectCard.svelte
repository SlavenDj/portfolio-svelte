<script lang="ts">
	import Icon from '@iconify/svelte';

	export let project: {
		title: string;
		description: string;
		tags: string[];
		imageUrl: string;
		websiteUrl: string;
		githubUrl: string;
	};
</script>

<div class="bg-[#F7EFED] rounded-lg shadow-md relative flex flex-col gap-4">
	<img
		src={project.imageUrl}
		alt={project.title}
		class="w-full max-w-xs aspect-square object-cover rounded-lg"
	/>

	<div
		class="absolute top-4 right-4 flex gap-4 text-2xl bg-secondary-700 p-2 text-white rounded-full"
	>
		{#if project.websiteUrl}
			<a href={project.websiteUrl}>
				<Icon
					icon="material-symbols:link"
					class="hover:scale-125 hover:text-blue-500 transition-all"
				/>
			</a>
		{/if}
		{#if project.githubUrl}
			<a href={project.githubUrl}>
				<Icon icon="akar-icons:github-fill" class="hover:scale-125 transition-transform" />
			</a>
		{/if}
	</div>

	<div class="p-4 flex flex-col gap-2">
		<h2 class="text-xl font-semibold">{project.title}</h2>
		<p class="text-gray-600">{project.description}</p>
		<div class="flex gap-2">
			{#each project.tags as tag}
				<span class="bg-tertiary-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
					{tag}
				</span>
			{/each}
		</div>
	</div>
</div>
