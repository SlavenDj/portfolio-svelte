<script>
	import Button from './Button.svelte';
	import DecorationImage from './DecorationImage.svelte';
</script>

<section class="flex flex-col gap-8 px-5">
	<h2 class="font-semibold text-4xl">About me</h2>
	<div class="grid lg:grid-cols-2 gap-12 justify-between">
		<DecorationImage />
		<div class="flex flex-col gap-8">
			<p class="max-w-lg">
				Hello! I'm Slaven, a passionate full-stack developer specializing in frontend development
				and UI/UX design. My journey began in primary-500 school, where my curiosity and fascination
				with technology ignited. From an early age, I was captivated by the power of coding and
				design to transform ideas into immersive digital experiences. Throughout my educational
				journey, I proactively delved deeper into programming and design concepts, teaching myself
				the fundamentals and expanding my skills through personal projects and online resources.
				Now, as a professional, I possess expertise in frontend and backend development, as well as
				UI/UX design. With a well-rounded skill set and an unwavering thirst for knowledge, I
				approach each project with enthusiasm and creativity, ready to bring your ideas to life and
				create impactful digital experiences. Let's collaborate and make a difference together.
			</p>

			<div class="flex gap-4 flex-col md:flex-row">
				<Button link="/contact">Get in touch</Button>
				<Button link="/about" variant="secondary">Discover my story</Button>
			</div>
		</div>
	</div>
</section>
