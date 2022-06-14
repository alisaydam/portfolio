<script>
	export let content;
</script>

<header>
	<div class="container">
		<img src="hero.png" alt="" />
		<div class="about">
			<p>{content.header.hello}</p>
			<h1>Ali Saydam.</h1>
			<p>
				{content.header.about}
			</p>
			<a href="alisaydam.pdf">{content.header.cv}</a>
		</div>
	</div>
</header>

<style>
	h1 {
		line-height: 0.5;
	}
	p {
		font-weight: 200;
		font-size: large;
	}
	.container {
		display: flex;
		justify-content: flex-start;
		max-width: 1000px;
		margin: auto;
	}
	.about {
		padding-top: 10%;
		width: 50%;
		text-align: center;
	}
	img {
		width: 50%;
		min-width: 300px;
	}
	@media only screen and (max-width: 600px) {
		.container {
			flex-direction: column-reverse;
		}
		img {
			width: 100%;
		}
		.about {
			width: 100%;
		}
	}

	header {
		padding: 1em;
		clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0);
		background: var(--bg-nav);
		margin-bottom: 1em;
		padding-bottom: 3.5em;
	}
</style>
