<script>
	import TechCard from './TechCard.svelte';
	import { techStacks } from '../content';
	export let content;
</script>

<h2 id="tech-stack">{content.techStack}</h2>
<div class="container">
	{#each techStacks as techStack, i}
		<TechCard {techStack} />
	{/each}
	<!-- {#if i === 9}
	<div class="dark-fit">
		<TechCard {techStack} />
	</div>	
	{:else}
	<TechCard {techStack} />
	{/if} -->
</div>

<style>
	.dark-fit {
		filter: invert(100%) hue-rotate(222deg);
		color: white;
	}
	h2 {
		text-align: center;
	}
	.container {
		max-width: 1000px;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
