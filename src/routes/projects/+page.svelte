<script>
	import Decorations from '$lib/Decorations.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';

	import Section from '$lib/components/Section.svelte';

	let projects = [
		{
			title: 'Project 1',
			description: 'Description of Project 1',
			tags: ['Web Design', 'Frontend', 'UI/UX'],
			imageUrl: 'project1.jpg',
			websiteUrl: 'https://example.com/project1',
			githubUrl: 'https://github.com/user/project1'
		},
		{
			title: 'Project 2',
			description: 'Description of Project 2',
			tags: ['Web Design', 'Frontend', 'UI/UX'],
			imageUrl: 'project2.jpg',
			websiteUrl: 'https://example.com/project2',
			githubUrl: 'https://github.com/user/project2'
		}
		// Add more projects as needed
	];

	let aboutText = `Welcome to my projects portfolio! Here, you can explore some of the web development and design projects I've worked on. Each project showcases my skills in web design, frontend development, and UI/UX design.`;
</script>

<main class="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
	<!-- Include the Decorations component for random shapes -->
	<Decorations />

	<Section class="col-span-1 md:col-span-2 lg:col-span-3">
		<h1 class="mb-4 text-4xl font-semibold">My Projects Portfolio</h1>
		<p class="mb-6 text-lg">{aboutText}</p>
	</Section>

	{#each projects as project (project.title)}
		<div class="col-span-1 mb-4 md:col-span-1 lg:col-span-1">
			<div class="p-4 bg-white rounded-lg shadow-md">
				<ProjectCard {project} />
			</div>
		</div>
	{/each}
</main>
