<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	let { cover, href }: { cover: string; href: string } = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer" class="w-fit h-fit cursor-pointer">
	<div class="relative cover overflow-hidden w-fit">
		<div class="absolute cover-effect w-[200%] h-[200%] -left-1/2 -top-1/2"></div>
		<img src={cover} alt="" class="mx-auto w-50" />
	</div>
</a>

<style>
	.cover {
		transition: transform 0.3s ease-in;
	}
	.cover-effect {
		opacity: 0.25;
		transition:
			background-position 0.3s ease-in,
			transform 0.3s ease;
		background-size: 400% 400%;
		background-position: 0% 0%;
		background-image: linear-gradient(50deg, transparent 48%, gray 50%, white 52%, transparent 54%);
	}

	a:hover .cover {
		transform: matrix(0.95, -0.04, 0, 1, 0, 0);
	}

	a:hover .cover-effect {
		background-position: 30% 30%;
		transform: rotate(10deg);
	}
</style>
