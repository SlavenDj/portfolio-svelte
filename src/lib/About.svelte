<script>
	import Button from './Button.svelte';
	import DecorationImage from './DecorationImage.svelte';
	import Section from './components/Section.svelte';
</script>

<Section class="flex flex-col gap-8 px-5" id="about">
	<h2 class="text-4xl font-semibold">About me</h2>
	<div class="grid justify-between gap-12 lg:grid-cols-2">
		<DecorationImage />
		<div class="flex flex-col gap-8">
			<p class="max-w-lg">
				Hello! I'm Slaven, a passionate Full Stack developer specializing in frontend development
				and UI/UX design. My journey began in primary school, where my curiosity and fascination
				with technology ignited. From an early age, I was captivated by the power of coding and
				design to transform ideas into immersive digital experiences. Throughout my educational
				journey, I proactively delved deeper into programming and design concepts, teaching myself
				the fundamentals and expanding my skills through personal projects and online resources.
				Now, as a professional, I possess expertise in frontend and backend development, as well as
				UI/UX design. With a well-rounded skill set and an unwavering thirst for knowledge, I
				approach each project with enthusiasm and creativity, ready to bring your ideas to life and
				create impactful digital experiences. Let's collaborate and make a difference together.
			</p>

			<div class="flex flex-col gap-4 md:flex-row">
				<Button link="/contact">Get in touch</Button>
				<Button link="/about" variant="secondary">Discover my story</Button>
			</div>
		</div>
	</div>
</Section>
