<script lang="ts">
	import type { Snippet } from 'svelte';

	/* eslint-disable svelte/no-navigation-without-resolve */

	let {
		href,
		children,
		target = '_self'
	}: { href: string; target?: string; children: Snippet } = $props();
</script>

<a
	class="btn lg:text-3xl shadow w-fit h-16 flex items-center justify-center text-black font-bold"
	{href}
	{target}
>
	{@render children()}
</a>
