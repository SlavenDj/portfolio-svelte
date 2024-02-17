<!-- ProjectSection.svelte -->
<script lang="ts">
	import { projects } from '../data';
	import ProjectCard from './ProjectCard.svelte';
	import Section from './components/Section.svelte';

	// Define the project data
</script>

<Section class="grid justify-between gap-10 px-5 grid-cols-smart" id="projects">
	{#each projects as project (project.title)}
		<ProjectCard {project} />
	{/each}
</Section>
