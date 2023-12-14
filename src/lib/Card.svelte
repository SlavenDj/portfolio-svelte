<script lang="ts">
	const createMouseHoverAnimation = (element: HTMLElement) => {
		const handleMouseEvent = (e: MouseEvent) => {
			const { x: width, y: height } = element.getBoundingClientRect();
			const { clientX: mouseX, clientY: mouseY } = e;
			let circleX = mouseX - width;
			let circleY = mouseY - height;
			element.style.background = `radial-gradient(250px circle at ${circleX}px ${circleY}px,#E09A93 0,#4DDACA 80%,transparent 100%)`;
		};

		addEventListener('mousemove', handleMouseEvent);
		return {
			destroy() {
				removeEventListener('mousemove', handleMouseEvent);
			}
		};
	};
</script>

<main
	class=" p-0.5 rounded-xl bg-transparent relative overflow-hidden h-min"
	use:createMouseHoverAnimation
>
	<div
		class="relative flex flex-col items-center gap-10 p-8 transition select-none rounded-xl bg-secondary-200 dark:bg-primary-800"
	>
		<slot />
	</div>
</main>
