<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	let className = '';
	export { className as class };
	export let id = '';
</script>

<section class={twMerge('py-6', className)} {id}>
	<slot />
</section>
