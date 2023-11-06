<script>
	const icons = [
		'vscode-icons:file-type-light-next',
		'vscode-icons:file-type-svelte',
		'vscode-icons:file-type-css',
		'vscode-icons:file-type-html',
		'vscode-icons:file-type-tailwind',
		'vscode-icons:file-type-js-official',
		'vscode-icons:file-type-scss2',
		'ion:logo-tux',
		'vscode-icons:file-type-reactjs',
		'vscode-icons:file-type-node2',
		'vscode-icons:file-type-typescript-official',
		'iconoir:figma'
	];
	import Icon from '@iconify/svelte';
</script>

<section class="min-h-screen flex flex-col relative -top-32 pb-8">
	<div class="flex items-center justify-between gap-12 grow flex-col md:flex-row">
		<div class="flex flex-col max-w-lg gap-8 md:order-none order-1">
			<h1 class="text-5xl">Transforming Ideas into Engaging Digital Experiences</h1>
			<div class="flex flex-col gap-6">
				<p>
					A full-stack developer and UI/UX designer with a strong emphasis on user-centered design,
					I bring together the art of aesthetics and the science of functionality to craft
					captivating websites and applications.
				</p>

				<div class="flex md:items-center gap-6 flex-col md:flex-row items-stretch">
					<a
						href="/projects"
						class="bg-primary-500 text-white p-3 px-6 rounded-full text-xl font-semibold text-center"
					>
						Explore My Work
					</a>

					<button
						class="text-primary-500 border-current border p-3 px-6 rounded-full text-xl font-medium text-center"
					>
						Hire me
					</button>
				</div>
			</div>
		</div>
		<img src="/coding.svg" alt="coding" draggable="false" />
	</div>

	<div class="flex items-center justify-between">
		{#each icons as icon}
			<Icon {icon} class="saturate-0 h-12 w-12 hover:saturate-100 transition" />
		{/each}
	</div>
</section>
