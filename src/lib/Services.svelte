<script>
	import Service from './Card.svelte';
	import Section from './components/Section.svelte';
	import Tag from './tag.svelte';
</script>

<Section class="flex flex-col gap-6 px-5" id="services">
	<h2 class="text-4xl font-semibold">What I Do</h2>
	<div class="grid justify-between gap-10 grid-cols-smart">
		<Service>
			<img src="/fe.svg" alt="" class="max-w-xs" />
			<h3 class="text-4xl font-medium text-center">Frontend Developer</h3>
			<p>
				I specialize in crafting visually appealing and performant web interfaces <Tag
					icon="logos:javascript">JS</Tag
				>
				<Tag icon="logos:react">React</Tag>
				<Tag icon="logos:typescript-icon">TS</Tag>
				<Tag icon="logos:nextjs-icon">Next.js</Tag>
				<Tag icon="vscode-icons:file-type-tailwind">Tailwind</Tag>
				<Tag icon="logos:svelte-icon">Svelte[Kit]</Tag>
				<Tag icon="simple-icons:shadcnui">shadcnui</Tag>. Skilled in modern JavaScript frameworks
				and libraries, I bring designs to life with interactive and dynamic user experiences.

				<Tag icon="vscode-icons:file-type-scss2">SCSS</Tag>
				<Tag icon="logos:git-icon">Git</Tag>
				<Tag icon="skill-icons:webflow">Webflow</Tag>
				<Tag icon="radix-icons:framer-logo">Framer</Tag>
			</p>
		</Service>
		<Service>
			<img src="/ui.svg" alt="" class="max-w-xs" />
			<h3 class="text-4xl font-medium text-center">UI/UX Designer</h3>
			<p>
				My forte is in creating intuitive and engaging user interfaces. With a deep understanding of
				user behavior and design principles, I visualize digital solutions using <Tag
					icon="logos:figma">Figma</Tag
				> that users love and appreciate.
			</p>
		</Service>
		<Service>
			<img src="/be.svg" alt="" class="max-w-xs" />
			<h3 class="text-4xl font-medium text-center">Backend Developer</h3>
			<p class="">
				From databases (<Tag icon="logos:postgresql">PostgreSQL</Tag>
				<Tag icon="fontisto:mysql">MySQL</Tag>) to server-side scripting (<Tag
					icon="logos:nodejs-icon">Node.js</Tag
				>), I have honed my skills in creating robust backend infrastructures. I ensure that data
				flow, security, and API integrations meet the highest standards. I also use <Tag
					icon="logos:supabase-icon">Supabase</Tag
				> to build scalable and secure web applications.
				<Tag icon="logos:php">PHP</Tag>
				<Tag icon="logos:python">Python</Tag>
				<Tag icon="logos:firebase">Firebase</Tag>
				<Tag icon="logos:mongodb-icon">MongoDB</Tag>
				<Tag icon="logos:vitejs">Vite</Tag>
				<Tag icon="logos:builder-io-icon">Vite</Tag>

				<!-- I also use my expertise in 
				> and <Tag icon="logos:laravel">Laravel</Tag> to build scalable and secure web applications. -->

				<!-- 		-->
			</p>
		</Service>
	</div>
</Section>
