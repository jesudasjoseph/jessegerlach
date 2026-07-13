<script lang="ts">
	import { slide } from 'svelte/transition';

	import Profile from '$lib/assets/jesse-headshot.jpg';
	import ButtonLink from './_Components/ButtonLink.svelte';

	import RoyalRoadLogo from '$lib/assets/logos/royal-road.png';
	import PatreonLogo from '$lib/assets/logos/PATREON_Lockup_Horizontal_BLACK_RGB.png';
	import ContactForm from './_Components/ContactForm.svelte';

	const SEO_TITLE = 'Jesse Gerlach | Author, Father, Husband, and Storyteller';
	const SEO_DESCRIPTION =
		'Discover Jesse Gerlach, a storyteller, writer, husband, father, poet, actor, and swordsman whose work spans theatre, literature, and immersive series.';

	const sections: HTMLDivElement[] = [];

	/* 
	let scrollTop: number = 0;
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
	} */
</script>

<svelte:head>
	<title>{SEO_TITLE}</title>
	<meta name="description" content={SEO_DESCRIPTION} />
	<meta name="author" content="Jesse Gerlach" />
	<meta
		name="keywords"
		content="Jesse Gerlach, author, storyteller, literature, theatre, fantasy, Christian fiction, ghostwriter, The Sound Shaper Series, The Banisher Chronicles"
	/>
	<meta property="og:title" content={SEO_TITLE} />
	<meta
		property="og:description"
		content="Explore the creative world of Jesse Gerlach, a devoted husband and father whose stories captivate readers and audiences alike."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={SEO_TITLE} />
	<meta
		name="twitter:description"
		content="Explore the creative world of Jesse Gerlach, a writer and storyteller with a passion for immersive narratives."
	/>
</svelte:head>

<!--<svelte:window on:scroll={handleScroll} />-->

<main class="p-4 lg:max-w-7xl lg:mx-auto">
	<div bind:this={sections[0]} class="min-h-screen flex flex-col items-center justify-center">
		<h1 class="lg:text-[12rem] md:text-[8rem] text-5xl">Jesse Gerlach</h1>
		<p class="lg:text-4xl md:text-2xl text-lg">Author - Father - Husband</p>
	</div>

	<div class="h-screen/2 py-30">
		<p class="md:text-3xl text-2xl text-center font-bold mb-16!">I am open for hire!</p>
		<p class="md:text-3xl text-2xl text-center mb-16!">
			As a professional ghostwriter, worldbuilder, outliner, editor, and co-writer. I am also
			professional DM, if you're looking for an epic new campaign, be it a homebrew, Daggerheart,
			Tales From the Loop, DND (5e or another edition), or a new one I haven't heard of.
		</p>
		<p class="md:text-3xl text-2xl text-center">
			I have competitive prices on each of those! <a href="#contact" class="underline">
				Send me a message below!
			</a>
		</p>
	</div>

	<div
		bind:this={sections[1]}
		class="h-screen/2 py-30 flex flex-row flex-wrap items-center justify-center gap-8"
	>
		<div
			class="w-60 border border-gray-300 size-fit shadow -rotate-3"
			transition:slide={{ axis: 'x' }}
		>
			<img
				src={Profile}
				alt="Stoic headshot of man with red beard and pony tail in the woods."
				class="border-4 border-white"
			/>
		</div>
		<div class="md:basis-2/3 text-lg">
			<p>Hi! I'm paid to create interdimensional portals conveniently disguised as books.</p>
			<p>
				I am also a published author, and father to two incredible boys, Ozias and Théoden, both of
				whom are kings in the making. My beautiful wife and I live by the river where swords and
				imagination run wild. My not-so-secret goal is to give my children a bookshelf's worth of
				stories they can spend countless hours reading, discussing, and (lightly) making fun of in
				front of the author.
			</p>
			<p>
				More than that, I am convinced that all stories, if done well, reflect the one True Story,
				written by God. As such, my tales contain intense arcs of darkness and light, violence and
				mercy, evil and good---just like our stories do. I don't shirk away from those things, nor
				do I sugarcoat them. Instead, I do my best to demonstrate for my sons, as well as for you
				readers, what it looks like to truly conquer evil and fight for a life worth living.
			</p>
			<p>Join me. I can't wait to get to know you.</p>
		</div>
	</div>

	<div class="flex flex-row flex-wrap items-center justify-center lg:gap-16 md:gap-8 gap-4">
		<ButtonLink href="https://www.royalroad.com/profile/419627" target="_blank">
			<span class="flex flex-row justify-center items-center gap-2">
				<img src={RoyalRoadLogo} alt="Royal Road Logo" class="h-8" />
				<span>Royal Road</span>
			</span>
		</ButtonLink>
		<ButtonLink href="https://www.patreon.com/cw/JesseGerlachWrites" target="_blank">
			<img src={PatreonLogo} alt="Patreon Logo" class="lg:h-10 h-6" />
			<span class="sr-only">Patreon</span>
		</ButtonLink>
		<ButtonLink href="/Gerlach, Jesse - Resumé.pdf" target="_blank">Resumé</ButtonLink>
		<ButtonLink href="#contact">Message Me!</ButtonLink>
	</div>

	<!-- 	<div>
		<h2 class="mb-8 text-3xl font-bold py-30 text-center">~~~ My Work ~~~</h2>
		<div></div>
	</div> -->

	<div class="py-30">
		<div id="contact" class="relative p-4 max-w-4xl mx-auto">
			<div
				class="absolute pointer-events-none left-0 right-0 top-0 bottom-0 rotate-[0.5deg] border border-gray-300"
			></div>
			<ContactForm />
		</div>
	</div>
</main>
