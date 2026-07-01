<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */

	let scrollTop: number = 0;
	const sections: HTMLDivElement[] = [];
	let currentSection = 0;

	function handleScroll() {
		const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if (newScrollTop > scrollTop) {
			currentSection = Math.min(currentSection + 1, sections.length - 1);
		} else if (newScrollTop < scrollTop) {
			currentSection = Math.max(currentSection - 1, 0);
		}
		sections[currentSection]?.scrollIntoView({ behavior: 'smooth' });
		scrollTop = newScrollTop;
	}
</script>

<svelte:window on:scroll={handleScroll} />

<div
	bind:this={sections[0]}
	id="heading"
	class="min-h-screen min-w-screen flex flex-col items-center justify-center"
>
	<h1 class="text-[12rem]">Jesse Gerlach</h1>
</div>

<div
	bind:this={sections[1]}
	id="byline"
	class="min-h-screen min-w-screen flex flex-col items-center justify-center"
>
	<p>Author, Father, Husband</p>
</div>

<div
	bind:this={sections[2]}
	id="links"
	class="min-h-screen min-w-screen flex flex-col items-center justify-center"
>
	<a href="/Gerlach, Jesse - Resumé.pdf" target="_blank">Resume</a>
</div>

<div class="flex flex-col"></div>
<p>Comming Soon!</p>
