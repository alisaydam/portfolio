<script>
	import TechCard from './TechCard.svelte';
	import { techStacks } from '../content';
	export let content;
</script>

<h2 id="tech-stack">{content.techStack}</h2>
<div class="container">
	{#each techStacks as techStack}
		<TechCard {techStack} />
	{/each}
</div>

<style>
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
