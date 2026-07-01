<script lang="ts">
	import { slide } from 'svelte/transition';

	import Profile from '$lib/assets/jesse-headshot.jpg';

	let scrollTop: number = 0;
	const sections: HTMLDivElement[] = [];
	let currentSection = 0;

	function handleScroll() {
		if (window.outerWidth > 600) {
			const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
			if (newScrollTop > scrollTop) {
				currentSection = Math.min(currentSection + 1, sections.length - 1);
			} else if (newScrollTop < scrollTop) {
				currentSection = Math.max(currentSection - 1, 0);
			}
			sections[currentSection]?.scrollIntoView({ behavior: 'smooth' });
			scrollTop = newScrollTop;
		}
	}
</script>

<svelte:window on:scroll={handleScroll} />

<div
	bind:this={sections[0]}
	class="min-h-screen min-w-screen flex flex-col items-center justify-center"
>
	<h1 class="lg:text-[12rem] md:text-[8rem] text-6xl">Jesse Gerlach</h1>
	<p class="text-4xl">Author - Father - Husband</p>
</div>

<div
	bind:this={sections[1]}
	class="min-h-screen min-w-screen flex flex-col items-center justify-center gap-10"
>
	<div class="flex flex-row flex-wrap items-center justify-center gap-8 max-w-6xl">
		<div class="w-50 border border-gray-300 shadow -rotate-3" transition:slide={{ axis: 'x' }}>
			<img
				src={Profile}
				alt="Stoic headshot of man with red beard and pony tail in the woods."
				class="border-4 border-white"
			/>
		</div>
		<div class="basis-2/3">
			<p class="text-lg">
				Jesse Gerlach is a multi-talented storyteller and devoted follower of Jesus. Beyond living
				and bleeding story, he passionately dedicates himself to the roles of husband, father, poet,
				actor, and swordsman. Ignited by his first lightsaber, his passion for captivating
				narratives took flight, leading him to excel in the realms of theatre and literature. With a
				background as a writing tutor and professional ghostwriter for over 160 books, Jesse has
				written several immersive series, including The Sound Shaper Series, The Banisher
				Chronicles, and more! Prepare for an extraordinary journey as he delivers captivating
				stories that leave an indelible impact, showcasing his limitless talent and unwavering
				dedication.
			</p>
		</div>
	</div>
	<div>
		<a
			class="p-4 rounded-md border-2 border-gray-600 hover:bg-amber-200"
			href="/Gerlach, Jesse - Resumé.pdf"
			target="_blank"
		>
			Resume
		</a>
	</div>
</div>
