<script>
	import Service from './Service.svelte';
</script>

<section class="flex flex-col gap-20 px-5">
	<h2 class="font-semibold text-4xl">What I Do</h2>
	<div class="grid grid-cols-smart gap-10 justify-between">
		<Service>
			<img src="/fe.svg" alt="" class="max-w-xs" />
			<h3 class="font-medium text-4xl text-center">Frontend Developer</h3>
			<p>
				I specialize in crafting visually appealing and performant web interfaces. Skilled in modern
				JavaScript frameworks and libraries, I bring designs to life with interactive and dynamic
				user experiences.
			</p>
		</Service>
		<Service>
			<img src="/ui.svg" alt="" class="max-w-xs" />
			<h3 class="font-medium text-4xl text-center">UI/UX Designer</h3>
			<p>
				My forte is in creating intuitive and engaging user interfaces. With a deep understanding of
				user behavior and design principles, I visualize digital solutions that users love and
				appreciate.
			</p>
		</Service>
		<Service>
			<img src="/be.svg" alt="" class="max-w-xs" />
			<h3 class="font-medium text-4xl text-center">Backend Developer</h3>
			<p>
				From databases to server-side scripting, I have honed my skills in creating robust backend
				infrastructures. I ensure that data flow, security, and API integrations meet the highest
				standards.
			</p>
		</Service>
	</div>
</section>
