<!-- ProjectSection.svelte -->
<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	// Define the project data
	let projects = [
		{
			title: 'Project 1',
			description: 'Description for Project 1',
			tags: ['design', 'front-end'],
			imageUrl:
				'https://plus.unsplash.com/premium_photo-1690481529194-6087914e096e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add the path to your project image
			websiteUrl: 'https://example.com/project1', // Add the website URL
			githubUrl: 'https://github.com/yourusername/project1' // Add the GitHub URL
		},
		{
			title: 'Project 2',
			description: 'Description for Project 2',
			tags: ['full stack'],
			imageUrl:
				'https://plus.unsplash.com/premium_photo-1690481529194-6087914e096e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add the path to your project image
			websiteUrl: '', // No website for this project
			githubUrl: 'https://github.com/yourusername/project2' // Add the GitHub URL
		},
		{
			title: 'Project 3',
			description: 'Description for Project 3',
			tags: ['back-end'],
			imageUrl:
				'https://plus.unsplash.com/premium_photo-1690481529194-6087914e096e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add the path to your project image
			websiteUrl: 'https://example.com/project3', // Add the website URL
			githubUrl: '' // No GitHub for this project
		}
	];
</script>

<div class="flex gap-4 justify-between">
	{#each projects as project (project.title)}
		<ProjectCard {project} />
	{/each}
</div>
