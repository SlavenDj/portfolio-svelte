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
				I specialize in crafting visually appealing and performant web interfaces. Skilled in modern
				JavaScript frameworks and libraries, I bring designs to life with interactive and dynamic
				user experiences.
				<Tag icon="logos:javascript">JS</Tag>
				<Tag icon="logos:react">React</Tag>
				<Tag icon="logos:typescript-icon">TS</Tag>
				<Tag icon="logos:nextjs-icon">Next.js</Tag>
				<Tag icon="vscode-icons:file-type-tailwind">Tailwind</Tag>
				<Tag icon="logos:svelte-icon">Svelte</Tag>
				<Tag icon="logos:git-icon">Git</Tag>
				<Tag icon="simple-icons:shadcnui">shadcnui</Tag>
				<Tag icon="vscode-icons:file-type-scss2">SCSS</Tag>
			</p>
		</Service>
		<Service>
			<img src="/ui.svg" alt="" class="max-w-xs" />
			<h3 class="text-4xl font-medium text-center">UI/UX Designer</h3>
			<p>
				My forte is in creating intuitive and engaging user interfaces. With a deep understanding of
				user behavior and design principles, I visualize digital solutions that users love and
				appreciate.
				<Tag icon="logos:figma">Figma</Tag>
			</p>
		</Service>
		<Service>
			<img src="/be.svg" alt="" class="max-w-xs" />
			<h3 class="text-4xl font-medium text-center">Backend Developer</h3>
			<p class="">
				From databases <Tag icon="logos:postgresql">PostgreSQL</Tag> to server-side scripting, I have
				honed my skills in creating robust backend infrastructures. I ensure that data flow, security,
				and API integrations meet the highest standards.
				<Tag icon="logos:nodejs-icon">Node.js</Tag>
				<Tag icon="logos:supabase-icon">Supabase</Tag>
				<Tag icon="fontisto:mysql">MySQL</Tag>
				<!-- 		<Tag icon="logos:python">Python</Tag> -->
			</p>
		</Service>
	</div>
</Section>
