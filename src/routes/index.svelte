<script>
	import css from '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Header from '$lib/Header.svelte';
	import TechStack from '$lib/TechStack.svelte';
	import Projects from '$lib/Projects.svelte';
	import Footer from '$lib/Footer.svelte';
	import { turkishContent, englishContent } from '../content';

	$: content = englishContent;

	const toggleLanguage = (e)=> {
		e.detail === "tr.png" ? content = turkishContent : content = englishContent
	}
	let y;
	$: showScrollTopButton = y > 200 ? true : false;
</script>
<svelte:window bind:scrollY={y} />

<Navbar {content} on:language={toggleLanguage}/>
<Header />
<a href="/cv	/resume">cccc</a>
{#if y > 50}
<a href="#top" title="Go to top" class="scrolltop" id="scroll-top" class:show-scroll={showScrollTopButton}>
	<i class="bx bx-up-arrow-alt scrolltop__icon" />
</a>
{/if}
<TechStack content={englishContent} />
<Projects content={englishContent} />
<Footer />

<style>
	.scrolltop{
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		font-size: 25px;
		font-weight: bolder;
	}
</style>