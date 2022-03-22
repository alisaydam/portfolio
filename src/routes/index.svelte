<script>
	import css from '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Header from '$lib/Header.svelte';
	import TechStack from '$lib/TechStack.svelte';
	import Projects from '$lib/Projects.svelte';
	import { turkishContent, englishContent } from '../content';
</script>

<Navbar content={turkishContent} />
<Header />
<TechStack content={englishContent} />
<Projects content={englishContent} />

<style>
	 
     :root {
	--gray0: #F4FCD9;
	--gray1: #C5D8A4;
	--gray2: #b2becd;
	--gray3: #e6bfa4;
	--gray4: #454e56;
	--gray5: #2e2a35;
	--gray6: #1d2529;
	--blue: #0084a5;
	--purple: #a82dd1;
	--yellow: #fff565;
}

.light{
	--bg: var(--gray0);
	--bg-nav: linear-gradient(to right, var(--gray1), var(--gray3));
	--bg-dropdown: var(--gray0)
	--text: var(--gray6);
	--border-color: var(--blue);
	--bg-solar: var(--yellow);
}
.dark{ 
	--bg: var(--gray5);
	--bg-nav: linear-gradient(to right, var(--gray5), var(--gray6));
	--bg-dropdown: var(--gray6);
	--text: var(--gray0);
	--border-color: var(--purple);
	--bg-solar: var(--blue);
	
}
.solar{
	--gray0: #fbffd4;
	--gray1: #f7f8d0;
	--gray2: #b6f880;
	--gray3: #5ec72d;
	--gray4: #3ea565;
	--gray5: #005368;
	--gray6: #003d4c;
}


/* Might delete */
body {
	margin: 0;
	padding: 0;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	color: var(--text);
	background: var(--bg);
	transition: background 500ms ease-in-out, color 1000ms ease-in-out;
	
}

ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
a {
	color: currentColor;
	text-decoration: none;
}

</style>
