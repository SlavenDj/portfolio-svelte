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

<main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
	<!-- Include the Decorations component for random shapes -->
	<Decorations />

	<Section class="col-span-1 md:col-span-2 lg:col-span-3">
		<h1 class="text-4xl font-semibold mb-4">My Projects Portfolio</h1>
		<p class="text-lg mb-6">{aboutText}</p>
	</Section>

	{#each projects as project (project.title)}
		<div class="col-span-1 md:col-span-1 lg:col-span-1 mb-4">
			<div class="bg-white rounded-lg shadow-md p-4">
				<ProjectCard {project} />
			</div>
		</div>
	{/each}
</main>
