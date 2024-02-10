<script lang="ts">
	import Icon from '@iconify/svelte';

	//export let value: string;
	export let icon: string;
</script>

<span class="inline-flex items-center gap-2 p-0.5 px-2 bg-black/25 rounded my-0.5">
	<Icon {icon} class="w-4 h-4" />
	<span class="dark:text-white"><slot /></span>
</span>
