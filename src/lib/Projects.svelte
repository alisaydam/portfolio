<script>
	import ProjectCard from './ProjectCard.svelte';
	export let content;
  
</script>

<h2 id="projects">{content.projects.title}</h2>
<div class="container">
	{#each content.projects.projects as project}
		<ProjectCard tabs={content.projects.projectTabs} activeTab={content.projects.projectTabs.overview} {project} />
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
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
