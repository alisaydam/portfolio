<script>
	export let techStack;
</script>

<div class="tech-card">
	<div class="name"><p>{techStack.name}</p></div>
	<img src={techStack.src} alt={techStack.src} />
</div>

<style>
	.tech-card {
		max-width: 100px;
		position: relative;
		margin-right: 25px;
	}
	img {
		width: 100%;
		object-fit: cover;
		/* filter: invert(100%) hue-rotate(222deg); */
	}
	.name {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-solar);
		width: 100%;
		text-align: center;
		visibility: hidden;
		height: 30px;
		top: -20px;
		transition: ease-in-out 500ms;
		opacity: 0;
		border-radius: 0 0 10px 10px;
	}
	p {
		line-height: 0.5;
		vertical-align: middle;
	}
	.tech-card:hover > .name {
		visibility: visible;
		transform: translateY(20px);
		opacity: 1;
		transition: opacity visibility ease-in-out 500ms;
	}
</style>
