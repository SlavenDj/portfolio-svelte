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

<footer class="bg-gray-800 text-white py-6">
	<div class="container mx-auto px-4 max-w-7xl">
		<div class="flex justify-between items-center">
			<div>
				Email: <a href="mailto:slavendjervida@gmail.com">slavendjervida@gmail.com</a>
			</div>

			<!-- Social Media Links -->
			<div class="flex gap-4">
				{#each socialMedia as platform (platform.name)}
					<a
						href={platform.link}
						class="text-gray-300 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon icon={platform.icon} />
					</a>
				{/each}
			</div>
		</div>

		<!-- Copyright -->
		<div class="text-center mt-4">
			<p>&copy; {year} My Portfolio. All rights reserved.</p>
		</div>
	</div>
</footer>
