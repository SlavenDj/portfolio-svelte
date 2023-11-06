<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class=" grid place-items-center">
	<h1>{$page.status}: {$page.error?.message}</h1>
</main>
