<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	let solar;
	export let content;
	const darkButton = () => {
		document.body.classList.replace('light', 'dark');
		localStorage.setItem('theme', 'dark');
	};
	const lightButton = () => {
		document.body.classList.replace('dark', 'light');
		localStorage.setItem('theme', 'light');
	};
	const solarButton = () => {
		if (document.body.classList.contains('solar')) {
			document.body.classList.remove('solar');
			solar.style.cssText = `
			--bg-solar: var(--yellow);
			`;
			solar.innerText = 'solarize';

			localStorage.removeItem('isSolar');
		} else {
			solar.style.cssText = `
			--bg-solar: white;
			`;

			document.body.classList.add('solar');
			solar.innerText = 'normalize';
			localStorage.setItem('isSolar', 'true');
		}
	};

	onMount(() => {
		const theme = localStorage.theme;
		const isSolar = localStorage.isSolar;
		document.body.classList.add(theme);
		isSolar && document.body.classList.add('solar');
		console.log(theme);
	});
	let language = 'eng.png';

	const toggleLanguage = () => {
		language = language === 'eng.png' ? 'tr.png' : 'eng.png';
		dispatch('language', language);
	};
</script>

<nav class="navbar">
	<ul class="navbar-nav">
		<li class="nav-item"><a href="#top"><img class="logo-p logo" src="p-logo.png" alt="" /></a></li>
		<li class="nav-item"><a href="#tech-stack">{content.navbar.techStack}</a></li>
		<li class="nav-item"><a href="#projects">{content.navbar.projects}</a></li>
		<li class="nav-item"><a href="#contact">{content.navbar.contact}</a></li>
		<!-- Dropdown -->
		<li class="nav-item has-dropdown">
			<a href="">{content.navbar.theme}</a>
			<ul class="dropdown">
				<li class="dropdown-item">
					<a href="" on:click={lightButton} id="light">{content.navbar.themes.light}&nbsp;&nbsp;</a>
				</li>
				<li class="dropdown-item">
					<a href="" on:click={darkButton} id="dark">{content.navbar.themes.dark}&nbsp;&nbsp; </a>
				</li>
				<li class="dropdown-item">
					<a href="" bind:this={solar} on:click={solarButton} id="solar"
						>{content.navbar.themes.solarize}</a
					>
				</li>
			</ul>
		</li>
		<!-- svelte-ignore a11y-missing-attribute -->
		<li class="nav-item">
			<a href="" on:click={toggleLanguage}><img src={language} alt="" width="28" /></a>
		</li>
	</ul>
</nav>

<style>
	a {
		font-size: small;
	}
	a:hover {
		color: #00a5ce;
	}
	.logo-p {
		width: 50px;
	}
	.navbar {
		height: 70px;
		width: 100%;
		background: var(--bg-nav);
		color: var(--text);
	}
	.navbar-nav {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 100%;
		max-width: 1200px;
		margin: auto;
	}

	.dropdown li {
		margin-bottom: 10px;
		width: 75px;
		text-align: center;
	}
	.dropdown {
		position: absolute;
		opacity: 0;
		visibility: hidden;
		z-index: 2;
		background: var(--bg-dropdown);
		border-top: 2px solid var(--border-color);

		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;

		margin-top: 2rem;
		padding-top: 0.5rem;

		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		padding: 0.5rem;
		box-shadow: rgba(2, 8, 20, 0.1) 0px 0.175rem 0.5rem;
		transform: translateX(-43%);

		transition: opacity 0.15s ease-out;
	}
	.has-dropdown:focus-within .dropdown {
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
	}
	.dropdown-item a {
		width: 100%;
		height: 100%;
		size: 0.7rem;
		font-weight: bold;
	}

	.dropdown-item a::before {
		content: ' ';
		border: 2px solid var(--border-color);
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		display: inline-block;
		vertical-align: middle;
		margin-right: 10px;
	}
	#dark::before {
		background: #2a2e35;
	}

	#light::before {
		background: #ffffff;
	}

	#solar::before {
		background: var(--bg-solar);
	}

	@keyframes color-rotate {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	}
	.logo {
		font-weight: 700;
	}
	.logo:hover {
		animation: color-rotate 1s;
		animation-iteration-count: infinite;
		animation-direction: alternate-reverse;
	}
</style>
