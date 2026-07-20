<script lang="ts">
	import type { Snippet } from 'svelte';

	/* eslint-disable svelte/no-navigation-without-resolve */

	let {
		href,
		children,
		target = '_self'
	}: { href: string; target?: string; children: Snippet } = $props();

	const rotation = Math.floor(Math.random() * 8) - 3;
</script>

<a
	class="p-3 border border-gray-300 hover:bg-amber-200 cursor-pointer lg:text-3xl shadow w-fit"
	style="transform: rotate({rotation}deg);"
	{href}
	{target}
>
	{@render children()}
</a>
