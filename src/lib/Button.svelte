<script>
	// Empty script tag
	import { twMerge } from 'tailwind-merge';
</script>

<button
	class={twMerge(
		'text-primary-500 border-current border p-3 px-6 rounded-full text-xl font-medium text-center'
	)}
>
	<slot />
</button>
