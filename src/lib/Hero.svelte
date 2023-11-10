<script>
	import { HeroIcons } from './icons';
	import Icon from '@iconify/svelte';
</script>

<section class="min-h-screen flex flex-col relative -top-32 pb-8 px-5">
	<div class="grid items-center md:grid-cols-2 gap-12 grow">
		<div class="flex flex-col md:max-w-lg gap-8 md:order-none order-1">
			<h1 class="text-5xl">Transforming Ideas into Engaging Digital Experiences</h1>
			<div class="flex flex-col gap-6">
				<p>
					A full-stack developer and UI/UX designer with a strong emphasis on user-centered design,
					I bring together the art of aesthetics and the science of functionality to craft
					captivating websites and applications.
				</p>

				<div class="flex md:items-center gap-6 flex-col md:flex-row items-stretch flex-wrap">
					<a
						href="/projects"
						class="bg-primary-500 text-white p-3 px-6 rounded-full text-xl font-semibold text-center grow"
					>
						Explore My Work
					</a>

					<button
						class="text-primary-500 border-current border p-3 px-6 rounded-full text-xl font-medium text-center grow"
					>
						Hire me
					</button>
				</div>
			</div>
		</div>
		<img src="/coding.svg" alt="coding" draggable="false" class="md:justify-self-end" />
	</div>

	<div class="md:flex items-center justify-between hidden">
		{#each HeroIcons as icon}
			<Icon {icon} class="saturate-0 h-12 w-12 hover:saturate-100 transition" />
		{/each}
	</div>
</section>
