<script lang="ts">
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	export let variant: 'primary' | 'secondary' = 'primary';
	export let type: HTMLButtonAttributes['type'] = 'button';
	let className = '';
	let defaultStyle = 'text-center rounded-full active:scale-95 transition-all hover:opacity-75';
	export { className as class };
	const styles = {
		primary: 'bg-primary-500 text-white p-3 px-6  text-xl font-semibold dark:bg-primary-700 ',
		secondary: ' border-current border p-3 px-6  text-xl font-medium '
	};

	const c = twMerge(defaultStyle, styles[variant], className);
	export let link: string | null = null;
	export let prop: HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> = {};
</script>

{#if link}
	<a href={link} class={c} {...prop}>
		<slot />
	</a>
{:else}
	<button class={c} on:click {type} {...prop}>
		<slot />
	</button>
{/if}
