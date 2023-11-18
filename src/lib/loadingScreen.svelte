<script lang="ts">
	import Icon from '@iconify/svelte';
	import icon270RingWithBg from '@iconify/icons-svg-spinners/270-ring-with-bg';
	import { fade } from 'svelte/transition';
</script>

<div class="fixed inset-0 bg-secondary-100 z-50 flex items-center justify-center" transition:fade>
	<Icon icon={icon270RingWithBg} class="text-5xl" />
</div>
