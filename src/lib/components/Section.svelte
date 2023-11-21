<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	let className = '';
	export { className as class };
</script>

<section class={twMerge('py-6', className)}>
	<slot />
</section>
