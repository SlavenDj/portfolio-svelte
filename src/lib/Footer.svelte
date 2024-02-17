<script>
	import Icon from '@iconify/svelte';
	import twitterIcon from '@iconify/icons-mdi/twitter';
	import linkedinIcon from '@iconify/icons-mdi/linkedin';
	import githubIcon from '@iconify/icons-mdi/github';
	let year = new Date().getFullYear();

	let socialMedia = [
		{ name: 'Twitter', link: 'https://twitter.com/Slaven_Dje', icon: twitterIcon },
		{ name: 'LinkedIn', link: 'https://www.linkedin.com/in/slavendje', icon: linkedinIcon },
		{ name: 'GitHub', link: 'https://github.com/SlavenDj', icon: githubIcon }
	];
</script>

<footer class="py-6 text-white bg-gray-800">
	<div class="container px-4 mx-auto max-w-7xl">
		<div class="flex items-center justify-between">
			<div>
				Email: <a href="mailto:slavendjervida@gmail.com">slavendjervida@gmail.com</a>
			</div>

			<!-- Social Media Links -->
			<div class="flex gap-4">
				{#each socialMedia as platform (platform.name)}
					<a
						href={platform.link}
						class=" hover:text-primary-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon icon={platform.icon} class="w-8 h-8" />
					</a>
				{/each}
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-4 text-center">
			<p>&copy; {year} My Portfolio. All rights reserved.</p>
		</div>
	</div>
</footer>
