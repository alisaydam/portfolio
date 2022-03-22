<script>
	import ProjectCard from './ProjectCard.svelte';
	export let content;

	let tabs = content.projects.projectTabs;
	let activeTab = content.projects.projectTabs[0];
</script>

<h2>{content.projects.title}</h2>
<div class="container">
	{#each content.projects.projects as project}
		<ProjectCard {tabs} {activeTab} {project} />
	{/each}
</div>

<style>
	h2 {
		text-align: center;
	}
	.container {
		max-width: 1100px;
		margin: auto;
		display: flex;
		justify-content: start;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
