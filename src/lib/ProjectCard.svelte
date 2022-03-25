<script>
	export let tabs;
	export let activeTab;
	export let project;
</script>
<div class="wrapper">
	<h4 class="title">{project.name}</h4>
	<div class="project-card">
		<div class="tabs">
			<button on:click={() => activeTab = tabs.overview} class:active={tabs.overview === activeTab}
				>{tabs.overview}</button
			>
			<button on:click={() => activeTab = tabs.usedTech} class:active={tabs.usedTech === activeTab}
				>{tabs.usedTech}</button
			>
		</div>
		{#if activeTab === tabs.overview}
			<div class="overview">
				<p>
					{project.overview}
				</p>
				<div class="links">
					<a target="_blank" rel="external" href={project.preview}>Click to view</a>
					<a target="_blank" href={project.gitHub}
						><svg viewBox="0 0 30 30" width="20px" height="20px">
							<path
								d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
							/></svg
						></a
					>
				</div>
			</div>
		{:else}
			<div class="tech">
				<div class="tech-sec">
					<h4 class="sections">Backend</h4>
					<ul>
						{#each project.usedTech.backend as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div class="tech-sec">
					<h4 class="sections">Frontend</h4>
					<ul>
						{#each project.usedTech.frontend as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.title {
		margin:  5px 0;
	}
	.project-card {
		margin: 0 10px;
		width: 200px;
		height: 200px;
		border-radius: 10px;
		background-color: var(--bg-dropdown);
		color: var(--text);
		box-shadow: rgba(59, 59, 59, 0.2) 0px 2px 8px 0px;
	}
	.active {
		background-color: #00a5ce;
	}
	.tabs {
		display: flex;
	}
	.tabs button:nth-child(1) {
		border-radius: 10px 0 0 0;
	}
	.tabs button:nth-child(2) {
		border-radius: 0 10px 0 0;
	}
	button {
		width: 50%;
		cursor: pointer;
		height: 30px;
		background-color: var(--bg-dropdown);
		color: var(--text);
		border: none;
		font-weight: 500;
	}
	h4 {
		margin: 0;
		text-align: center;
		font-weight: 400;
		font-size: 16px;
	}
	.overview {
		text-indent: 10px;
		padding: 0 10px;
		font-size: 12px;
	}
	.links {
		display: flex;
	}
	svg {
		fill: var(--text);
	}
	svg:hover {
		fill: #00a5ce;
	}
	a {
		color: var(--text);
		margin: auto;
	}
	a:hover {
		color: #00a5ce;
	}

	/* Used Tech */
	.tech {
		margin-top: 5px;
		padding: 0 10px;
		display: flex;
	}
	.tech-sec {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}

	.sections {
		font-size: 12px;
		border-bottom: 1px solid var(--text);
	}
	li {
		list-style: disc;
		font-size: 12px;
	}
	ul {
		padding: 5px 0 0 10px;
	}
</style>
